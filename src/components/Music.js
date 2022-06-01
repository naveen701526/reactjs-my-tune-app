import React from 'react';

import '../style/style.css';
import { HashLink as Link } from 'react-router-hash-link';

const Music = () => {
  return (
    <section id='music' className='section'>
      <div className='container'>
        <h2 className='section-head'>
          <i className='fas fa-music'></i> Music
        </h2>
        <h3>45 million songs. Zero ads.</h3>
        <p className='lead'>
          Stream over 45 million songs, ad-free. Or download albums and tracks
          to listen to offline. All the music in your personal myTunes library —
          no matter where it came from — lives right alongside the Orange Music
          catalog. Start your free three-month trial with no commitment, and
          cancel anytime.
        </p>
        <Link to='#' className='btn btn-primary mb'>
          Start Your Trial Now
        </Link>
        <p className='text-light'>
          Orange Music is available in myTunes, and for iOS and Android devices.
        </p>
        <img src={require('../img/mockup1.png')} alt='hello' />
      </div>
    </section>
  );
};

export default Music;
