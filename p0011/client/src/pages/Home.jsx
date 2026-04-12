import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '8rem', padding: '0 2rem' }}>
      <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
        Land Your Dream Job with <br/> Datacard Intelligence
      </h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
        Instantly build an ATS-friendly, professional resume. Input your SGPA, Skills, and Projects to automatically calculate your eligibility for top-tier companies.
      </p>
      
      <Link to="/builder" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block', width: 'auto', fontSize: '1.2rem', padding: '1rem 3rem' }}>
        Start Building Now 🚀
      </Link>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '5rem', color: 'var(--text-muted)' }}>
        <div>
          <h3 style={{color: 'white', fontSize: '2rem', marginBottom: '0.5rem'}}>10k+</h3>
          <p>Resumes Created</p>
        </div>
        <div>
          <h3 style={{color: 'white', fontSize: '2rem', marginBottom: '0.5rem'}}>Smart</h3>
          <p>SGPA Analytics & Match</p>
        </div>
        <div>
          <h3 style={{color: 'white', fontSize: '2rem', marginBottom: '0.5rem'}}>100+</h3>
          <p>Tech Companies Indexed</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
