'use client';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const WORKSHOP_CONFIG = {
  'workshop1': {
    isPaid: false,
    passcode: 'pass1'
  },
  'workshop2': {
    isPaid: true,
    price: 10,
    passcode: 'pass2'
  },
  'workshop3': {
    isPaid: true,
    price: 10,
    passcode: 'pass3'
  }
};

export default function PasscodeModal({ workshopId, onClose, onAccess }) {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const workshop = WORKSHOP_CONFIG[workshopId];

  const handlePayment = async () => {
    try {
      setIsLoading(true);
      const stripe = await stripePromise;
      
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          workshopId,
          price: workshop.price,
        }),
      });

      const { sessionId } = await response.json();
      
      // Redirect to Stripe checkout
      const result = await stripe.redirectToCheckout({
        sessionId,
      });

      if (result.error) {
        setError(result.error.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Payment initialization failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (passcode === workshop.passcode) {
      onAccess(workshopId);
      onClose();
    } else {
      setError('Invalid passcode');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="passcode-modal">
        <h3>{workshop.isPaid ? 'Workshop Access' : 'Enter Workshop Passcode'}</h3>
        
        {workshop.isPaid ? (
          <div className="payment-section">
            <p className="price-info">This workshop requires a one-time payment of ${workshop.price}</p>
            <button 
              className="payment-button"
              onClick={handlePayment}
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Purchase Access'}
            </button>
            <div className="divider">or</div>
            <p className="passcode-info">If you have already purchased, enter your passcode:</p>
          </div>
        ) : null}

        <form onSubmit={handleSubmit}>
          {error && <div className="error-message">{error}</div>}
          <input
            type="password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            placeholder="Enter passcode"
            required
          />
          <div className="modal-buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
} 