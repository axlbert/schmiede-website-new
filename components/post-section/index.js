import React, { useState, useEffect } from 'react';

import PostTag from '../post-tag.enum';
import PostGrid from '../post-grid';

import posts0 from '../../data/posts';

const baseBackendUrl = 'http://schmiede.one/index.php/wp-json';
//const baseBackendUrl = 'http://localhost/wp-blog-api/index.php/wp-json';

/**
 * Post section component.
 */
export default function PostSection() {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [posts, setPosts] = useState(posts0);
  const [filter, setFilter] = useState(PostTag.ALL);

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
      <div>
        FILTERS
      </div>
      { renderGrid() }
    </section>
  );
}
