import React from 'react';

import './about.css';
import Nav from '../../components/nav';

const headerStyle = {
  backgroundImage: 'url("/about.jpg")',
};

export default function About() {
  return (
    <div className="About">
      <div style={{ position: 'fixed', width: '100%' }}>
        <Nav />
      </div>
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

      <div className="container mt-5" style={{ textAlign: 'center' }}>
        <div className="Grid">
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

      <br />
      <br />
    </div>
  );
}
