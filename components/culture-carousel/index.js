import React, { useState } from 'react';

import './culture-carousel.css';
import DotControls from '../dot-controls';

import cultureSlides from '../../data/culture-slides';

function renderSlides() {
  return cultureSlides.map((x, i) => {
    return (
      <img
        key={i}
        className="CultureCarousel-Image"
        src={x.imageSrc}
        alt={x.alt}
      />
    );
  });
}

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
      <div className="CultureCarousel-ImageWrapper">
        { renderSlides() }
      </div>
      <div className="CultureCarousel-Controls">
        <DotControls length={5} activeIndex={1} />
      </div>
    </div>
  );
}
