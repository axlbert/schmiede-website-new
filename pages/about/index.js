import React from 'react';

import './about.css';
import Nav from '../../components/nav';
import CultureCarousel from '../../components/culture-carousel';
import MemberCard from '../../components/member-card';
import OfficeCarousel from '../../components/office-carousel';

import members from '../../data/members';

const headerStyle = {
  backgroundImage: 'url("/about.jpg")',
};

function renderMembers() {
  return members.map((x, i) => {
    return <MemberCard key={i} {...x} />;
  });
}

/**
 * About page component.
 */
export default function About() {
  return (
    <div className="About">
      <Nav />
      <header className="About-Header" style={headerStyle}>
        <div className="About-HeaderContent container">
          <div>
            <span className="Banner-Title">
              We are a gang of creatives, developers, engeneers and managers 
              from around the world working in Düsseldorf, Germany. 
            </span>
          </div>
          <div className="Banner-Subtitle About-HeaderSubtitle">
            We are an innovation lab from GRIMME group. We give our 
            best everyday to make a difference in the AgTech world.
          </div>

          <div className="About-HeaderSpacer"></div>

          <div className="About-HeaderLink">
            <img
              className="About-HeaderLinkImage"
              src="/arrow-right-button.svg"
              alt="More"
            />
            <span className="About-HeaderLinkLabel">
              Keep going! Find out more about us!
            </span>
          </div>
        </div>
      </header>

      <section className="container" style={{ marginTop: '4rem' }}>
        <CultureCarousel />
      </section>

      <div
        className="container"
        style={{
          marginTop: '3rem',
          textAlign: 'center',
        }}
      >
        <div className="Grid">
          { renderMembers() }
        </div>
      </div>

      <div
        className="Banner"
        style={{
          marginTop: '3rem',
          paddingTop: '7rem',
          paddingBottom: '4rem',
          backgroundImage: 'url("/about/banner.jpg")',
        }}
      >
        <div>
          <span className="Banner-Title">
            Do you want to be part<br />
            of this cool team?
          </span>
        </div>
        <div style={{ marginTop: '0.5rem' }}>
          <span className="Banner-Subtitle">
            Send us an email with your cv and<br />
            tell us why you would be a great fit.<br />
            We would love to hear from you!
          </span>
        </div>
        <div style={{ marginTop: '2.5rem' }}>
          <a href="#">
            <img
              className="Banner-RoundImage"
              src="/mail.svg"
              alt="Email"
            />
          </a>
        </div>
      </div>


      <div className="container my-5">
        <OfficeCarousel />
      </div>

      <footer
        className="Banner"
        style={{
          paddingTop: '7rem',
          paddingBottom: '4.5rem',
          backgroundImage: 'url("/about/footer.jpg")',
        }}
      >
        <div>
          <span className="Banner-Title">
            Find out if we have a job<br />
            opportunity for you!
          </span>
        </div>
        <div style={{ marginTop: '0.5rem' }}>
          <span className="Banner-Subtitle">
            If we don’t and you think you can<br />
            be a good fit, just send as an email!
          </span>
        </div>
        <div style={{
          display: 'inline-flex',
          marginTop: '2rem',
        }}>
          <a
            href="#"
            className="Banner-Button"
            style={{ marginRight: '1rem' }}
          >
            Job Offers
          </a>
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
