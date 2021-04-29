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
    <footer>
      <p>&copy; 2021 by {data.site.siteMetadata.title} | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
