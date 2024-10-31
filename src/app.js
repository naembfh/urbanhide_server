import express from 'express';

import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

// Create an Express application
const app = express();

// Middleware
const corsOptions = {
    origin: ['http://localhost:3000'], // Allow multiple origins
    credentials: true, // Allow credentials
};

app.use(cors(corsOptions));
app.use(express.json()); 


// Fallback route for unmatched routes
app.use('*', (req, res) => {
    res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({ status: 'error', message });
  });
  

export default app;
