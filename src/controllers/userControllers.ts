// importing user from userModels.ts
import { Request, Response } from 'express';
import User from '../models/userModel';

// having no overload matches this call errors, cause we dont know how to handle id?
interface UserParams {
    id: string;
}

// starts a function named createUser
export const createUser = async (req: Request, res: Response) => {
// start of a try block that will either add a new user or throw an error if unable to create a new user
    try {
        const newUser = new User(req.body); 
        await newUser.save(); 
        res.status(201).json(newUser); 
    } catch (error) {
        res.status(400).send('Error creating user');
    }
};


// starts a function named getUserProfile
/*
export const getUserProfile = async (req: Request<UserParams>, res: Response): Promise<Response> => {
    try {
        const userId = req.params.id;
        const foundUser = await User.findById(userId); 
        if (!foundUser) {
            return res.status(404).send('User not found');
        }
        return res.json(foundUser);
    } catch (error) {
        return res.status(500).send('Server error'); 
    }
};
*/
// this is a mock version of the function above
export const getUserProfile = async (req: Request<UserParams>, res: Response): Promise<Response> => {
    const userId = req.params.id; // Accessing the id parameter from req.params
    return res.json({ id: userId, name: "Mock User" }); // Mock response
};


// starts a function named updateUserProfile 
export const updateUserProfile = async (req: Request<UserParams>, res: Response): Promise<Response> => {
    try {
        const userId = req.params.id;
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).send('User not found');
        }
        return res.json(updatedUser);
    } catch (error) {
        return res.status(400).send('Error updating user');
    }
};

// starts a function named deleteUser
export const deleteUser = async (req: Request<UserParams>, res: Response): Promise<Response> => {
    try {
        const userId = req.params.id;
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).send('User not found');
        }
        return res.send('User deleted successfully');
    } catch (error) {
        return res.status(500).send('Server error');
    }
};

// starts a function named getAllUsers
export const getAllUsers = async (req: Request, res: Response) => {
// start of a try block that attempts to get a list of all users on the database    
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

