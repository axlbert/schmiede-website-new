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

export default function PostGrid() {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState();

  function initPosts(rawPosts) {
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
    //const backendUrl = 'http://schmiede.one/index.php/wp-json/wp/v2/posts';
    const backendUrl = 'http://localhost/wp-blog-api/index.php/wp-json/wp/v2/posts';
    fetch(backendUrl)
      .then(res => res.json())
      //.then(data => data.json())
      .then(_posts => initPosts(_posts));
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
