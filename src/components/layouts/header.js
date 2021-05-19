import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StaticImage } from 'gatsby-plugin-image';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__top'>
        <FontAwesomeIcon icon='phone' />
      </div>
      <div className='header__nav flex justify-center py-2'>
        <div className='header__nav--left flex items-center'>
          <Link to='#about'>About</Link>
          <Link to='#products'>Products</Link>
        </div>
        <StaticImage
          src='../../images/logo-dark.png'
          width={200}
          height={200}
          placeholder='traced_svg'
          className='bg-white logo'
        />
        <div className='header__nav--left flex items-center'>
          <Link to='#Specials'>Specials</Link>
          <Link to='#Contact'>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
