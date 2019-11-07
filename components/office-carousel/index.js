import React, { useState, useEffect, useRef } from 'react';

import './office-carousel.css';
import Thumbnails from './thumbnails';

import officeSlides from '../../data/office-slides';

/**
 * Office carousel component.
 * @param {*} param0 
 */
export default function OfficeCarousel({ slides = officeSlides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  function prevSlide() {
    if (activeIndex === 0) {
      setActiveIndex(slides.length - 1);
    } else {
      setActiveIndex(i => i - 1);
    }
  }
  function nextSlide() {
    if (activeIndex === slides.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(i => i + 1);
    }
  }

  function handleSwipeLeft() {
    nextSlide();
  }
  function handleSwipeRight() {
    prevSlide();
  }

  // handling swipe events
  useEffect(() => {
    const currentRoot = carouselRef.current;
    let startX = null;
    let startY = null;
    let endX = null;
    let endY = null;
    function startListener(e) {
      const targetTouch = e.touches[0];
      startX = targetTouch.clientX;
      startY = targetTouch.clientY;
    }
    function moveListener(e) {
      const targetTouch = e.touches[0];
      endX = targetTouch.clientX;
      endY = targetTouch.clientY;
    }
    function endListener() {
      const diffX = endX - startX;
      const diffY = endY - startY;
      if (Math.abs(diffX) > Math.abs(diffY)) {
        (diffX < 0) ? handleSwipeLeft() : handleSwipeRight();
      }
      startX = null;
      startY = null;
      endX = null;
      endY = null;
    }
    currentRoot.addEventListener('touchstart', startListener);
    currentRoot.addEventListener('touchmove', moveListener);
    currentRoot.addEventListener('touchend', endListener);
    return () => {
      currentRoot.removeEventListener('touchstart', startListener);
      currentRoot.removeEventListener('touchmove', moveListener);
      currentRoot.removeEventListener('touchend', endListener);
    };
  });

  function renderSLideLabels() {
    return slides.map((x, i) => {
      const label = x.label;
      const labelClassName = 'Carousel-Label OfficeCarousel-Label' +
        (i === activeIndex ? ' OfficeCarousel-Label_active' : '');
      return (
        <div key={i} className={labelClassName}>
          { label.subtitle1 && <div>
            <span className="Carousel-Subtitle">{ label.subtitle1 }</span>
          </div> }
          <div>
            <span className="Carousel-Title OfficeCarousel-Title">
              { label.title }
            </span>
          </div>
          { label.subtitle2 && <div>
            <span className="Carousel-Subtitle">{ label.subtitle2 }</span>
          </div> }
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
    <div ref={carouselRef} className="OfficeCarousel">
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
