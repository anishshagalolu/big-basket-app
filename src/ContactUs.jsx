import React from "react";
import "./ContactUs.css";
 function ContactUs() {
  return (
    <div className="contact-us-page">
      <form>
      <div className="contact-card">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtext">
          Have a question or feedback? We'd love to hear from you!
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input type="text" className="form-input" placeholder="Your Name" />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-input" placeholder="you@example.com" />
          </div>

          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea rows="5" className="form-textarea" placeholder="Write your message here..."></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
          
        </form>
      </div>
      </form>

    </div>
  );
}
export default ContactUs;
