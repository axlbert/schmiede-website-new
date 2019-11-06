import React from 'react';

import './post.css';

export default function Post({
  title, subtitle, imageSrc, content,
  previous, next, onPreviousClick, onNextClick,
}) {
  function renderPreviousLink() {
    if (previous) {
      return (
        <a className="Post-FooterLink" href="#" onClick={handlePreviousClick}>
          <img
            className="Post-FooterLinkArrow"
            src="/arrow-left.svg"
            alt="Previous"
          />
          <div className="Post-FooterLinkLabel Post-FooterLinkLabel_left">
            <span className="Post-FooterLinkTitle">{ previous.title }</span>
            <span className="Post-FooterLinkSubtitle">Previous</span>
          </div>
        </a>
      );
    } else {
      return <div></div>;
    }
  }
  function handlePreviousClick(e) {
    e.preventDefault();
    onPreviousClick && onPreviousClick(e);
  }

  function renderNextLink() {
    if (next) {
      return (
        <a className="Post-FooterLink" href="#" onClick={handleNextClick}>
          <div className="Post-FooterLinkLabel Post-FooterLinkLabel_right">
            <span className="Post-FooterLinkTitle">{ next.title }</span>
            <span className="Post-FooterLinkSubtitle">Next</span>
          </div>
          <img
            className="Post-FooterLinkArrow"
            src="/arrow-right.svg"
            alt="Next"
          />
        </a>
      );
    } else {
      return <div></div>;
    }
  }
  function handleNextClick(e) {
    e.preventDefault();
    onNextClick && onNextClick(e);
  }

  return (
    <article className="Post">
      <header className="Post-Header">
        <img
          className="Post-Image"
          src={imageSrc}
          alt={title}
        />
      </header>
      <main className="Post-Main">
        <h1 className="Post-Heading">{ title }</h1>
        <div style={{
          marginTop: '0.25rem',
          marginLeft: '0.2rem',
          marginBottom: '2rem',
        }}>
          { subtitle && <span className="Post-Tag">{ subtitle }</span> }
        </div>
        
        <section
          className="Post-Content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></section>
      </main>

      <footer className="Post-Footer">
        { renderPreviousLink() }
        { renderNextLink() }
      </footer>
    </article>
  );
}

/*

"MORE" SECTION BACKUP

<section className="Post-MoreSection">
  <div className="Post-MoreHeading">Want to know more?</div>
  <div className="Post-MoreParagraph">
    Go to <a href="#" className="Link">farmlab.one</a> and 
    find out more about this project!
  </div>
</section>

*/
