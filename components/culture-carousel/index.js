import React from 'react';

import './culture-carousel.css';
import DotControls from '../dot-controls';

export default function CultureCarousel() {
  return (
    <div className="CultureCarousel">
      <div className="Carousel-Label CultureCarousel-Label">
        <div>
          <span className="Carousel-Subtitle">
            Initiative
          </span>
        </div>
        <div>
          <span className="Carousel-Title CultureCarousel-Title">
            is essential
          </span>
        </div>
        <div className="Carousel-Paragraph">
          We don’t manage people, we expect 
          people to manage themselves.
        </div>
      </div>
      <img
        className="CultureCarousel-Image"
        src="/about/culture.jpg"
        alt="Culture"
      />
      <div className="CultureCarousel-Controls">
        <DotControls length={5} activeIndex={1} />
      </div>
    </div>
  );
}
