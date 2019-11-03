import React from 'react';

import './office-carousel.css';

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
        <div className="OfficeCarousel-Thumbnail">
          <img
            className="OfficeCarousel-ThumbnailImage"
            src="/about/office/office-1.jpg"
            alt="Office Thumbnail 1"
          />
        </div>
        <div className="OfficeCarousel-Thumbnail">
          <img
            className="OfficeCarousel-ThumbnailImage"
            src="/about/office/office-2.jpg"
            alt="Office Thumbnail 2"
          />
        </div>
        <div className="OfficeCarousel-Thumbnail">
          <img
            className="OfficeCarousel-ThumbnailImage"
            src="/about/office/office-3.jpg"
            alt="Office Thumbnail 3"
          />
        </div>
        <div className="OfficeCarousel-Thumbnail">
          <img
            className="OfficeCarousel-ThumbnailImage"
            src="/about/office/office-4.jpg"
            alt="Office Thumbnail 4"
          />
        </div>
        <div className="OfficeCarousel-Thumbnail">
          <img
            className="OfficeCarousel-ThumbnailImage"
            src="/about/office/office-5.jpg"
            alt="Office Thumbnail 5"
          />
        </div>
      </div>
    </div>
  );
}
