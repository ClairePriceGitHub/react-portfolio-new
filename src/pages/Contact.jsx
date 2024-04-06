import React from 'react';
import '../index.css'


function Contact() {
    return (
        
        <section>
  <div>
      <h1>Contact Us</h1>
      <p>Please get in touch!</p>
      <form action="#">
          <div>
              <label htmlFor="email" ><p>Your email</p></label>
              <input type="email" id="email" placeholder="your.name@email.com" required />
          </div>
          <div>
              <label htmlFor="subject"><p>Subject</p></label>
              <input type="text" id="subject" placeholder="subject" required />
          </div>
          <div >
              <label htmlFor="message" ><p>Your message</p></label>
              <textarea id="message" rows="6" placeholder="your message"></textarea>
          </div>
          <button type="submit" ><p>Send</p></button>
      </form>
  </div>
</section>
        
    );
}

export default Contact;