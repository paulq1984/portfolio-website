import React from 'react';
import FooterCSS from './Footer.module.css';

function Footer() {
  return (
    <>
      <section>
        <div className={FooterCSS.footer}>
          <div className={FooterCSS.links}>
            <h1>Paul Quinnell</h1>
            <div>
              <p>Lorem ipsum dolor sit amet.</p>
              <div className={FooterCSS.social}>
                <i className="fa-brands fa-linkedin-in">
                  <a href=""></a>
                </i>
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-brands fa-linkedin-in"></i>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
