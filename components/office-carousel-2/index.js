import React from 'react';

import Thumbnails from './thumbnails';

import officeSlides from '../../data/office-slides';

export default function OfficeCarousel() {
  return (
    <div className="OfficeCarousel">
      <div className="OfficeCarousel-Slide"></div>
      <div>
        <Thumbnails slides={officeSlides} />
      </div>
    </div>
  );
}
