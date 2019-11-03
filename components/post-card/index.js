import React from 'react';

export default function PostCard() {
  return (
    <div className="Card">
      <div className="Card-ImageWrapper">
        <img className="Card-Image" src="/work/project-2.jpg" />
        <div className="Card-ImageOverlay Card-ImageOverlay_hover"></div>
      </div>
      <div className="Card-Footer">
        <div className="Card-Title">Harvey.one</div>
        <div className="Card-Subtitle">Robotics</div>
      </div>
    </div>
  );
}
