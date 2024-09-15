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
              I’m a passionate developer with 6+ years of experience in developing mobile applicaMons, mobile-first web projects and web sites. I enjoy programming challenges and solving complex problems. I’m a clear and concise communicator with a strong belief in celebraMng team successes and achievements. The opportunity to contribute and collaborate with a diverse and inclusive team is important to me as an individual. I believe in joining a team where diversity is valued and the chance to collaborate with likewise passionate colleagues from various backgrounds is important.
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
