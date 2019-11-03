import React from 'react';

import './post.css';

export default function Post() {
  return (
    <article className="Post">
      <button className="Post-CloseButton">
        <img
          className="Post-CloseButtonImage"
          src="/close-button.svg"
          alt="Close"
        />
      </button>
      <header className="Post-Header">
        <img
          className="Post-Image"
          src="/work/work.jpg"
          alt="Post Image"
        />
      </header>
      <main className="Post-Main">
        <h1 className="Post-Heading">Harvey.one</h1>
        <div style={{ marginBottom: '2rem' }}>
          <span className="Post-Tag">Robotics</span>
        </div>
        
        <section>
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
        </section>

        <section className="Post-MoreSection">
          <div className="Post-MoreHeading">Want to know more?</div>
          <div className="Post-MoreParagraph">
            Go to <a href="#" className="Link">farmlab.one</a> and 
            find out more about this project!
          </div>
        </section>
      </main>

      <footer className="Post-Footer">
        <a className="Post-FooterLink" href="#">
          <img
            className="Post-FooterLinkArrow"
            src="/arrow-left.svg"
            alt="Previous"
          />
          <div className="Post-FooterLinkLabel Post-FooterLinkLabel_left">
            <span className="Post-FooterLinkTitle">CNHI Konfigurator</span>
            <span className="Post-FooterLinkSubtitle">Previous</span>
          </div>
        </a>
        <a className="Post-FooterLink" href="#">
          <div className="Post-FooterLinkLabel Post-FooterLinkLabel_right">
            <span className="Post-FooterLinkTitle">Indoor Farming</span>
            <span className="Post-FooterLinkSubtitle">Next</span>
          </div>
          <img
            className="Post-FooterLinkArrow"
            src="/arrow-right.svg"
            alt="Next"
          />
        </a>
      </footer>
    </article>
  );
}
