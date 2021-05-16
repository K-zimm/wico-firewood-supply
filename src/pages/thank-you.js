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

// markup
const ThankyouPage = () => {
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
      <title>Thank You! | Wisco Firewood Supply</title>
      <img style={logoImg} src={Logo} alt='Wisco Firewood Supply Logo' />
      <h1 style={headingStyles}>Thank you for contacting us!</h1>
      <p className='thankYou'>
        We will be in touch soon and are eager to help you with your firewood
        needs!
      </p>
    </main>
  );
};

export default ThankyouPage;
