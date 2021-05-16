import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Img from 'gatsby-image';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo-dark.png" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <div className='header'>
      <div className='header__top'>
        <FontAwesomeIcon icon='phone' />
      </div>
      <div className='header__nav'>
        <div className='header__nav--left'></div>
        <Img fixed={data.logo.childImageSharp.fixed} />
        <div className='header__nav--left'></div>
      </div>
    </div>
  );
};

export default Header;
