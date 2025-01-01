// imports the express framework
import express from 'express';
// this imports the connectDB() function created in connections.ts
import connectDB from './config/connections';
import userRoutes from './routes/userRoutes';

// an instance of express application is created and assigned to the variable app
const app = express();
const PORT = process.env.PORT || 3001;

// this calls the connectDB function we imported above
connectDB();

app.use(express.json());

app.use('/api/users', userRoutes);

// this starts the express server and waits for incoming requests on the port listed above
app.listen(PORT, () => {
// if the the server is good and successfully waiting for incoming requests the message below is logged to the console
    console.log(`Server is running on port ${PORT}`);
});

