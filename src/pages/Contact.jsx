import Footer from "../components/Footer"
import Invitation from "../components/Invitation";
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
 

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        e.target,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        () => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <> 
    <div className="envelope" title="">
    <div className="back"></div>
    <form className="letter" onSubmit={sendEmail}>
      <p>
        <label>Name:</label>
        <input type="text" name="name" />
      </p>
      <p>
        <label>Email:</label>
        <input type="email" name="email" />
      </p>
      <p>
        <label>Message:</label>
        <textarea name="message"></textarea>
      </p>
      <input type="submit" value="Send" disabled={isSubmitting}/>
      
    </form>
    {stateMessage && <p className="message">{stateMessage}</p>}
    
    </div>
    <Invitation />
    <Footer />
    </>
  );

}

export default Contact

     