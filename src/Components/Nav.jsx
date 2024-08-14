import React, { useState } from 'react';
import NavCSS from './Nav.module.css';

function Nav() {
  let [navbar, setnavbar] = useState({ height: 0, padding: 0 });

  const activeNav = () => {
    if (navbar.height == 0) {
      return setnavbar({ height: '250px', padding: '20px' });
    } else {
      setnavbar({ height: 0, padding: 0 });
    }
  };
  return (
    <>
      <section>
        <header className={NavCSS.header}>
          <div className={NavCSS.logo}>
            <h2>
              Paul <span>Quinnell</span>
            </h2>
          </div>
          <div className={NavCSS.nav}>
            <a href="#">Home</a>
            <a href="#">About Me</a>
            <a href="#">Things I can Do</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
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
