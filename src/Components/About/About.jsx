import React from 'react';
import AboutCSS from './About.module.css';
import paulq from '../../public/paulq.jpg';

function About() {
  return (
    <>
      <section id="about">
        <div className={AboutCSS.about}>
          <div className={AboutCSS.about_img}>
            <img src={paulq} alt="Paul" />
          </div>

          <div className={AboutCSS.about_info}>
            <p>About Me</p>
            <h2>Paul Quinnell</h2>
            <h3>
              Hi I am <span>Developer</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Id praesentium quo nihil!
            </p>
            <button>Download Resume</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
