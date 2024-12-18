import express from 'express';
import connectDB from './config/connections';

const app = express();

connectDB();

const PORT = ProcessingInstruction.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

