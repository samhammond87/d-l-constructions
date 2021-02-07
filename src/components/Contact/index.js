import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  ContactFormContent,
  ContactForm,
  ContactFormH1,
  ContactFormLabel,
  ContactFormInput,
  ContactFormTextMessageInput,
  ContactFormButton,
} from "./ContactFormElements";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);

  function fun() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
  }

  function sendEmail(e) {
    // prevents browser from refreshing when the button is clicked
    e.preventDefault();

    // emailjs configuration
    emailjs
      .sendForm(
        "service_4aatm2p",
        "template_3ww3nz1",
        e.target,
        "user_AI5Txgn8xAtQwnf1LvUBq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  // prompt to inform user that message has been sent successfully
  function emailAlert() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setTimeout(function () {
      alert("Thank you for getting in touch! We'll be in contact soon");
    }, 2000);
    fun();
  }

  return (
    <>
      <ContactFormContent id="contact">
        <ContactForm onSubmit={sendEmail}>
          <ContactFormH1>Contact Us</ContactFormH1>
          <ContactFormLabel htmlFor="for">Name</ContactFormLabel>
          <ContactFormInput
            type="text"
            className="form-control"
            name="name"
            id="name"
          />
          <ContactFormLabel htmlFor="for">Email</ContactFormLabel>
          <ContactFormInput
            type="email"
            className="form-control"
            name="email"
            id="email"
          />
          <ContactFormLabel htmlFor="for">Subject</ContactFormLabel>
          <ContactFormInput
            type="text"
            className="form-control"
            name="subject"
            id="subject"
          />
          <ContactFormLabel htmlFor="for">Message</ContactFormLabel>
          <ContactFormTextMessageInput
            className="form-control"
            name="message"
            id="message"
          />
          <ContactFormButton
            type="submit"
            onClick={emailAlert}
            disabled={loading}
          >
            {loading && <i style={{ marginRight: "5px" }} />}
            {loading && <span>Sending your message...</span>}
            {!loading && <span>Send Message</span>}
            {/* Send Message */}
          </ContactFormButton>
        </ContactForm>
      </ContactFormContent>
    </>
  );
}
