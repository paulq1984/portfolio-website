import React from 'react';
import AboutCSS from './About.module.css';
import paulq from '../../public/paulq.jpg';
import resume from '../../public/PQ_Resume.pdf';

function About() {
  AOS.init();
  return (
    <>
      <section id="about">
        <div className={AboutCSS.about}>
          <div
            className={AboutCSS.about_img}
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            <img src={paulq} alt="Paul" />
          </div>

          <div className={AboutCSS.about_info}>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="400"
            >
              About Me
            </p>
            <h2
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="600"
            >
              Paul Quinnell
            </h2>
            <h3
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="800"
            >
              Hi I am <span>Developer</span>
            </h3>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="1000"
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
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-delay="1200"
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
