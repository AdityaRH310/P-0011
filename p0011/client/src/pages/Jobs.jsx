import React, { useState, useEffect } from 'react';

const mockCompanyData = [
  { id: 1, name: 'Google', minSgpa: 8.5, requiredSkills: ['React.js', 'Python', 'Node.js'], role: 'Full Stack Engineer' },
  { id: 2, name: 'Amazon', minSgpa: 8.0, requiredSkills: ['AWS', 'Node.js'], role: 'Cloud Developer' },
  { id: 3, name: 'Microsoft', minSgpa: 7.5, requiredSkills: ['C#', 'SQL', 'React.js'], role: 'Software Engineer' },
  { id: 4, name: 'TCS', minSgpa: 6.5, requiredSkills: ['Java', 'HTML', 'CSS'], role: 'Systems Engineer' },
  { id: 5, name: 'Meta', minSgpa: 8.8, requiredSkills: ['React.js', 'Redux', 'GraphQL'], role: 'Frontend Developer' }
];

const Jobs = () => {
  const [profile, setProfile] = useState(null);
  const [eligibleJobs, setEligibleJobs] = useState([]);
  
  useEffect(() => {
    // We retrieve the locally cached generated resume data to check eligibility.
    // In a real database scenario, this would be an API call to the Node.js backend.
    const savedData = localStorage.getItem('userProfile');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setProfile(parsedData);
      
      const userSgpa = parseFloat(parsedData.sgpa);
      const userSkills = parsedData.skills.toLowerCase();

      // Simple mock backend filtering algorithm based on SGPA and Skills
      const matched = mockCompanyData.filter(company => {
        const passesSgpa = userSgpa >= company.minSgpa;
        const matchesSkill = company.requiredSkills.some(skill => 
          userSkills.includes(skill.toLowerCase())
        );
        return passesSgpa && matchesSkill;
      });

      setEligibleJobs(matched);
    }
  }, []);

  return (
    <div style={{ maxWidth: '900px', margin: '3rem auto', padding: '0 1rem' }}>
      <h1>Company Eligibility Results</h1>
      
      {profile ? (
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)' }}>
            Showing matches for <strong>{profile.name}</strong> 
            <br/>(SGPA: <span style={{ color: 'var(--secondary-color)' }}>{profile.sgpa}</span>)
          </p>
        </div>
      ) : (
        <p style={{ textAlign: 'center', color: 'red' }}>Please build your resume first.</p>
      )}

      <div className="grid-2">
        {eligibleJobs.length > 0 ? eligibleJobs.map(job => (
          <div key={job.id} className="glass-container" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>{job.name}</h3>
            <p style={{ fontWeight: 'bold' }}>Role: <span style={{ fontWeight: 'normal', color: 'var(--text-muted)' }}>{job.role}</span></p>
            <p style={{ fontWeight: 'bold' }}>Required SGPA: <span style={{ fontWeight: 'normal', color: 'var(--text-muted)' }}>{job.minSgpa}</span></p>
            <div style={{ marginTop: 'auto' }}>
              <button className="btn-primary" style={{ padding: '0.5rem', marginTop: '1rem', width: '100%', fontSize: '0.9rem' }}>
                1-Click Apply
              </button>
            </div>
          </div>
        )) : (
          <div style={{ gridColumn: 'span 2', textAlign: 'center' }}>
             <p>No ideal matches found. Try adding more skills to your resume.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
