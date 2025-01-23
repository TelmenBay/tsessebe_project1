import FlipCard from './components/FlipCard';
import w1 from '../assets/tsessebe_w1.png';
import w2 from '../assets/tsessebe_w2.png';
import w3 from '../assets/tsessebe_w3.png';

export default function Home() {
  return (
    <main className="container">
      {/* Main Info Box */}
      <section className="info-box">
        <h1>KALLIST8 STEM</h1>
        <p>KALLIST8 (pronounced 'kuh-list-oh') is a cradle to retirement cutting edge web-based career planning and performance management platform as a service (PaaS) product offering modules that can be used by individuals and groups in private and public settings. This product is used by professional development teams, career counselors, professionals, character building programs, parents, educational institutions, and more.
When customized for specific groups, the platform and programs are delivered under the KALLIST8 ACE (pronounced 'kuh-list-oh' 'ays') entity.</p>
      </section>

      {/* Workshop Cards */}
      <div className="workshops-grid">
        <FlipCard frontImage={w1}>
          <div className="workshop-card">
            <h2>Workshop #1</h2>
            <h3>AI-Powered Biocomputation: Innovation and Cybersecurity</h3>
            <ul className="workshop-details">
              <li>Introduction to AI and Cybersecurity</li>
              <li>Cybersecurity Threats and Vulnerabilities</li>
              <li>AI-Powered Cybersecurity Solutions and Best Practices</li>
              <li>Ethical Considerations in AI and Cybersecurity</li>
            </ul>
            <input type="password" placeholder="Enter passcode" />
            <button>Access Workshop</button>
          </div>
        </FlipCard>

        <FlipCard frontImage={w2}>
          <div className="workshop-card">
            <h2>Workshop #2</h2>
            <h3>Empowered to Engage In Today's Workplace</h3>
            <ul className="workshop-details">
              <li>Introduction to Diverse Workplace Environments and Cultures</li>
              <li>Workplace Wellness Domains</li>
              <li>Mental Health Tools and Strategies for Success</li>
              <li>Effective Communication, Interpersonal Skills, and Advocacy</li>
            </ul>
            <input type="password" placeholder="Enter passcode" />
            <button>Access Workshop</button>
          </div>
        </FlipCard>

        <FlipCard frontImage={w3}>
          <div className="workshop-card">
            <h2>Workshop #3</h2>
            <h3>Financial Literacy and Entrepreneurship</h3>
            <ul className="workshop-details">
              <li>Introduction to Financial Literacy</li>
              <li>Personal Finance Management</li>
              <li>Understanding Credit and Debt</li>
              <li>Entrepreneurship Basics and Intellectual Property</li>
            </ul>
            <input type="password" placeholder="Enter passcode" />
            <button>Access Workshop</button>
          </div>
        </FlipCard>
      </div>
    </main>
  );
}
