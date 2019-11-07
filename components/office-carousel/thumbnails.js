import React from 'react';

import './thumbnails.css';

/**
 * Office carousel thumbnails component.
 */
export default function Thumbnails({ slides, activeIndex, onClick }) {
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
