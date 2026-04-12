import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generatePDF } from '../utils/pdfGenerator';
import './../index.css';

const ResumeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: 'Alex Johnson',
    email: 'alex@college.edu',
    phone: '+1 555-1234',
    sgpa: '8.8',
    skills: 'React.js, Node.js, Python, MongoDB',
    projects: '1. Smart AI Platform\n2. Real-time Crypto Tracker',
    certificates: 'AWS Certified Developer, Hackathon Winner 2023'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 1. Generate PDF and trigger download
    generatePDF(formData);
    
    // 2. Save User Profile for global state/filtering Job Match
    localStorage.setItem('userProfile', JSON.stringify(formData));
    
    // 3. Move automatically to Job Compatibility Checker
    navigate('/jobs');
  };

  return (
    <div style={{ maxWidth: '800px', margin: '3rem auto', padding: '0 1rem' }}>
      <h1 style={{fontSize: '2.5rem'}}>Construct Your Profile</h1>
      <p style={{textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2rem'}}>Fill in your details below. We'll generate your PDF and analyze your compatibility.</p>
      
      <div className="glass-container">
        <form onSubmit={handleSubmit}>
          
          <h2>Personal Details</h2>
          <div className="grid-2">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          </div>

          <h2>Academic Performance</h2>
          <div className="form-group">
            <label>Average SGPA (Numeric Value e.g. 8.5)</label>
            <input type="number" step="0.1" name="sgpa" value={formData.sgpa} onChange={handleChange} required />
          </div>

          <h2>Competencies & Achievements</h2>
          <div className="form-group">
            <label>Core Skills (comma separated)</label>
            <input type="text" name="skills" value={formData.skills} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Key Projects</label>
            <textarea name="projects" rows="3" value={formData.projects} onChange={handleChange} required></textarea>
          </div>

          <div className="form-group">
            <label>Certificates of Achievement</label>
            <textarea name="certificates" rows="2" value={formData.certificates} onChange={handleChange} required></textarea>
          </div>

          <button type="submit" className="btn-primary" style={{marginTop: '2rem', padding: '1rem'}}>
            Download Resume (PDF) & View Eligible Companies
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResumeForm;
