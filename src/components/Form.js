import React from 'react';

function Form({ sendEmail }) {
  return (
    <form onSubmit={sendEmail}>
      <div className='item'>
        <label>Name:</label>
        <input type='text' placeholder='Name' name='name' required />
      </div>
      <div className='item'>
        <label>Email:</label>
        <input type='text' placeholder='Email' name='email' required />
      </div>
      <div className='item'>
        <label>Subject:</label>
        <input type='text' placeholder='Subject' name='subject' required />
      </div>
      <div className='item'>
        <label>Messgae:</label>
        <textarea
          type='text'
          className='inputMessage'
          placeholder='Message'
          name='message'
          cols='58'
          required
        ></textarea>
      </div>
      <button className='btn' type='submit' value='Send'>
        Send Message
      </button>
    </form>
  );
}

export default Form;
