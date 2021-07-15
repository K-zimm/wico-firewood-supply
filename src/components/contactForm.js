import React, { useState } from 'react';
import { navigate } from 'gatsby-link';
import { StaticImage } from 'gatsby-plugin-image';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ContactForm = (props) => {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  return (
    <div
      className='flex flex-col bg-cover bg-center items-center justify-center py-10 px-10'
      style={{
        backgroundImage: 'url(' + props.background + ')',
      }}
    >
      <div className='relative -mb-7'>
        <StaticImage
          src='../images/title-banner.png'
          width={350}
          placeholder='traced_svg'
          alt=''
        />
        <div className='flex justify-center items-center absolute inset-0'>
          <h2 className='leading-none tracking-widest text-2xl text-white font-semibold'>
            Contact Us
          </h2>
        </div>
      </div>
      <form
        className='form'
        name='contact'
        method='post'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        action='/thank-you/'
        onSubmit={handleSubmit}
      >
        <input type='hidden' name='form-name' value='contact' />
        <p>
          <input type='hidden' name='bot-field' onChange={handleChange} />
        </p>
        <p className='inputRow'>
          <input
            className='inputRow__input inputHalf'
            type='text'
            name='firstName'
            placeholder='FIRST NAME'
            onChange={handleChange}
            required
          />
          <input
            className='inputRow__input inputHalf'
            type='text'
            name='lastName'
            placeholder='LAST NAME'
            onChange={handleChange}
            required
          />
        </p>
        <p className='inputRow'>
          <input
            className='inputRow__input'
            type='email'
            name='email'
            placeholder='EMAIL ADDRESS'
            onChange={handleChange}
            required
          />
        </p>
        <p className='inputRow'>
          <input
            className='inputRow__input'
            type='number'
            name='phone'
            placeholder='PHONE NUMBER'
            onChange={handleChange}
          />
        </p>
        <p className='inputRow'>
          <textarea
            className='inputRow__input'
            name='message'
            placeholder='WHAT CAN WE HELP WITH?'
            onChange={handleChange}
          />
        </p>
        <p>
          <button type='submit' className='submit'>
            Send Request
          </button>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
