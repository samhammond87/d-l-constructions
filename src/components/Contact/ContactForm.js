import emailjs from 'emailjs-com';
import React from 'react';

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_4aatm2p',
        'template_3ww3nz1',
        e.target,
        'user_AI5Txgn8xAtQwnf1LvUBq'
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
    <div id='contact'>
      <div className='container'>
        <form onSubmit={sendEmail}>
          <h2 className='text-center'>Contact Us</h2>
          <div className='col-8 form-group mx-auto'>
            <label>Name</label>
            <input type='text' className='form-control' name='name' />
          </div>
          <div className='col-8 form-group pt-2 mx-auto'>
            <label>Email Address</label>
            <input type='email' className='form-control' name='email' />
          </div>
          <div className='col-8 form-group pt-2 mx-auto'>
            <label>Subject</label>
            <input type='text' className='form-control' name='subject' />
          </div>
          <div className='col-8 form-group pt-2 mx-auto'>
            <label>Message</label>
            <textarea
              className='form-control'
              id=''
              cols='30'
              rows='8'
              name='message'
            ></textarea>
          </div>
          <div className='col-8 pt-3 mx-auto'>
            <input
              type='submit'
              className='btn btn-warning justify-content-center'
              value='Send Message'
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}
