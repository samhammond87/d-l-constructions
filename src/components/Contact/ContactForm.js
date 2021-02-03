import React from "react";
// emailjs allows sending email directly from javascript with no backend development
import emailjs from "emailjs-com";

export default function ContactUs() {
  function sendEmail(e) {
    // prevent browser from refreshing by default
    e.preventDefault();

    // emailjs configuration
    emailjs
      // emailjs method
      .sendForm(
        // service id
        "service_4aatm2p",
        // email template id
        "template_3ww3nz1",
        e.target,
        // user id
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

  return (
    // renders contact form
    <div id="contact">
      <div className="container">
        <form onSubmit={sendEmail}>
          {/* contact form heading and centered using bootstrap */}
          <h2 className="text-center">Contact Us</h2>
          {/* contact form input fields and labels */}
          <div className="col-8 form-group mx-auto">
            <label>Name</label>
            <input type="text" className="form-control" name="name" />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <label>Email Address</label>
            <input type="email" className="form-control" name="email" />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <label>Subject</label>
            <input type="text" className="form-control" name="subject" />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <label>Message</label>
            <textarea
              className="form-control"
              id=""
              cols="30"
              rows="8"
              name="message"
            ></textarea>
          </div>
          <div className="col-8 pt-3 mx-auto">
            <input
              type="submit"
              className="btn btn-warning justify-content-center"
              value="Send Message"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
