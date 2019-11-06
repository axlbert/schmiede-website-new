import React, { useState, useEffect } from 'react';

import posts0 from '../../data/posts';
import PostCard from '../post-card';
import PostDialog from '../post-dialog';
import Post from '../post';
import PostTag from '../post-tag.enum';

/**
 * Post grid & dialog presentational component.
 * @param {*} param0 
 */
function PostGrid({ posts, filter }) {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    const filtered = posts.filter(x => {
      return !filter ||
        filter === PostTag.ALL ||
        x.subtitle === filter;
    });
    setFilteredPosts(filtered);
  }, [posts, filter]);
  
  function handleCardClick(e, x, i) {
    setDialogOpen(true);
  }

  function renderPosts() {
    return filteredPosts.map((x, i) => {
      return <PostCard key={i} {...x} onClick={ e => handleCardClick(e, x, i) } />
    });
  }

  return (
    <div>
      <div className="Grid">
        { renderPosts() }
      </div>
      <PostDialog open={isDialogOpen} onClose={ () => setDialogOpen(false) }>
        <Post {...filteredPosts[0]} />
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
      <PostGrid posts={posts0} filter={PostTag.ALL} />
    </section>
  );
}
