import jsPDF from 'jspdf';

export const generatePDF = (formData) => {
  const doc = new jsPDF();
  
  // Header
  doc.setFontSize(26);
  doc.setTextColor(138, 43, 226); 
  doc.text(formData.name || 'Your Name', 20, 25);

  doc.setFontSize(11);
  doc.setTextColor(80, 80, 80);
  doc.text(`Email: ${formData.email} | Phone: ${formData.phone}`, 20, 35);
  
  // Separation Line
  doc.setLineWidth(0.5);
  doc.line(20, 40, 190, 40);

  // Academics
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text('Academic Performance', 20, 55);
  doc.setFontSize(11);
  doc.setTextColor(50, 50, 50);
  doc.text(`Cumulative SGPA / Grades: ${formData.sgpa}`, 20, 65);

  // Skills
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text('Core Skills & Competencies', 20, 85);
  doc.setFontSize(11);
  doc.setTextColor(50, 50, 50);
  // Split long strings
  const splitSkills = doc.splitTextToSize(formData.skills, 170);
  doc.text(splitSkills, 20, 95);

  // Projects
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text('Key Projects', 20, 120);
  doc.setFontSize(11);
  doc.setTextColor(50, 50, 50);
  const splitProjects = doc.splitTextToSize(formData.projects, 170);
  doc.text(splitProjects, 20, 130);

  // Certificates
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text('Certificates of Achievement', 20, 180);
  doc.setFontSize(11);
  doc.setTextColor(50, 50, 50);
  const splitCerts = doc.splitTextToSize(formData.certificates, 170);
  doc.text(splitCerts, 20, 190);

  // Save the PDF
  doc.save(`${formData.name.replace(/\s+/g, '_')}_Resume.pdf`);
};
