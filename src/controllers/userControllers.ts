// importing user from userModels.ts
import user from '../models/userModel';
// imports Request and Response from express library
import { Request, Response } from 'express';

// starts a function named createUser and uses Request and Response as parameters
export const createUser = async (req: Request, res: Response) => {
// start of a try block that will either add a new user or throw an error if unable to create a new user
    try {
        const newUser = new user(req.body); 
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
        const foundUser = await user.findById(userId); 
        if (!foundUser) {
            return res.status(404).send('User not found');
        }
        res.json(foundUser);
    } catch (error) {
        res.status(500).send('Server error');
    }
};




