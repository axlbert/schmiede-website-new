import React from 'react';

import PostCard from '../post-card';

import posts from '../../data/posts';

const renderPosts = () => {
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
  return (
    <div className="Grid">
      { renderPosts() }
    </div>
  );
}
