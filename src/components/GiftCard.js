import React from 'react';
import '../style/style.css';
import { HashLink as Link } from 'react-router-hash-link';

const GiftCard = () => {
  return (
    <section id='gift-cards' className='section bg-light'>
      <div className='container'>
        <div className='gift-cards'>
          <div>
            <img src={require('../img/cards.png')} alt='' />
          </div>
          <div>
            <h2>Gift Cards</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
              expedita tempore quasi omnis a aut et totam illo fuga accusamus
              dolorum vero, ut harum consectetur. Minima molestias officiis
              culpa non sed dicta itaque. Et aliquam illo obcaecati molestias
              veritatis porro.
            </p>
            <p>Already have an Orange MyTunes Music Gift Card?</p>
            <hr />
            <Link to='#' className='text-secondary'>
              <i className='fas fa-chevron-right'></i> Redeem
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftCard;
