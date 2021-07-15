import React, { useState } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StaticImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      datoCmsHomePage {
        announcement
      }
    }
  `);
  return (
    <div className='header font-sans'>
      <div className='header__top flex flex-col sm:flex-row justify-center lg:justify-between items-center py-2 px-4 bg-green text-gray-light'>
        <div className='header__top--contact w-40 order-2 sm:order-1 sm:text-left text-center mb-2 sm:mb-0'>
          <a href='tel:9204300745' className='phone'>
            <FontAwesomeIcon icon='phone' className='mr-1' /> (920) 430-0745
          </a>
        </div>
        <div className='header__top--announcement flex order-1 sm:order-2 flex-row justify-center items-center mb-2 sm:mb-0 text-center'>
          <span className='flex h-3 w-3 mr-2 relative'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red opacity-75'></span>
            <span className='inline-flex rounded-full h-3 w-3 bg-red'></span>
          </span>
          {data.datoCmsHomePage.announcement}
          <span className='flex h-3 w-3 ml-2 relative'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-red opacity-75'></span>
            <span className='inline-flex rounded-full h-3 w-3 bg-red'></span>
          </span>
        </div>
        <div className='order-3 header__top--location w-40 text-center sm:text-right uppercase'>
          <FontAwesomeIcon icon='map-marker-alt' className='mr-1' />{' '}
          <span>Howard, WI</span>
        </div>
      </div>
      <div className='header__nav flex justify-center py-2 px-4 lg:px-20 text-2xl uppercase font-semibold tracking-wide'>
        <div className='header__nav--left hidden flex-1 lg:flex items-center justify-evenly'>
          <button onClick={() => scrollTo('#about')}>About</button>
          <button onClick={() => scrollTo('#products')}>Products</button>
        </div>
        <StaticImage
          src='../../images/logo-dark.png'
          width={200}
          height={200}
          placeholder='traced_svg'
          className='bg-white logo z-10 rounded-full'
          alt='Wisco Firewood Supply Logo'
        />
        <div className='header__nav--right hidden flex-1 lg:flex items-center justify-evenly'>
          <button onClick={() => scrollTo('#specials')}>Specials</button>
          <button onClick={() => scrollTo('#contact')}>Contact</button>
        </div>
        <div
          className={`${
            showMenu ? 'is-open' : 'is-closed'
          } header__nav--mobile lg:hidden flex-1 flex items-center justify-end relative`}
        >
          <button
            className='hamburger'
            onClick={(e) => {
              e.preventDefault();
              setShowMenu(!showMenu);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div id='mobile-menu'>
            <button
              onClick={() => scrollTo('#about')}
              className='font-semibold'
            >
              About
            </button>
            <button
              onClick={() => scrollTo('#products')}
              className='font-semibold'
            >
              Products
            </button>
            <button
              onClick={() => scrollTo('#specials')}
              className='font-semibold'
            >
              Specials
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className='font-semibold'
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
