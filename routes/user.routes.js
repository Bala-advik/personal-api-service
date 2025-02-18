import { Router } from "express";
import { getUserById, getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

// Routes

userRouter.get("/", getUsers);

userRouter.get("/:id", getUserById);

// userRouter.post("/", (req, res) => res.send({ title: "Create users" }));

// userRouter.put("/:id", (req, res) => res.send({ title: "Update a user" }));

// userRouter.delete("/:id", (req, res) => res.send({ title: "Delete a user" }));

export default userRouter;
