import React from 'react';
import ServiceCSS from './Services.module.css';

function Services() {
  return (
    <>
      <section id="services">
        <div className={ServiceCSS.service}>
          <h2
          >
            Things I Can Do!
          </h2>
          <p
          >
            I have a very particular set of skills!
          </p>
          <div className={ServiceCSS.service_cards}>
            <div
              className={ServiceCSS.service_card}
            >
              <h3>Programming</h3>
              <ul>
                <li>SwiftUI / Swift</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Kotlin</li>
              </ul>
            </div>
            <div
              className={ServiceCSS.service_card}
            >
              <h3>Technologies</h3>
              <ul>
                <li>React & React Native</li>
                <li>Angular</li>
                <li>Node</li>
                <li>AWS/Firebase</li>
                <li>SQL</li>
              </ul>
            </div>
            <div
              className={ServiceCSS.service_card}
            >
              <h3>Tools</h3>
              <ul>
                <li>Xcode & Android Studio</li>
                <li>VS Code</li>
                <li>MongoDB</li>
                <li>Websockets & Restful APIS</li>
                <li>Expo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
