import { Router } from "express";
import { getUserById, getUsers } from "../controllers/user.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import errorMiddleware from "../middleware/error.middleware.js";

const userRouter = Router();

// Routes

userRouter.get("/", authMiddleware, errorMiddleware, getUsers);

userRouter.get("/:id", getUserById);

// userRouter.post("/", (req, res) => res.send({ title: "Create users" }));

// userRouter.put("/:id", (req, res) => res.send({ title: "Update a user" }));

// userRouter.delete("/:id", (req, res) => res.send({ title: "Delete a user" }));

export default userRouter;
