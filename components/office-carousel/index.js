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
        (i === activeIndex && ' OfficeCarousel-ThumbnailOverlay_visible');
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
export default function OfficeCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="OfficeCarousel-Description">
        <div>
          <span className="Carousel-Subtitle">We work in a</span>
        </div>
        <div>
          <span className="Carousel-Title">cool coworking place</span>
        </div>
        <div>
          <span className="Carousel-Subtitle">called super 7000.</span>
        </div>
        <div className="Carousel-Paragraph">
          Our cozy -full of plants- office will blow your mind, 
          be ready for kikker games and some unexpected gun fights.
        </div>
      </div>
      <div className="OfficeCarousel-ImageWrapper">
        <img
          className="OfficeCarousel-Image"
          src="/about/office/office-1.jpg"
          alt="Office Image 1"
        />
      </div>
      <div>
        <Thumbnails
          slides={officeSlides}
          activeIndex={activeIndex}
          onClick={ (e, i) => setActiveIndex(i) }
        />
      </div>
    </div>
  );
}
