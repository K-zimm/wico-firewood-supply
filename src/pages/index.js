import * as React from 'react';

import BackgroundImage from '../images/camp-fire.jpg';
import Logo from '../images/logo-light.png';

// styles
const pageStyles = {
  color: '#232129',
  margin: -8,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `linear-gradient(180deg, rgba(19,34,19,1) 0%, rgba(19,34,19,0.5018382352941176) 100%), url(${BackgroundImage}) `,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
};
const headingStyles = {
  marginTop: 30,
  color: '#ffffff',
  textTransform: 'uppercase',
  fontSize: 52,
};
const headingAccentStyles = {
  color: '#663399',
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: '300',
  fontSize: '24px',
  maxWidth: '560px',
};

const linkStyle = {
  color: '#8954A8',
  fontWeight: 'bold',
  fontSize: '16px',
  verticalAlign: '5%',
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: 'none',
  marginBottom: 24,
};

const descriptionStyle = {
  color: '#232129',
  fontSize: '14px',
};

const docLink = {
  text: 'Documentation',
  url: 'https://www.gatsbyjs.com/docs/',
  color: '#8954A8',
};

const logoImg = {
  height: '50vh',
  width: 'auto',
};
// data
const links = [];

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Wisco Firewood Supply</title>
      <img style={logoImg} src={Logo} alt='Wisco Firewood Supply Logo' />
      <h1 style={headingStyles}>Website Coming Soon!</h1>
    </main>
  );
};

export default IndexPage;
