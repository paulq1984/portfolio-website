import React, { useState } from 'react';
import NavCSS from './Nav.module.css';

function Nav() {
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
          >
            <h2>
              Paul <span>Quinnell</span>
            </h2>
          </div>
          <div className={NavCSS.nav} style={navbar}>
            <a
              href="#home"
            >
              Home
            </a>
            <a
              href="#about"
            >
              About Me
            </a>
            <a
              href="#services"
            >
              Things I can Do
            </a>
            <a
              href="#contact"
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
