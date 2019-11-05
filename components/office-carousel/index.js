import React, { useState } from 'react';

import './office-carousel.css';

import officeSlides from '../../data/office-slides';

/**
 * Office carousel thumbnails component.
 */
function Thumbnails({ slides, activeIndex, onClick }) {
  const renderThumbnails = () => {
    return slides.map((x, i) => {
      const overlayClassName = 'OfficeCarousel-ThumbnailOverlay' +
        (i === activeIndex && '\x20 OfficeCarousel-ThumbnailOverlay_visible');
      return (
        <div
          className="OfficeCarousel-Thumbnail"
          key={i}
          onClick={ e => onClick && onClick(e, i) }
        >
          <img
            className="OfficeCarousel-ThumbnailImage"
            src={x.imageSrc}
            alt={x.alt}
          />
          <div className={overlayClassName}></div>
        </div>
      );
    });
  }
  return (
    <div className="OfficeCarousel-Thumbnails">
      { renderThumbnails() }
    </div>
  );
}

/**
 * Office carousel component.
 */
export default function OfficeCarousel({ slides = officeSlides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderLabel = () => {
    const activeSlide = slides[activeIndex];
    const label = activeSlide.label;
    const title = label.titleParts && 
      label.titleParts.map((x, i) => {
        if (x.type === 'title') {
          return <div key={i}>
            <span className="Carousel-Title OfficeCarousel-Title">
              { x.content }
            </span>
          </div>;
        } else {
          return <div key={i}>
            <span className="Carousel-Subtitle">{ x.content }</span>
          </div>
        }
      });
    return (
      <div className="Carousel-Label OfficeCarousel-Label">
        { title }
        <div className="Carousel-Paragraph">
          { label.paragraph }
        </div>
      </div>
    );
  }

  const renderSlides = () => {
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
    <div>
      <div className="OfficeCarousel-Layout">
        { renderLabel() }
        <div className="OfficeCarousel-ImageWrapper">
          { renderSlides() }
        </div>
      </div>
      <div>
        <Thumbnails
          slides={slides}
          activeIndex={activeIndex}
          onClick={ (e, i) => setActiveIndex(i) }
        />
      </div>
    </div>
  );
}
