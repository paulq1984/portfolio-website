import React from 'react';
import ContactCSS from './Contact.module.css';

function Contact() {
  return (
    <>
      <section id="contact">
        <div className={ContactCSS.contact}>
          <div>
            <h2>Contact Me</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam nemo similique consectetur.
            </p>
          </div>
          <form>
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter Name *"
              id="name"
              required
            />
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter Email *"
              id="email"
              required
            />
            <label>Phone:</label>
            <input
              type="text"
              placeholder="Enter Phone *"
              id="phone"
              required
            />
            <button>Contact Me!</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
