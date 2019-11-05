import React, { useState, useEffect } from 'react';

import PostCard from '../post-card';
import PostDialog from '../post-dialog';
import Post from '../post';

import posts0 from '../../data/posts';

/*function renderPosts() {
  return posts0.map((x, i) => {
    return (
      <PostCard
        key={i}
        onClick={ () => {} }
        {...x}
      />
    );
  })
}*/


//const baseBackendUrl = 'http://schmiede.one/index.php/wp-json';
const baseBackendUrl = 'http://localhost/wp-blog-api/index.php/wp-json';

function fetchPostTag(rawPost) {
  const tagId = rawPost.tags[0];
  const url = `${baseBackendUrl}/wp/v2/tags/${tagId}`;
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        resolve(data.name);
      })
      .catch(reject);
  });
}

function fetchPostMedia(rawPost) {
  const mediaId = rawPost.featured_media;
  const url = `${baseBackendUrl}/wp/v2/media/${mediaId}`;
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        resolve(data.guid.rendered);
      })
      .catch(reject);
  });
}

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
 * Post grid component.
 */
export default function PostGrid() {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [previousPost, setPreviousPost] = useState(null);
  const [nextPost, setNextPost] = useState(null); 

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

  function renderPosts() {
    return posts.map((x, i) => {
      return (
        <PostCard
          key={i}
          onClick={ e => handleCardClick(e, x, i) }
          {...x}
        />
      );
    })
  }

  function handleCardClick(e, x, i) {
    setSelectedPost(x);
    if (i > 0) {
      setPreviousPost(posts[i - 1]);
    }
    if (i < posts.length - 1) {
      setNextPost(posts[i + 1]);
    }
    setDialogOpen(true);
  }

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

  function renderBody() {
    if (isError) {
      return <div style={{ color: 'red' }}>Error occurred.</div>
    } else if (isLoading) {
      return <div>Loading...</div>;
    } else {
      return (<div className="Grid">
        { renderPosts() }
      </div>);
    }
  };

  function handleDialogClose() {
    setDialogOpen(false);
    setSelectedPost(null);
    setPreviousPost(null);
    setNextPost(null);
  }

  return (
    <div>
      { renderBody() }
      <PostDialog open={isDialogOpen} onClose={handleDialogClose}>
        {
          selectedPost &&
            <Post
              {...selectedPost}
              previous={previousPost}
              next={nextPost}
            />
        }
      </PostDialog>
    </div>
  );
}

/*

<PostDialog
        maxWidth={'md'}
        scroll="body"
        open={isDialogOpen}
        onClose={ () => setDialogOpen(false) }
      >
        <button
          className="PostDialog-CloseButton"
          onClick={ () => setDialogOpen(false) }
        >
          <img
            className="PostDialog-CloseButtonImage"
            src="/close-button.svg"
            alt="Close"
          />
        </button>
        { selectedPost && <Post /> }
      </PostDialog>

*/

