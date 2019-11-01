import React from 'react';

import './work.css';
import Nav from '../../components/nav';
import DotControls from '../../components/dot-controls';

export default function Work() {
  return (<div>
    <Nav />
    <article className="Work">
      <header className="Work-HeaderCarouselSmall">
        <img className="Work-HeaderImage" src="/work/work.jpg" />
        <div className="Work-HeaderControls">
          <DotControls />
        </div>
      </header>
      <header className="Work-HeaderCarouselLarge container">
        <img className="Work-HeaderImage" src="/work/work.jpg" />
        <div className="Work-HeaderControls">
          <DotControls />
        </div>
      </header>

      <main className="container" style={{ overflowX: 'hidden' }}>
        <div className="Work-Select">
          <select className="Banner-Button">
            <option>All</option>
            <option>Robotics</option>
            <option>Development</option>
            <option>Farming</option>
          </select>
        </div>

        <div className="Work-Pills">
          <div className="Pills">
            <span className="Pills-Item">All</span>
            <span className="Pills-Item">Robotics</span>
            <span className="Pills-Item">Development</span>
            <span className="Pills-Item Pills-Item_active">Farming</span>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div className="Grid">
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
      </main>

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
    </article>
  </div>);
}
