import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>✨ CareerBoost AI</h2>
      <div style={styles.links}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/builder">Create Resume</Link>
        <Link style={styles.link} to="/jobs">Company Eligibility</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 3rem',
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  logo: { margin: 0, color: 'var(--primary-color)', fontWeight: 800 },
  links: { display: 'flex', gap: '2rem' },
  link: { color: '#e2e8f0', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s' }
};

export default Navbar;
