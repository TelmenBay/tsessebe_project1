'use client';
import { useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import NavBanner from './components/NavBanner';
import PasscodeModal from './components/PasscodeModal';

export default function Home() {
  const [user, setUser] = useState(null);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [showPasscodeModal, setShowPasscodeModal] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleWorkshopAccess = (workshopId) => {
    if (user) {
      setSelectedWorkshop(workshopId);
      setShowPasscodeModal(true);
    }
  };

  const handlePasscodeSuccess = (workshopId) => {
    // Here you can redirect to the workshop content or handle access
    console.log(`Access granted to workshop ${workshopId}`);
  };

  return (
    <>
      <NavBanner user={user} />
      <main className="container">
        {/* Main Info Box - Always visible */}
        <section className="info-box">
          <h1>KALLIST8 STEM</h1>
          <p>KALLIST8 (pronounced 'kuh-list-oh') is a cradle to retirement cutting edge web-based career planning and performance management platform as a service (PaaS) product offering modules that can be used by individuals and groups in private and public settings. This product is used by professional development teams, career counselors, professionals, character building programs, parents, educational institutions, and more.
When customized for specific groups, the platform and programs are delivered under the KALLIST8 ACE (pronounced 'kuh-list-oh' 'ays') entity.</p>
        </section>

        <div className="workshops-grid">
          <div className="workshop-card">
            <div className="workshop-content">
              <h2>Workshop #1</h2>
              <h3>AI-Powered Biocomputation: Innovation and Cybersecurity</h3>
              <ul className="workshop-details">
                <li>Introduction to AI and Cybersecurity</li>
                <li>Cybersecurity Threats and Vulnerabilities</li>
                <li>AI-Powered Cybersecurity Solutions and Best Practices</li>
                <li>Ethical Considerations in AI and Cybersecurity</li>
              </ul>
              {user && (
                <button onClick={() => handleWorkshopAccess('workshop1')}>
                  Access Workshop
                </button>
              )}
            </div>
          </div>

          <div className="workshop-card">
            <div className="workshop-content">
              <h2>Workshop #2</h2>
              <h3>Empowered to Engage In Today's Workplace</h3>
              <ul className="workshop-details">
                <li>Introduction to Diverse Workplace Environments and Cultures</li>
                <li>Workplace Wellness Domains</li>
                <li>Mental Health Tools and Strategies for Success</li>
                <li>Effective Communication, Interpersonal Skills, and Advocacy</li>
              </ul>
              {user && (
                <button onClick={() => handleWorkshopAccess('workshop2')}>
                  Access Workshop
                </button>
              )}
            </div>
          </div>

          <div className="workshop-card">
            <div className="workshop-content">
              <h2>Workshop #3</h2>
              <h3>Financial Literacy and Entrepreneurship</h3>
              <ul className="workshop-details">
                <li>Introduction to Financial Literacy</li>
                <li>Personal Finance Management</li>
                <li>Understanding Credit and Debt</li>
                <li>Entrepreneurship Basics and Intellectual Property</li>
              </ul>
              {user && (
                <button onClick={() => handleWorkshopAccess('workshop3')}>
                  Access Workshop
                </button>
              )}
            </div>
          </div>
        </div>

        {showPasscodeModal && (
          <PasscodeModal
            workshopId={selectedWorkshop}
            onClose={() => setShowPasscodeModal(false)}
            onAccess={handlePasscodeSuccess}
          />
        )}
      </main>
    </>
  );
}
