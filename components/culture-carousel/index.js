import React, { useState, useEffect, useRef } from 'react';

import './culture-carousel.css';
import DotControls from '../dot-controls';

import cultureSlides from '../../data/culture-slides';

/**
 * Culture carousel component.
 */
export default function CultureCarousel({ slides = cultureSlides }) {
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

  function renderSlides() {
    return slides.map((x, i) => {
      const imageClassName = 'CultureCarousel-Image' +
        (i === activeIndex ? ' CultureCarousel-Image_active' : '')
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

  function renderLabels() {
    return slides.map((x, i) => {
      const label = x.label;
      const labelClassName = 'Carousel-Label CultureCarousel-Label' +
        (i === activeIndex ? ' CultureCarousel-Label_active' : '');
      return (
        <div key={i} className={labelClassName}>
          <div>
            <span className="Carousel-Subtitle">
              { label.subtitle }
            </span>
          </div>
          <div>
            <span className="Carousel-Title CultureCarousel-Title">
              { label.title }
            </span>
          </div>
          <div className="Carousel-Paragraph">
            { label.paragraph }
          </div>
        </div>
      );
    });
  }

  return (
    <div ref={carouselRef} className="CultureCarousel">
      <div className="CultureCarousel-LabelWrapper">
        { renderLabels() }
      </div>
      <div className="CultureCarousel-ImageWrapper">
        { renderSlides() }
      </div>
      <div className="CultureCarousel-Controls">
        <DotControls
          length={slides.length}
          activeIndex={activeIndex}
          onClick={ (e, i) => setActiveIndex(i) }
        />
      </div>
    </div>
  );
}
