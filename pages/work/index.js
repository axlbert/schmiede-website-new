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

        <div style={{ textAlign: 'center' }}>
          <div className="Grid">
            <div className="Card">
              <img className="Card-Image" src="/work/project-1.jpg" />
              <div className="Card-Footer">
                <div className="Card-Title">Harvey.one</div>
                <div className="Card-Subtitle">Robotics</div>
              </div>
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
      </div>

      <footer
        className="Banner"
        style={{
          paddingTop: '8rem',
          paddingBottom: '6rem',
          backgroundImage: 'url("/work/footer.jpg")',
          backgroundPositionX: '10%',
        }}
      >
        <div>
          <span className="Banner-Title">
            Do you have a cool idea<br />
            to share with us?
          </span>
        </div>
        <div style={{ marginTop: '0.5rem' }}>
          <span className="Banner-Subtitle">
            We would love to hear from you. Let’s talk about it.
          </span>
        </div>
        <div style={{ marginTop: '3rem' }}>
          <a href="#">
            <img
              className="Banner-RoundImage"
              src="/mail.svg"
              alt="Email"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

/*

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

*/
