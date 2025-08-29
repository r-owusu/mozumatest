// Express.js server for integration scaffolding
// This is an alternative backend to the existing Django backend
// Install dependencies: npm install express cors
// Run with: node server.js or npm start (after setting up package.json)

const express = require('express');
const cors = require('cors');

const app = express();

// Get configuration from environment variables
const PORT = process.env.PORT || 3001;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || 'http://localhost:3000';

// CORS configuration
app.use(cors({
  origin: FRONTEND_ORIGIN,
  credentials: true // Enable credentials (cookies, authorization headers, etc.)
}));

// Middleware for parsing JSON
app.use(express.json());

// API Routes

// GET /api/hello - Simple hello endpoint
app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello from Express backend!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// GET /api/profile - Profile endpoint (requires authorization)
app.get('/api/profile', (req, res) => {
  // Check for Authorization header
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Bearer token required'
    });
  }

  // Extract token (in a real app, you'd validate this token)
  const token = authHeader.substring(7);
  
  // Mock profile data (in a real app, you'd fetch from database)
  res.json({
    id: 1,
    username: 'testuser',
    email: 'test@example.com',
    name: 'Test User',
    token: token,
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    port: PORT
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
  console.log(`CORS configured for: ${FRONTEND_ORIGIN}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`API endpoints:`);
  console.log(`  GET http://localhost:${PORT}/api/hello`);
  console.log(`  GET http://localhost:${PORT}/api/profile (requires Bearer token)`);
});