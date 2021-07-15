import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import Footer from './footer';
import Header from './header';

library.add(faPhone, faMapMarkerAlt);

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
