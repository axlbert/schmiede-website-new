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

  function renderLabels() {
    return cultureSlides.map((x, i) => {
      const label = x.label;
      const labelClassName = 'Carousel-Label CultureCarousel-Label' +
        (i === activeIndex ? ' CultureCarousel-Label_active' : '');
      return (
        <div key={i} className={labelClassName}>
          <div>
            <span className="Carousel-Subtitle">
              { label.subtitle }
            </span>
          </div>
          <div>
            <span className="Carousel-Title CultureCarousel-Title">
              { label.title }
            </span>
          </div>
          <div className="Carousel-Paragraph">
            { label.paragraph }
          </div>
        </div>
      );
    });
  }

  return (
    <div className="CultureCarousel">
      <div className="CultureCarousel-LabelWrapper">
        { renderLabels() }
      </div>
      <div className="CultureCarousel-ImageWrapper">
        { renderSlides() }
      </div>
      <div className="CultureCarousel-Controls">
        <DotControls
          length={cultureSlides.length}
          activeIndex={activeIndex}
          onClick={ (e, i) => setActiveIndex(i) }
        />
      </div>
    </div>
  );
}
