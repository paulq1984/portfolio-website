import { useState } from 'react';
import ContactCSS from './Contact.module.css';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

function Contact() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      const templateParams = {
        name,
        email,
        message,
      };

      await emailjs.send(
        'service_id2ept8',
        'template_vtlib0f',
        templateParams,
        '39dCOoKaXowG7HJtX'
      );

      // Display success alert
      toggleAlert('Form submission was successful!', 'success');
    } catch (e) {
      console.error(e);
      // Display error alert
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  return (
    <>
      <section id="contact">
        <div className={ContactCSS.contact}>
          <div>
            <h2
            >
              Contact Me
            </h2>
            <p
            >
              Interested in working with me, get in touch.....
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter Name *"
              id="name"
              name="name"
              {...register('name', {
                required: {
                  value: true,
                  message: 'Please enter your name',
                },
                maxLength: {
                  value: 30,
                  message: 'Please use 30 characters or less',
                },
              })}
            />
            {errors.name && (
              <span className="errorMessage">
                {errors.name.message}
              </span>
            )}
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter Email *"
              id="email"
              name="email"
              {...register('email', {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
            />
            {errors.email && (
              <span className="errorMessage">
                Please enter a valid email address
              </span>
            )}
            <label>Message:</label>
            <textarea
              rows={3}
              name="message"
              {...register('message', {
                required: true,
              })}
              placeholder="Enter Message *"
              id="message"
              required
            ></textarea>
            {errors.message && (
              <span className="errorMessage">
                Please enter a message
              </span>
            )}
            <button type="submit">Contact Me!</button>
            {alertInfo.display && alertInfo.message}
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
