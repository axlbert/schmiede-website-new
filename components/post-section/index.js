import React, { useState, useEffect } from 'react';

import PostTag from '../post-tag.enum';
import PostGrid from '../post-grid';
import PostFilters from '../post-filters';

const baseBackendUrl = 'http://schmiede.one/index.php/wp-json';
//const baseBackendUrl = 'http://localhost/wp-blog-api/index.php/wp-json';

/**
 * Fetches tag of a post from corresponding backend endpoint.
 * @param {*} rawPost 
 */
function fetchPostTag(rawPost) {
  const tagId = rawPost.tags[0];
  const url = `${baseBackendUrl}/wp/v2/tags/${tagId}`;
  if (!tagId) return;
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        resolve(data.name);
      })
      .catch(reject);
  });
}

/**
 * Fetches image of a post from corresponding backend endpoint.
 * @param {*} rawPost 
 */
function fetchPostMedia(rawPost) {
  const mediaId = rawPost.featured_media;
  const url = `${baseBackendUrl}/wp/v2/media/${mediaId}`;
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const imageSrc = data.guid ? data.guid.rendered : null;
        resolve(imageSrc);
      })
      .catch(reject);
  });
}

/**
 * Fetches data of a given post and 
 * converts the post into in-app format.
 * @param {*} rawPost 
 */
function fetchPostData(rawPost) {
  const fetchers = [
    fetchPostMedia(rawPost),
    fetchPostTag(rawPost),
  ];
  return Promise.all(fetchers)
    .then(([mediaSrc, tag]) => {
      return {
        title: rawPost.title.rendered,
        subtitle: tag,
        imageSrc: mediaSrc,
        content: rawPost.content.rendered,
      };
    });
}

/**
 * Post section component.
 * Fetches post data from backend.
 */
export default function PostSection() {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState();
  const [filter, setFilter] = useState(PostTag.ALL);

  /* feeding posts with data (image & tag) */
  function initPosts(rawPosts) {
    const postPromises = rawPosts.map(x => {
      return fetchPostData(x);
    });
    return Promise.all(postPromises)
      .then(fetchedPosts => {
        setPosts(fetchedPosts);
        setLoading(false);
      });
  }

  /* fetching posts list from backend */
  useEffect(() => {
    const backendUrl = `${baseBackendUrl}/wp/v2/posts`;
    // for cleaning up the effect
    const abortController = new AbortController();

    fetch(backendUrl, { signal: abortController.signal})
      .then(res => res.json())
      .then(_posts => initPosts(_posts))
      .catch(err => {
        setError(true);
        console.error(err);
      });
    
    return () => {
      abortController.abort();
    };
  }, []);

  /* rendering post grid screen due to fetching ready state */
  function renderGrid() {
    if (isError) {
      return <div style={{ color: 'red' }}>Error occurred.</div>
    } else if (isLoading) {
      return <div>Loading...</div>;
    } else if (posts) {
      return <PostGrid posts={posts} filter={filter} />;
    }
  };

  return (
    <section>
      <PostFilters filter={filter} onChange={setFilter} />
      { renderGrid() }
    </section>
  );
}
