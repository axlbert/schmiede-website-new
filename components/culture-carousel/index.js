import React, { useState } from 'react';

import './culture-carousel.css';
import DotControls from '../dot-controls';

import cultureSlides from '../../data/culture-slides';

/**
 * Culture carousel component.
 */
export default function CultureCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderSlides = () => {
    return cultureSlides.map((x, i) => {
      const imageClassName = 'CultureCarousel-Image' +
        (i === activeIndex ? ' CultureCarousel-Image_active' : '')
      return (
        <img
          key={i}
          className={imageClassName}
          src={x.imageSrc}
          alt={x.alt}
        />
      );
    });
  }

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
      <div className="CultureCarousel-ImageWrapper">
        { renderSlides() }
      </div>
      <div className="CultureCarousel-Controls">
        <DotControls
          length={5}
          activeIndex={activeIndex}
          onClick={ (e, i) => setActiveIndex(i) }
        />
      </div>
    </div>
  );
}
