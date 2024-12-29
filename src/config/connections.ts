// this imports the mongoose library so we can do things to a mongo database
import mongoose from 'mongoose';
// this imports the dotenv library, which is how you will basically "log in" with a username and password to a database, If applicable
import dotenv from 'dotenv';

// calls config method on dotenv, takes info in .env file if applicable to connect to database
dotenv.config();

// this is an asynchornous function called connectDB, this is the function that will actually connect to the database
const connectDB = async () => {
// Try and connect to the mongo data base with info from .env if applicable
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
// connection to the database is successful
    console.log(`MongoDB Connected: ${conn.connection.host}`);
// catches any errors
  } catch (error) {
// connection to the data was not successful, and logs why
    console.error(`Error: ${error.message}`);
// this will crudley end the process if an error happens
    process.exit(1);
  }
};

export default connectDB;
