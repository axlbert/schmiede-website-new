import React from 'react';

import './work.css';
import Nav from '../../components/nav';
import PostCarousel from '../../components/post-carousel';
import PostGrid from '../../components/post-grid';

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

        <section style={{ textAlign: 'center' }}>
          <PostGrid />
        </section>
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
