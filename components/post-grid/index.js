import React, { useState } from 'react';

import PostCard from '../post-card';

import posts from '../../data/posts';

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

export default function PostGrid() {
  const [isLoading, setLoading] = useState(true);

  const renderBody = () => {
    if (isLoading) {
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
