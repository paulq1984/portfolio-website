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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odio fugiat nam sequi!
          </p>
          <div className={ServiceCSS.service_cards}>
            <div
              className={ServiceCSS.service_card}
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
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
            <div
              className={ServiceCSS.service_card}
              data-aos="fade"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
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
            <div
              className={ServiceCSS.service_card}
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="1000"
            >
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
