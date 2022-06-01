import React from 'react';

import '../style/style.css';
import { HashLink as Link } from 'react-router-hash-link';

const Nav = () => {
  return (
    <header>
      <nav className='cf'>
        <ul className='cf'>
          <li className='hide-on-small'>
            <Link smooth to={'#showcase'}>
              myTunes
            </Link>
          </li>
          <li>
            <Link smooth to={'#showcase'}>
              Overview
            </Link>
          </li>
          <li>
            <Link smooth to={'#music'}>
              Music
            </Link>
          </li>
          <li>
            <Link smooth to='#video'>
              Video
            </Link>
          </li>
          <li>
            <Link smooth to={'#gift-cards'}>
              Gift Cards
            </Link>
          </li>
        </ul>
        <Link smooth to='#' id='openup'>
          myTunes
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
