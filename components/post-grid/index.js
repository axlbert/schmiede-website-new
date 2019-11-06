import React, { useState, useEffect } from 'react';

import PostCard from '../post-card';
import PostDialog from '../post-dialog';
import Post from '../post';
import PostTag from '../post-tag.enum';

/**
 * Post grid & dialog presentational component.
 */
export default function PostGrid({ posts, filter }) {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPost, setCurrentPost] = useState(null);
  const [previousPost, setPreviousPost] = useState(null);
  const [nextPost, setNextPost] = useState(null);

  /* filtering posts */
  useEffect(() => {
    const filtered = posts.filter(x => {
      return !filter ||
        filter === PostTag.ALL ||
        x.subtitle === filter;
    });
    setFilteredPosts(filtered);
  }, [posts, filter]);
  
  /* on post card click */
  function handleCardClick(e, x, i) {
    setCurrentPost(x);
    if (i > 0) {
      setPreviousPost(filteredPosts[i - 1]);
    }
    if (i < filteredPosts.length - 1) {
      setNextPost(filteredPosts[i + 1]);
    }
    setDialogOpen(true);
  }

  /* on dialog close */
  function handleDialogClose() {
    setDialogOpen(false);
    setCurrentPost(null);
    setPreviousPost(null);
    setNextPost(null);
  }

  /* change to next or previous post */
  function shiftPost(x) {
    const i = filteredPosts.indexOf(x);
    setCurrentPost(filteredPosts[i]);
    if (i > 0) {
      setPreviousPost(filteredPosts[i - 1]);
    } else {
      setPreviousPost(null);
    }
    if (i < filteredPosts.length - 1) {
      setNextPost(filteredPosts[i + 1]);
    } else {
      setNextPost(null);
    }
    const muiDialogContainer = document.querySelector('.MuiDialog-container');
    muiDialogContainer.scroll(0, 0);
  }

  /* rendering filtered posts */
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
      <PostDialog open={isDialogOpen} onClose={handleDialogClose}>
        <Post 
          {...currentPost}
          previous={previousPost}
          next={nextPost}
          onPreviousClick={ () => shiftPost(previousPost) }
          onNextClick={ () => shiftPost(nextPost) }
        />
      </PostDialog>
    </div>
  );
}
