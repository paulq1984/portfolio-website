import React from 'react';
import AboutCSS from './About.module.css';
import paulq from '../../public/paulq.jpg';
import resume from '../../public/Paul_Quinnell_Resume.pdf';

function About() {
  return (
    <>
      <section id="about">
        <div className={AboutCSS.about}>
          <div
            className={AboutCSS.about_img}
          >
            <img src={paulq} alt="Paul" />
          </div>

          <div className={AboutCSS.about_info}>
            <p
            >
              About Me
            </p>
            <h2
            >
              Paul Quinnell
            </h2>
            <h3
            >
              Hi, I'm <span>Developer</span>
            </h3>
            <p
            >
              Results-oriented Developer with 6+ years of experience
              seeking a collaborative team environment that values
              innovation and continuous improvement. Proven ability to
              mentor junior developers while actively seeking
              opportunities for personal growth and skill development.
              Adept at leading projects, leveraging a passion for
              technology to drive successful outcomes.
            </p>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <button
              >
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
