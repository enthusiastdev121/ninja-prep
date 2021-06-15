import React from 'react';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import PremiumComponent from '../components/Premium/PremiumComponent';
import {STRIPE_KEY} from '../config/keys';

const PremiumPage = () => {
  const stripePromise = loadStripe(STRIPE_KEY);

  return (
    <Elements stripe={stripePromise}>
      <PremiumComponent />
    </Elements>
  );
};
export default PremiumPage;
