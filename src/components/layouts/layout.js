import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import Footer from './footer';
import Header from './header';

import '../../styles/main.scss';

library.add(faPhone);

const Layout = (props) => {
  return (
    <div className={props.className}>
      <Header />
      <div className='content'>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
