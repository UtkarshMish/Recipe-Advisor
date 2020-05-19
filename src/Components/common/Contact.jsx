import React, { Component } from "react";
import { submitQuery } from "../utils/contact/contactus";
class Contact extends Component {
  state = {
    contact: {
      username: "",
      phone: "",
      email: "",
      message: "",
    },
    submitted: false,
  };
  async formSubmits(e) {
    e.preventDefault();
    const { contact } = this.state;
    const result = await submitQuery(contact);
    if (result.value !== false) this.setState({ submitted: true });
  }
  setValue(e) {
    const name = e.target.name;
    const value = e.target.value;
    const { contact } = this.state;
    contact[name] = value;
    this.setState({ contact });
  }
  render() {
    const {
      contact: { username, phone, email, message },
      submitted,
    } = this.state;
    return (
      <div className="contact__container">
        <div className="contact_form">
          <h1 className="contact__heading">Contact Us</h1>
          {!submitted ? (
            <form onSubmit={(e) => this.formSubmits(e)}>
              <div className="content">
                <label htmlFor="contact-name">Name :</label>
                <input
                  type="text"
                  id="contact-name"
                  name="username"
                  pattern="[A-Za-z]+"
                  title="Do not enter Number and special symbols"
                  required="required"
                  value={username}
                  onChange={(e) => this.setValue(e)}
                />
              </div>
              <div className="content">
                <label htmlFor="contact-phone">phone :</label>
                <input
                  type="number"
                  id="contact-phone"
                  name="phone"
                  max="9999999999"
                  title="please enter number only"
                  required="required"
                  value={phone}
                  onChange={(e) => this.setValue(e)}
                />
              </div>
              <div className="content">
                <label htmlFor="contact-email">Email :</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  title="please enter number only"
                  required="required"
                  value={email}
                  onChange={(e) => this.setValue(e)}
                />
              </div>
              <div className="content">
                <label htmlFor="contact-message">Message :</label>
                <textarea
                  name="message"
                  id="contact-message"
                  title="please enter number only"
                  required="required"
                  value={message}
                  onChange={(e) => this.setValue(e)}
                ></textarea>
              </div>
              <div className="submit--button">
                <input type="submit" className="btn" value="send" />
              </div>
            </form>
          ) : (
            <div className="submit-success">
              <h1>
                Form Submitted Successfully !!! You'll be shortly notified !!!
              </h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Contact;
