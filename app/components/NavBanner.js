'use client';
import Link from 'next/link';
import { auth } from '../../firebaseConfig';
import { signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function NavBanner({ user }) {
  const router = useRouter();
  const [showSignIn, setShowSignIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setShowSignIn(false);
      setEmail('');
      setPassword('');
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="nav-banner">
      <div className="nav-content">
        <div className="logo">KALLIST8</div>
        <div className="nav-buttons">
          {!user ? (
            <>
              <button className="signin-button" onClick={() => setShowSignIn(!showSignIn)}>
                Sign In
              </button>
              <Link href="/signup">
                <button className="signup-button">Sign Up</button>
              </Link>
              {showSignIn && (
                <div className="signin-dropdown">
                  <form onSubmit={handleSignIn}>
                    {error && <div className="error-message">{error}</div>}
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                    />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                    />
                    <button type="submit">Sign In</button>
                  </form>
                </div>
              )}
            </>
          ) : (
            <button className="signup-button" onClick={handleSignOut}>
              Sign Out
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 