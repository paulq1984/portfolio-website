import React from 'react';
import HeaderCSS from './Header.module.css';

function Header() {
  AOS.init();
  return (
    <>
      <section id="home">
        <div className={HeaderCSS.hero}>
          <div className={HeaderCSS.hero_info}>
            <h1
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="1000"
            >
              Hello, I am <span>Paul Quinnell</span>
            </h1>
            <p
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="1100"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Modi veritatis possimus recusandae odit, quod
              quisquam tenetur repellat repellendus! Aliquam magnam
              praesentium labore sint ad asperiores odit hic fugiat
              impedit aliquid!
            </p>
            <div className={HeaderCSS.social_icons}>
              <i
                className="fa-brands fa-linkedin"
                data-aos="fade"
                data-aos-duration="1500"
                data-aos-delay="1200"
              ></i>
              <i
                className="fa-brands fa-instagram"
                data-aos="fade"
                data-aos-duration="1500"
                data-aos-delay="1400"
              ></i>
              <i
                className="fa-brands fa-github"
                data-aos="fade"
                data-aos-duration="1500"
                data-aos-delay="1500"
              ></i>
            </div>
            <div className={HeaderCSS.hero_btns}>
              <button
                data-aos="fade"
                data-aos-duration="1500"
                data-aos-delay="1600"
              >
                Hire Me!
              </button>
              <button
                data-aos="fade"
                data-aos-duration="1500"
                data-aos-delay="1700"
              >
                Contact Me!
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
