import React from 'react';

import './work.css';
import Nav from '../../components/nav';

export default function Work() {
  return (
    <div>
      <Nav />
      <div className="container mb-5">
        <header>
          <img className="Work-HeaderImage" src="/work/work.jpg" />
          <div style={{ marginTop: '1rem', textAlign: 'right' }}>
            <div className="DotControls">
              <button className="DotControl">
                <div className="DotControl-Fill"></div>
              </button>
              <button className="DotControl">
                <div className="DotControl-Fill DotControl-Fill_active"></div>
              </button>
              <button className="DotControl">
                <div className="DotControl-Fill"></div>
              </button>
            </div>
          </div>
        </header>

        <div className="Pills">
          <span className="Pills-Item Pills-Item_active">All</span>
          <span className="Pills-Item">Robotics</span>
          <span className="Pills-Item">Development</span>
          <span className="Pills-Item">Farming</span>
        </div>

        <div className="ProjectGrid">
          <div className="ProjectCard">
            <img className="ProjectCard-Image" src="/work/project-1.jpg" />
            <div className="ProjectCard-Title">Harvey.one</div>
            <div className="ProjectCard-Subtitle">Robotics</div>
          </div>
          <div className="ProjectCard">
            <img className="ProjectCard-Image" src="/work/project-2.jpg" />
            <div className="ProjectCard-Title">CNHI Konfigurator</div>
            <div className="ProjectCard-Subtitle">Development</div>
          </div>
          <div className="ProjectCard">
            <img className="ProjectCard-Image" src="/work/project-3.jpg" />
            <div className="ProjectCard-Title">Indoor Farming</div>
            <div className="ProjectCard-Subtitle">Farming</div>
          </div>

          <div className="ProjectCard">
            <img className="ProjectCard-Image" src="/work/project-1.jpg" />
            <div className="ProjectCard-Title">Harvey.one</div>
            <div className="ProjectCard-Subtitle">Robotics</div>
          </div>
          <div className="ProjectCard">
            <img className="ProjectCard-Image" src="/work/project-2.jpg" />
            <div className="ProjectCard-Title">CNHI Konfigurator</div>
            <div className="ProjectCard-Subtitle">Development</div>
          </div>
          <div className="ProjectCard">
            <img className="ProjectCard-Image" src="/work/project-3.jpg" />
            <div className="ProjectCard-Title">Indoor Farming</div>
            <div className="ProjectCard-Subtitle">Farming</div>
          </div>
        </div>
      </div>

      <footer
        className="Work-Footer"
        style={{ backgroundImage: 'url("/work/footer.jpg")' }}
      >
        <div style={{ maxWidth: '16rem', margin: 'auto' }}>
          <span className="Work-FooterTitle">
            Do you have a cool idea to share with us?
          </span>
        </div>
        <div className="Work-FooterSubtitle">
          We would love to hear from you. Let’s talk about it.
        </div>
        <img className="Work-FooterButtonImage" src="/mail.svg" alt="Envelope" />
      </footer>
    </div>
  );
}
