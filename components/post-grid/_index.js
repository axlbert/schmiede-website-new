import React, { useState, useEffect } from 'react';

import PostCard from '../post-card';

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
const baseBackendUrl = 'http://localhost/wp-blog/index.php/wp-json';

export default function PostGrid() {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState();

  /*function fetchPostMedia(rawPost) {
    const mediaId = rawPost.featured_media;
    const url = `${baseBackendUrl}/wp/v2/media/${mediaId}`;
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          const p = {
            title: rawPost.title.rendered,
            subtitle: 'Subtitle',
            imageSrc: data.link,
          };
          resolve(p);
        })
        .catch(reject);
    });
  }*/

  /*function fetchPostTag(rawPost) {
    const tagId = rawPost.tags[0];
    const url = `${baseBackendUrl}/wp/v2/tags/${tagId}`;
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          const p = {
            title: rawPost.title.rendered,
            subtitle: data.name,
            imageSrc: '/work/project-2.jpg',
          };
          resolve(p);
        })
        .catch(reject);
    });
  }*/

  function initPosts(rawPosts) {
    /*const postPromises = rawPosts.map(x => {
      return fetchPostMedia(x);
    });
    Promise.all(postPromises)
      .then(fetchedPosts => {
        setPosts(fetchedPosts);
        setLoading(false);
      })*/
    const convertedPosts = [];
    rawPosts.map(x => {
      const p = {
        title: x.title.rendered,
        subtitle: 'Subtitle',
        imageSrc: '/work/project-2.jpg',
      };
      convertedPosts.push(p);
    });
    setPosts(convertedPosts);
    setLoading(false);
  }

  function renderPosts() {
    return posts.map((x, i) => {
      return (
        <PostCard
          key={i}
          onClick={ () => {} }
          {...x}
        />
      );
    })
  }

  useEffect(() => {
    const backendUrl = 'http://localhost/wp-blog/index.php/wp-json/wp/v2/posts';
    //const backendUrl = `${baseBackendUrl}/wp/v2/posts`;
    fetch(backendUrl)
      .then(res => res.json())
      .then(data => console.log(data))
      .then(_posts => initPosts(_posts))
      .catch(err => {
        setError(true);
        console.error(err);
      });
  }, []);

  const renderBody = () => {
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

  return (
    <div>
      { renderBody() }
    </div>
  );
}
