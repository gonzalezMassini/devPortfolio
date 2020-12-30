import React from 'react';
import Form from '../components/Form';
const ContactForm = ({ isSubmit, sendEmail }) => {
  return (
    <div className='container' id='contact'>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
      />
      <hr />

      <h1 className='contactTitle'>Contact</h1>
      <div style={{ height: '26em' }} className='form'>
        {!isSubmit ? (
          <Form sendEmail={sendEmail} />
        ) : (
          <>
            <h1 className='submitMemo'>
              Thanks for submitting the contact form.
            </h1>
            <h1>I will get back to you any time soon.</h1>
          </>
        )}
      </div>
      <div className='contactLinks'>
        {/* eslint-disable-next-line */}
        {/* <a href='#' className='fa fa-facebook'></a> */}
        {/* eslint-disable-next-line */}
        <a href='https://twitter.com/JoseMassini' className='fa fa-twitter'></a>
        {/* eslint-disable-next-line */}
        <a
          href='mailto:gonzalez.massini@gmail.com'
          className='fa fa-google'
        ></a>
        {/* eslint-disable-next-line */}
        <a
          href='https://linkedin.com/in/jose-gonzalez-339618196'
          className='fa fa-linkedin'
        ></a>
        {/* eslint-disable-next-line */}
        <a
          href='https://github.com/gonzalezMassini'
          className='fa fa-github'
        ></a>
      </div>
    </div>
  );
};

export default ContactForm;
