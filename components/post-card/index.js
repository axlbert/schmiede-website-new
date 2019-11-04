import React from 'react';

export default function PostCard({ imageSrc, onClick }) {
  return (
    <div
      className="Card"
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      <div className="Card-ImageWrapper">
        <img className="Card-Image" src={imageSrc} />
        <div className="Card-ImageOverlay Card-ImageOverlay_hover"></div>
      </div>
      <div className="Card-Footer">
        <div className="Card-Title">Harvey.one</div>
        <div className="Card-Subtitle">Robotics</div>
      </div>
    </div>
  );
}
