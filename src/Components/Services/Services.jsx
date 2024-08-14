import React from 'react';
import ServiceCSS from './Services.module.css';

function Services() {
  return (
    <>
      <section id="services">
        <div className={ServiceCSS.service}>
          <h2>Things I Can Do!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odio fugiat nam sequi!
          </p>
          <div className={ServiceCSS.service_cards}>
            <div className={ServiceCSS.service_card}>
              <i
                className="fa-solid fa-arrow-right-long"
                id={ServiceCSS.icon}
              ></i>
              <h3>Web Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Magnam id debitis nam quaerat libero voluptatem!
              </p>
              <a href="#">
                Read More
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
            <div className={ServiceCSS.service_card}>
              <i
                className="fa-solid fa-arrow-right-long"
                id={ServiceCSS.icon}
              ></i>
              <h3>Mobile Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Magnam id debitis nam quaerat libero voluptatem!
              </p>
              <a href="#">
                Read More
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
            <div className={ServiceCSS.service_card}>
              <i
                className="fa-solid fa-arrow-right-long"
                id={ServiceCSS.icon}
              ></i>
              <h3>BackEnd Developer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Magnam id debitis nam quaerat libero voluptatem!
              </p>
              <a href="#">
                Read More
                <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
