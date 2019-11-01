import React from 'react';

import './about.css';
import './culture-carousel.css';
import Nav from '../../components/nav';
import DotControls from '../../components/dot-controls';
import MemberCard from '../../components/member-card';

const headerStyle = {
  backgroundImage: 'url("/about.jpg")',
};

export default function About() {
  return (
    <div className="About">
      <Nav />
      <header className="About-Header" style={headerStyle}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div>
                <span className="About-HeaderTitle">
                  We are a gang of creatives, developers, engeneers and managers 
                  from around the world working in Düsseldorf, Germany. 
                </span>
              </div>
              <div className="About-HeaderSubtitle">
                We are an innovation lab from GRIMME group. We give our 
                best everyday to make a difference in the AgTech world.
              </div>
              <div >
                <img src="/arrow-right.svg" alt="Arrow Down" />
                <span>Keep going! Find out more about us!</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="container" style={{ marginTop: '4rem' }}>
        <div className="CultureCarousel">
          <div className="CultureCarousel-TextBlock">
            <div>
              <span className="CultureCarousel-Title">
                Initiative
              </span>
            </div>
            <div>
              <span className="CultureCarousel-Subtitle">
                is essential
              </span>
            </div>
            <div className="CultureCarousel-Paragraph">
              We don’t manage people, we expect 
              people to manage themselves.
            </div>
          </div>
          <img
            className="CultureCarousel-Image"
            src="/about/culture.jpg"
            alt="Culture"
          />
          <div className="CultureCarousel-Controls">
            <DotControls length={5} activeIndex={1} />
          </div>
        </div>
      </section>

      <div
        className="container"
        style={{
          marginTop: '3rem',
          textAlign: 'center',
        }}
      >
        <div className="Grid">
          <MemberCard />
          <div className="Card">
            <div className="Card-ImageWrapper">
              <img className="Card-Image" src="/about/member-2.jpg" />
              <div className="Card-ImageOverlay Card-ImageOverlay_gray">
                <div>Team member since 2017</div>
                <div>
                  “Make it simple but significant.”
                </div>
                <div>Description</div>
              </div>
            </div>
            <div
              className="Card-Footer"
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <div className="Card-Info">
                <div className="Card-Title">Analisa</div>
                <div className="Card-Subtitle">Developer</div>
              </div>
              <div>. . .</div>
            </div>
          </div>

          <div className="MemberCard">
            <img className="MemberCard-Image" src="/about/member-1.jpg" />
            <div className="MemberCard-Footer">
              <div className="MemberCard-Info">
                <div className="MemberCard-Name">Ollie</div>
                <div className="MemberCard-Role">Designer</div>
              </div>
              <div className="MemberCard-Controls">. . .</div>
            </div>
          </div>
          <div className="MemberCard">
            <img className="MemberCard-Image" src="/about/member-2.jpg" />
            <div className="MemberCard-Footer">
              <div className="MemberCard-Info">
                <div className="MemberCard-Name">Analisa</div>
                <div className="MemberCard-Role">Developer</div>
              </div>
              <div className="MemberCard-Controls">. . .</div>
            </div>
          </div>
          <div className="MemberCard">
            <img className="MemberCard-Image" src="/about/member-3.jpg" />
            <div className="MemberCard-Footer">
              <div className="MemberCard-Info">
                <div className="MemberCard-Name">Leonarda</div>
                <div className="MemberCard-Role">Project Manager</div>
              </div>
              <div className="MemberCard-Controls">. . .</div>
            </div>
          </div>

          <div className="MemberCard">
            <img className="MemberCard-Image" src="/about/member-1.jpg" />
            <div className="MemberCard-Footer">
              <div className="MemberCard-Info">
                <div className="MemberCard-Name">Ollie</div>
                <div className="MemberCard-Role">Designer</div>
              </div>
              <div className="MemberCard-Controls">. . .</div>
            </div>
          </div>
          <div className="MemberCard">
            <img className="MemberCard-Image" src="/about/member-2.jpg" />
            <div className="MemberCard-Footer">
              <div className="MemberCard-Info">
                <div className="MemberCard-Name">Analisa</div>
                <div className="MemberCard-Role">Developer</div>
              </div>
              <div className="MemberCard-Controls">. . .</div>
            </div>
          </div>
          <div className="MemberCard">
            <img className="MemberCard-Image" src="/about/member-3.jpg" />
            <div className="MemberCard-Footer">
              <div className="MemberCard-Info">
                <div className="MemberCard-Name">Leonarda</div>
                <div className="MemberCard-Role">Project Manager</div>
              </div>
              <div className="MemberCard-Controls">. . .</div>
            </div>
          </div>
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
        <div>
        We work in a 
cool coworking place 
called super 7000.
Our cozy -full of plants- office will blow your mind, be ready for kikker 
games and some unexpected gun fights.
        </div>
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
