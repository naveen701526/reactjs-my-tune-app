import React from 'react';
import '../style/style.css';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='footer-cols'>
          <ul>
            <li>Shop & Learn</li>
            <li>
              <Link to={'#'}>Music</Link>
            </li>
            <li>
              <Link to={'#'}>Movies</Link>
            </li>
            <li>
              <Link to={'#'}>Shows</Link>
            </li>
            <li>
              <Link to={'#'}>Apps</Link>
            </li>
            <li>
              <Link to={'#'}>Gift Cards</Link>
            </li>
          </ul>

          <ul>
            <li>Orange Store</li>
            <li>
              <Link to={'#'}>Find a Store</Link>
            </li>
            <li>
              <Link to={'#'}>Today at Orange</Link>
            </li>
            <li>
              <Link to={'#'}>Orange Camp</Link>
            </li>
            <li>
              <Link to={'#'}>Financing</Link>
            </li>
            <li>
              <Link to={'#'}>Order Status</Link>
            </li>
          </ul>

          <ul>
            <li>Education & Business</li>
            <li>
              <Link to={'#'}>Orange & Education</Link>
            </li>
            <li>
              <Link to={'#'}>Shop For College</Link>
            </li>
            <li>
              <Link to={'#'}>Orange & Business</Link>
            </li>
            <li>
              <Link to={'#'}>Shop For Business</Link>
            </li>
            <li>
              <Link to={'#'}>Jobs</Link>
            </li>
          </ul>

          <ul>
            <li>About Orange</li>
            <li>
              <Link to={'#'}>Newsroom</Link>
            </li>
            <li>
              <Link to={'#'}>Orange Leadership</Link>
            </li>
            <li>
              <Link to={'#'}>Investors</Link>
            </li>
            <li>
              <Link to={'#'}>Events</Link>
            </li>
            <li>
              <Link to={'#'}>Contact Orange</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom text-center'>
        Copyright &copy; 2022 Orange myTunes
      </div>
    </footer>
  );
};

export default Footer;
