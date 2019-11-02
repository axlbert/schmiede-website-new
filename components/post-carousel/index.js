import React from 'react';

import './post-carousel.css';
import DotControls from '../dot-controls';

export default function PostCarousel() {
  return (
    <div className="Work-HeaderCarouselSmall">
      <img className="Work-HeaderImage" src="/work/carousel-1.jpg" />
      <div className="Work-HeaderControls">
        <DotControls length={3} activeIndex={0} />
      </div>
    </div>
  );
}
