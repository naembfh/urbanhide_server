import mongoose from 'mongoose';
import app from './app.js';

const PORT = process.env.PORT || 5000;

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit the process with failure
    }
};

// Connect to MongoDB and start the server
const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

// Start the server
startServer();
