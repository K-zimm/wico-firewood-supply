import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <footer className='py-4 px-10 text-center bg-green text-white'>
      <p>
        &copy; 2021 by {data.site.siteMetadata.title} | All Rights Reserved |
        Site created by{' '}
        <a
          href='https://kzimms.com'
          target='_blank'
          className='text-orange'
          rel='noreferrer'
        >
          K.Zimms
        </a>
      </p>
    </footer>
  );
};

export default Footer;
