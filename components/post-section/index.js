import React, { useState } from 'react';

import posts0 from '../../data/posts';
import PostCard from '../post-card';
import PostDialog from '../post-dialog';
import Post from '../post';

/**
 * Post grid & dialog presentational component.
 * @param {*} param0 
 */
function PostGrid({ posts }) {
  const [isDialogOpen, setDialogOpen] = useState(false);

  function handleCardClick(e, x, i) {
    setDialogOpen(true);
  }

  function renderPosts() {
    return posts.map((x, i) => {
      return <PostCard key={i} {...x} onClick={ e => handleCardClick(e, x, i) } />
    });
  }

  return (
    <div>
      <div className="Grid">
        { renderPosts() }
      </div>
      <PostDialog open={isDialogOpen} onClose={ () => setDialogOpen(false) }>
        <Post {...posts[0]} />
      </PostDialog>
    </div>
  );
}

/**
 * Post section component.
 */
export default function PostSection() {
  return (
    <section>
      <div>
        FILTERS
      </div>
      <PostGrid posts={posts0} />
    </section>
  );
}
