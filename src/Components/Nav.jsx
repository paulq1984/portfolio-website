import React, { useState } from 'react';
import NavCSS from './Nav.module.css';

function Nav() {
  AOS.init();
  const [navbar, setnavbar] = useState({ height: 0, padding: 0 });

  const activeNav = () => {
    if (navbar.height == 0) {
      setnavbar({ height: '275px', padding: '20px 8%' });
    } else {
      setnavbar({ height: 0, padding: 0 });
    }
  };

  return (
    <>
      <section>
        <header className={NavCSS.header}>
          <div
            className={NavCSS.logo}
            data-aos="fade"
            data-aos-duration="1500"
          >
            <h2>
              Paul <span>Quinnell</span>
            </h2>
          </div>
          <div className={NavCSS.nav} style={navbar}>
            <a
              href="#"
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-delay="200"
            >
              Home
            </a>
            <a
              href="#"
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              About Me
            </a>
            <a
              href="#"
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-delay="400"
            >
              Things I can Do
            </a>
            <a
              href="#"
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              Contact
            </a>
          </div>
          <div className={NavCSS.bars} onClick={activeNav}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>
      </section>
    </>
  );
}

export default Nav;
