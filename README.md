AI-Based Resume Builder &  Company                                                 
Recommendation 
Interconnect 2026
Submitted By: Srushti CHM 
Department: Computer Science & Engineering (CSE) 
College: GM Institute of Technology 
1. Problem Statement : 
Many students struggle to align their academic profiles with industry 
requirements. Standard resume builders often fail to capture specific 
metrics like semester-wise SGPA or verified achievement certificates. 
Furthermore, students often apply to companies blindly, without knowing if 
their skill sets and grades meet the specific eligibility criteria of recruiters, 
leading to high rejection rates and wasted eAort. 
2. Objectives : 
 Automated Resume Generation: Create a professional resume incorporating 
SGPA, skills, projects, and certifications. 
 Smart Matching: Develop a recommendation engine that maps student profiles 
to company requirements. 
 EAiciency: Reduce the time students spend searching for "eligible" companies 
by providing a filtered shortlist. 
 User-Centric Design: Provide an intuitive interface for CSE students to manage 
their professional identity. 
3. Proposed Solution & Architecture : 
The system is built as a web-based application where the Frontend (HTML/CSS/JS) 
collects data and the Backend (Python/Flask or Django) processes the logic. 
System Architecture: 
1. User Input Layer: Users enter SGPA per semester, upload certificate links, and 
list technical skills/projects. 
2. Processing Layer (Python): * Data Parser: Organizes input into a structured 
format. 
o Recommendation Engine: Compares student data against a database of 
company requirements (e.g., "Requires Java & 7.5+ CGPA"). 
3. Output Layer: * PDF Generator: Exports a formatted resume. 
o Dashboard: Displays a list of "Best Fit" companies. 
Architecture Diagram Description: > [Visual Flow: User Interface (HTML/CSS) ↔ 
API/Backend (Python) ↔ Recommendation Logic ↔ Output (Resume PDF & Company 
List)] 
4. Tech Stack & Tools : 
 Frontend: HTML5, CSS3, JavaScript (for a responsive, interactive UI). 
 Backend: Python (chosen for its robust libraries and ease of data matching). 
 Framework: Flask or Django (to bridge the frontend and backend). 
 PDF Library: ReportLab or FPDF (Python libraries to generate the final resume 
document). 
5. How It Addresses the Problem : 
 Gaps in Data: By specifically requiring SGPA and certificates, the tool ensures 
no critical academic data is missed. 
 Misalignment: The recommendation feature acts as a "pre-screening" tool, 
ensuring students focus their energy on companies where they meet the actual 
criteria. 
 Accessibility: A web-based approach allows students to update their profiles 
and check company matches in real-time. 
6. Future Scope & Roadmap : 
 AI Integration: Use Natural Language Processing (NLP) to suggest better 
keywords for project descriptions. 
 Real-time Job Scraper: Integrate with LinkedIn or Glassdoor APIs to pull live job 
requirements. 
 Mock Interview Module: Generate AI-driven questions based on the "Company 
Match" results. 
7. References & Resources : 
 Python Documentation: OAicial guides for Flask/Django. 
 MDN Web Docs: Best practices for HTML5 and CSS layouts. 
. Resume Standards: Research on ATS-friendly (Applicant Tracking System) resume 
formats. 