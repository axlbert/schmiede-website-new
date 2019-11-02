import React from 'react';

import './post-carousel.css';
import DotControls from '../dot-controls';

export default function PostCarousel() {
  return (
    <div className="PostCarousel">
      <div className="PostCarousel-ImageWrapper">
        <img
          className="PostCarousel-Image"
          src="/work/carousel-1.jpg"
          alt="Carousel Image 1"
        />
      </div>
      <div className="PostCarousel-Controls">
        <DotControls length={3} activeIndex={0} />
      </div>
    </div>
  );
}
