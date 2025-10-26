import {
    createUserService,
    deleteUserService,
    getAllUsersService,
    getUserByIdService,
    updateUserService
} from "../models/userModel.js";

// Standardised response function
const handleResponse = (res, status, message, data = null) => {
    return res.status(status).json({
        status,
        message,
        data
    })
}

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await getAllUsersService();
        handleResponse(res, 200,"Users retrieved successfully!", users);
    } catch (error) {
        next(error);
    }
}

export const getUserById = async (req, res, next) => {
    try {
        const singleUser = await getUserByIdService(req.params.id);
        if(!singleUser){
            handleResponse(res, 404, "User not found");
        }
        handleResponse(res, 200,"User found!", singleUser);
    } catch (error) {
        next(error);
    }
}

export const createUser = async (req, res, next) => {
    const { name, email } = req.body;
    if (!name || !email) {
        handleResponse(res, 400, "Name or email is required");
    }
    try {
        const newUser = await createUserService(name, email);
        handleResponse(res, 200,"New user created successfully!", newUser);
    } catch (error) {
        next(error);
    }
}

export const updateUser = async (req, res, next) => {
    const { name, email } = req.body;
    if (!name || !email || !req.params.id) {
        handleResponse(res, 400, "Name, email or id is required");
    }
    try {
        const updatedUser = await updateUserService(name, email, req.params.id);
        if(!updatedUser){
            handleResponse(res, 404, "User not found");
        }
        handleResponse(res, 200,"User found!", updatedUser);
    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const dltUser = await deleteUserService(req.params.id);
        if(!dltUser){
            handleResponse(res, 404, "User not found");
        }
        handleResponse(res, 200,"User found!", dltUser);
    } catch (error) {
        next(error);
    }
}