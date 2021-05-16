import * as React from 'react';
import { navigate } from 'gatsby-link';

import BackgroundImage from '../images/Firewood-closeup.jpg';
import Logo from '../images/logo-light.png';
import Banner from '../images/title-banner.png';
import '../styles/index.scss';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

// styles
const pageStyles = {
  margin: -8,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  minHeight: 'calc(100vh - 30px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${BackgroundImage})`,
  padding: '30px 0 0',
};
const headingStyles = {
  marginTop: 30,
  color: '#ffffff',
  fontWeight: 400,
  fontSize: 32,
  padding: '0 30px',
  textAlign: 'center',
};
const logoImg = {
  width: 300,
};
const titleBanner = {
  backgroundImage: `url(${Banner})`,
  fontSize: 24,
  fontFamily: 'Archivo, sans-serif',
  color: '#ffffff',
  fontWeight: 700,
  letterSpacing: 1.75,
  textTransform: 'uppercase',
  display: 'inline-block',
  margin: '0 auto -29px auto',
  padding: '15px 80px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  zIndex: 10,
};

// markup
const IndexPage = () => {
  const [state, setState] = React.useState({});

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
    <main style={pageStyles}>
      <title>Wisco Firewood Supply</title>
      <img style={logoImg} src={Logo} alt='Wisco Firewood Supply Logo' />
      <h1 style={headingStyles}>Welcome to Wisco Firewood Supply!</h1>
      <div style={titleBanner}>Contact Us</div>
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
      <p className='siteInfo'>
        Our full website is currently being developed and will be available
        soon. Stay tuned for more infromation, thank you!
      </p>
    </main>
  );
};

export default IndexPage;
