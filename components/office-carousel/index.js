import React from 'react';

import './office-carousel.css';

import officeSlides from '../../data/office-slides';

function renderThumbnails() {
  return officeSlides.map((x, i) => {
    return (
      <div key={i} className="OfficeCarousel-Thumbnail">
        <img
          className="OfficeCarousel-ThumbnailImage"
          src={x.imageSrc}
          alt={x.alt}
        />
        <div className="OfficeCarousel-ThumbnailOverlay OfficeCarousel-ThumbnailOverlay_visible"></div>
      </div>
    );
  });
}

/**
 * Office carousel component.
 */
export default function OfficeCarousel() {
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
      <div className="OfficeCarousel-Thumbnails">
        { renderThumbnails() }
      </div>
    </div>
  );
}
