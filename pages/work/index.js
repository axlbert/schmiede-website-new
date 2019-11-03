import React from 'react';
import { Dialog } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import './work.css';
import Nav from '../../components/nav';
import PostCarousel from '../../components/post-carousel';

const CssDialog = withStyles({
  paper: {
    '&': {
      borderRadius: 0,
    },
  },
})(Dialog);

export default function Work() {
  return (<div>
    <Nav />
    <article className="Work">
      <header className="Work-HeaderCarouselSmall">
        <PostCarousel />
      </header>
      <header className="Work-HeaderCarouselLarge container">
        <PostCarousel />
      </header>

      <main className="Work-Main container">
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

      <CssDialog maxWidth={false} scroll="body" open={true}>
        <article className="Post">
          <header className="Post-Header">
            <img
              className="Post-Image"
              src="/work/work.jpg"
              alt="Post Image"
            />
          </header>
          <main>
            <h1>Harvey.one</h1>
            <div>
              <span>Robotics</span>
            </div>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed efficitur feugiat vestibulum. Nullam consectetur arcu 
              turpis. Class aptent taciti sociosqu ad litora torquent 
              per conubia nostra, per inceptos himenaeos. Praesent 
              posuere commodo elit quis luctus. Vivamus sed facilisis 
              sapien. Mauris quis fringilla odio, quis volutpat nibh. 
              Sed sed bibendum quam. Sed viverra velit non consequat 
              varius. Fusce semper rhoncus est in auctor. Phasellus id 
              est lacus. Ut a ante vitae neque varius venenatis.
            </p>

            <p>
              Phasellus a magna vulputate, laoreet dolor in, semper magna. 
              In enim nulla, faucibus a tellus eu, pulvinar tempor diam. 
              Ut sed ex sed neque faucibus viverra. Suspendisse sollicitudin 
              mauris pulvinar est sodales, maximus tristique metus bibendum. 
              Donec varius sit amet tellus ac ultricies. Cras non euismod 
              eros, quis molestie velit. Cras malesuada tellus a venenatis 
              lacinia. Nullam sollicitudin orci vel lacus dignissim, eu 
              rhoncus nisl gravida. 
            </p>
            
          </main>
        </article>
      </CssDialog>
    </article>
  </div>);
}
