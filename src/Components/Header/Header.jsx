import React from 'react';
import HeaderCSS from './Header.module.css';

function Header() {
  return (
    <>
      <section id="home">
        <div className={HeaderCSS.hero}>
          <div className={HeaderCSS.hero_info}>
            <h1>
              Hello, I am <span>Paul Quinnell</span>
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Modi veritatis possimus recusandae odit, quod
              quisquam tenetur repellat repellendus! Aliquam magnam
              praesentium labore sint ad asperiores odit hic fugiat
              impedit aliquid!
            </p>
            <div className={HeaderCSS.social_icons}>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-github"></i>
            </div>
            <div className={HeaderCSS.hero_btns}>
              <button>Hire Me!</button>
              <button>Contact Me!</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
