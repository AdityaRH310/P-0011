const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock Job Data for fast prototyping (No Mongo URL required, fail-proof)
const companies = [
  { id: 1, name: 'Google', minSgpa: 8.5 },
  { id: 2, name: 'Amazon', minSgpa: 8.0 },
  { id: 3, name: 'Microsoft', minSgpa: 7.5 }
];

// Health Check API
app.get('/api/health', (req, res) => {
  res.json({ status: 'success', message: 'Node.js Backend is running for Resume Builder' });
});

// Example route if user wants to push resume to the backend (Integration demo)
app.post('/api/resume', (req, res) => {
  const data = req.body;
  console.log("Received Resume Data from Frontend:", data);
  // Ideally, use Mongoose here var newResume = new Resume(data); newResume.save()
  res.status(200).json({ message: "Resume data stored safely in backend", receivedData: data });
});

app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📁 API routes available at /api/*`);
  console.log(`=========================================`);
});
