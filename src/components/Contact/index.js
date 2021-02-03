import React from 'react';
import {
  ContactFormContent,
  ContactForm,
  ContactFormH1,
  ContactFormLabel,
  ContactFormInput,
  ContactFormTextMessageInput,
  ContactFormButton,
} from './ContactFormElements';
import emailjs from 'emailjs-com';

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

  function emailAlert() {
    alert("Thank you for getting in touch! We'll be in contact soon");
  }

  return (
    <>
      <ContactFormContent id='contact'>
        <ContactForm onSubmit={sendEmail}>
          <ContactFormH1>Contact Us</ContactFormH1>
          <ContactFormLabel htmlFor='for'>Name</ContactFormLabel>
          <ContactFormInput type='text' className='form-control' name='name' />
          <ContactFormLabel htmlFor='for'>Email</ContactFormLabel>
          <ContactFormInput
            type='email'
            className='form-control'
            name='email'
          />
          <ContactFormLabel htmlFor='for'>Subject</ContactFormLabel>
          <ContactFormInput
            type='text'
            className='form-control'
            name='subject'
          />
          <ContactFormLabel htmlFor='for'>Message</ContactFormLabel>
          <ContactFormTextMessageInput
            className='form-control'
            name='message'
          />
          <ContactFormButton type='submit' onClick={emailAlert}>
            Send Message
          </ContactFormButton>
          {/* <Text>Forgot password?</Text> */}
        </ContactForm>
      </ContactFormContent>
    </>
  );
}
