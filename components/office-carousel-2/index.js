import React from 'react';

import './office-carousel.css';
import Thumbnails from './thumbnails';

import officeSlides from '../../data/office-slides';

export default function OfficeCarousel() {
  return (
    <div className="OfficeCarousel">
      <div className="OfficeCarousel-Layout">
        <div className="OfficeCarousel-LabelWrapper">
          <div className="Carousel-Label OfficeCarousel-Label">
            <div>
              <span className="Carousel-Subtitle">We work in a</span>
            </div>
            <div>
              <span className="Carousel-Title OfficeCarousel-Title">
                cool coworking place
              </span>
            </div>
            <div>
              <span className="Carousel-Subtitle">called super 7000.</span>
            </div>
            <div className="Carousel-Paragraph">
              Our cozy -full of plants- office will blow your mind, 
              be ready for kikker games and some unexpected gun fights.
            </div>
          </div>
        </div>

        <div className="OfficeCarousel-ImageWrapper">
          <img
            className="OfficeCarousel-Image OfficeCarousel-Image_active"
            src={officeSlides[0].imageSrc}
            alt="Office Carousel Image"
          />
        </div>
      </div>
      <div className="OfficeCarousel-ThumbnailsWrapper">
        <Thumbnails slides={officeSlides} />
      </div>
    </div>
  );
}
