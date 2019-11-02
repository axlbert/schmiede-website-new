import React, { useState } from 'react';

import './post-carousel.css';
import DotControls from '../dot-controls';

const images0 = [
  { src: '/work/carousel-1.jpg', alt: 'Carousel Image 1' },
  { src: '/work/carousel-2.jpg', alt: 'Carousel Image 2' },
  { src: '/work/carousel-3.jpg', alt: 'Carousel Image 3' },
];

export default function PostCarousel({ images = images0 }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderImages = () => 
    images.map((x, i) => {
      const imageClassName =
        `PostCarousel-Image ${i === activeIndex && 'PostCarousel-Image_active'}`;
      return (<img
        key={i}
        className={imageClassName}
        src={x.src}
        alt={x.alt}
      />);
    });

  return (
    <div className="PostCarousel">
      <div className="PostCarousel-ImageWrapper">
        { renderImages() }
      </div>
      <div className="PostCarousel-Controls">
        <DotControls
          length={3}
          activeIndex={activeIndex}
          onClick={ (e, i) => setActiveIndex(i) }
        />
      </div>
    </div>
  );
}
