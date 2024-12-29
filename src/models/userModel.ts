// imports mongoose library, Schema and Document specifically
import mongoose, { Schema, Document } from 'mongoose';

// This is a typescript interface called IUser that extends the mongoose imported Document and sets the structure of the User document
interface IUser extends Document {
    username: string;
    email: string;
    thoughts: mongoose.Types.ObjectId[];
    friends: mongoose.Types.ObjectId[];
}

// Starts a new mongoose schema and then lays out how its structured
const UserSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // This means the email has to be a certain format
        match: /.+\@.+\..+/,
    },
    thoughts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Thought',
    }],
    friends: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User; 
