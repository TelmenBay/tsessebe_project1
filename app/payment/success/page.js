'use client';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Success() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    // Here you could verify the payment with your backend
    // and update the user's access in Firebase
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="payment-result-container">
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase. You will receive your access code shortly.</p>
      <p>Redirecting you back to workshops...</p>
    </div>
  );
} 