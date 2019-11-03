import React from 'react';

import './culture-carousel.css';
import DotControls from '../dot-controls';

export default function CultureCarousel() {
  return (
    <div className="CultureCarousel">
      <div className="CultureCarousel-Label">
        <div>
          <span className="CultureCarousel-Title">
            Initiative
          </span>
        </div>
        <div>
          <span className="CultureCarousel-Subtitle">
            is essential
          </span>
        </div>
        <div className="CultureCarousel-Paragraph">
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
