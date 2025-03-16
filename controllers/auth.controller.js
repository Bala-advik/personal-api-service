import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_EXPIRY, JWT_SECRET } from "../config/env.js";

export const signUp = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ error: "Username and Email and Password are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("User Already Exists!");
      error.statusCode = 409;
      throw error;
    }

    const user = new User({ username, email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRY,
    });

    await session.commitTransaction();
    session.endSession();

    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      data: {
        token,
        user,
      },
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      const error = new Error("User not found!");
      error.statusCode = 404;
      throw error;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      const error = new Error("Password is not valid");
      error.statusCode = 401;
      throw error;
    }

    // TODO Update JWT
    // const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
    //   expiresIn: JWT_EXPIRY,
    // });

    console.info("An User Logged in Successfully");

    res.status(200).json({
      success: true,
      message: "Logged in Successfully",
      data: {
        user: { userName: user.username },
      },
    });
  } catch (error) {
    next(error);
  }
};

export const signOut = (req, res, next) => {
  console.info("Logged out successfully");
  res.json({ message: "Logout successful" });
};
