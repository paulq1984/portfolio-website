import React from 'react';
import ServiceCSS from './Services.module.css';

function Services() {
  AOS.init();
  return (
    <>
      <section id="services">
        <div className={ServiceCSS.service}>
          <h2
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="100"
          >
            Things I Can Do!
          </h2>
          <p
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            I have a very particular set of skills!
          </p>
          <div className={ServiceCSS.service_cards}>
            <div
              className={ServiceCSS.service_card}
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              <i
                className="fa-solid fa-laptop"
                id={ServiceCSS.icon}
              ></i>
              <h3>Web Developer</h3>
              <ul>
                <li>HTML</li>
                <li>Advanced CSS/SASS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Angular</li>
                <li>API Use</li>
              </ul>
            </div>
            <div
              className={ServiceCSS.service_card}
              data-aos="fade"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              <i
                className="fa-solid fa-mobile"
                id={ServiceCSS.icon}
              ></i>
              <h3>Mobile Developer</h3>
              <p>SwiftUI, UIKIt, AppClips</p>
              <ul>
                <li>SwiftUI</li>
                <li>Swift</li>
                <li>UIKit</li>
                <li>Apple Frameworks</li>
                <li>App Store/Google Play Store Deployment</li>
                <li>Kotlin</li>
                <li>React Native</li>
              </ul>
            </div>
            <div
              className={ServiceCSS.service_card}
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="1000"
            >
              <i
                className="fa-solid fa-database"
                id={ServiceCSS.icon}
              ></i>
              <h3>Backend Developer</h3>
              <ul>
                <li>AWS</li>
                <li>Firebase</li>
                <li>Amplify</li>
                <li>Rest APIs</li>
                <li>Websockets</li>
                <li>MongoDB</li>
                <li>ExpressJS, NodeJS</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
