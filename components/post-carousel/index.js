import React from 'react';

import './post-carousel.css';
import DotControls from '../dot-controls';

export default function PostCarousel() {
  return (
    <div className="PostCarousel">
      <img className="PostCarousel-Image" src="/work/carousel-1.jpg" />
      <div className="PostCarousel-Controls">
        <DotControls length={3} activeIndex={0} />
      </div>
    </div>
  );
}
