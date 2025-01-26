'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Cancel() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="payment-result-container">
      <h1>Payment Cancelled</h1>
      <p>Your payment was cancelled. You can try again when you're ready.</p>
      <p>Redirecting you back to workshops...</p>
    </div>
  );
} 