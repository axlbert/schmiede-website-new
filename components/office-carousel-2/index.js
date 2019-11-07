import React, { useState } from 'react';

import './office-carousel.css';
import Thumbnails from './thumbnails';

import officeSlides from '../../data/office-slides';

/**
 * Office carousel component.
 * @param {*} param0 
 */
export default function OfficeCarousel({ slides = officeSlides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function renderSLideLabels() {
    return slides.map((x, i) => {
      const label = x.label;
      const labelClassName = 'Carousel-Label OfficeCarousel-Label' +
        (i === activeIndex ? ' OfficeCarousel-Label_active' : '');
      return (
        <div key={i} className={labelClassName}>
          <div>
            <span className="Carousel-Subtitle">{ label.subtitle1 }</span>
          </div>
          <div>
            <span className="Carousel-Title OfficeCarousel-Title">
              { label.title }
            </span>
          </div>
          <div>
            <span className="Carousel-Subtitle">{ label.subtitle2 }</span>
          </div>
          <div className="Carousel-Paragraph">
            { label.paragraph }
          </div>
        </div>
      );
    });
  }

  function renderSlideImages() {
    return slides.map((x, i) => {
      const imageClassName = `OfficeCarousel-Image ${
        (i === activeIndex ? 'OfficeCarousel-Image_active' : '')
      }`;
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
    <div className="OfficeCarousel">
      <div className="OfficeCarousel-Layout">
        <div className="OfficeCarousel-LabelWrapper">
          { renderSLideLabels() }
        </div>
        <div className="OfficeCarousel-ImageWrapper">
          { renderSlideImages() }
        </div>
      </div>
      
      <div className="OfficeCarousel-ThumbnailsWrapper">
        <Thumbnails
          slides={slides}
          activeIndex={activeIndex}
          onClick={ (e, i) => setActiveIndex(i) }
        />
      </div>
    </div>
  );
}
