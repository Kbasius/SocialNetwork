// importing user from userModels.ts
import User from '../models/userModel';
// imports Request and Response from express library
import { Request, Response } from 'express';

// starts a function named createUser
export const createUser = async (req: Request, res: Response) => {
// start of a try block that will either add a new user or throw an error if unable to create a new user
    try {
        const newUser = new User(req.body); 
        await newUser.save(); 
        res.status(201).json(newUser); 
    } catch (error) {
        res.status(400).send('Error creating user: ' + error.message);
    }
};

// starts a function named getUserProfile
export const getUserProfile = async (req: Request, res: Response) => {
// start of a try block that will search up an exsisting user based on an ID number or throw an erorr if we cant find a matching user ID
    try {
        const userId = req.params.id;
        const foundUser = await User.findById(userId); 
        if (!foundUser) {
            return res.status(404).send('User not found');
        }
        res.json(foundUser);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

// starts a function named updateUserProfile 
export const updateUserProfile = async (req: Request, res: Response) => {
// start of a try block that attepmts to add provided info to a profile matching a specific ID, if it cannot find that ID it throws an error
    try {
        const userId = req.params.id;
        const updatedUser = await User.findByIdandUpdate(userId,req.body, {new:true});
        if(!updatedUser) {
            return res.status(404).send('User not Found');
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(400).send('Error updating user');
    }
};

// starts a function named deleteUser
export const deleteUser = async (req: Request, res: Response) => {
// start of a try block that attempts to delete a user with a certain ID or else it throws an error if it is unable to find said user
    try {
        const userId = req.params.id;
        const deletedUser = await User.findByIdAndDelete(userId);
        if(!deletedUser) {
            return res.status(404).send('User not found');
        }
        res.send('User deleted sucessfully');
    } catch (error) {
        res.status(500).send('Server error');
    }
};

// starts a function named getAllUsers
export const getAllUsers = async (res: Response) => {
// start of a try block that attempts to get a list of all users on the database    
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

