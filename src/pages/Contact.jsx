import React from 'react';


function Contact() {
    return (
        
        <section>
  <div>
      <h2>Contact Us</h2>
      <p>Please get in touch!</p>
      <form action="#">
          <div>
              <label htmlFor="email" >Your email</label>
              <input type="email" id="email" placeholder="your.name@email.com" required />
          </div>
          <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="subject" required />
          </div>
          <div >
              <label htmlFor="message" >Your message</label>
              <textarea id="message" rows="6" placeholder="your message"></textarea>
          </div>
          <button type="submit" >Send message</button>
      </form>
  </div>
</section>
        
    );
}

export default Contact;