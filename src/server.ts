// imports the express framework
import express from 'express';
// this imports the connectDB() function created in connections.ts
import connectDB from './config/connections';

// an instance of express application is created and assigned to the variable app
const app = express();

// this calls the connectDB function we imported above
connectDB();

// setting the variable PORT to either what the .env file says or 3001 if nothing is there
const PORT = process.env.PORT || 3001;
// this starts the express server and waits for incoming requests on the port listed above
app.listen(PORT, () => {
// if the the server is good and successfully waiting for incoming requests the message below is logged to the console
    console.log(`Server is running on port ${PORT}`);
});

