import React from "react";
const Contact = () => {
  return (
    <div class="contact_form">
      <h1 className="contact__heading">Contact Us</h1>
      <form onSubmit={(e) => formSubmits(e)}>
        <div className="content">
          <label htmlFor="contact-name">Name :</label>
          <input type="text" id="contact-name" name="name" />
        </div>
        <div className="content">
          <label htmlFor="contact-phone">phone :</label>
          <input type="text" id="contact-phone" pattern="[0-9]{10}" />
        </div>
        <div className="content">
          <label htmlFor="contact-email">Email :</label>
          <input type="email" id="contact-email" />
        </div>
        <div className="content">
          <label htmlFor="contact-message">Message :</label>
          <textarea id="contact-message"></textarea>
        </div>
        <div className="submit--button">
          <input type="submit" className="btn" value="send" />
        </div>
      </form>
    </div>
  );
};
const formSubmits = (e) => {
  e.preventDefault();
};
export default Contact;
