import { Router } from "express";
import {
  signUp,
  signIn,
  signOut,
  validateToken,
} from "../controllers/auth.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const authRouter = Router();

// Path api/v1/auth/sign-up (POST)
authRouter.post("/sign-up", signUp);

// Path api/v1/auth/sign-in (POST)
authRouter.post("/sign-in", signIn);

// Path api/v1/auth/sign-out (POST)
authRouter.post("/sign-out", signOut);

// Path api/v1/auth/sign-out (POST)
authRouter.post("/validate-token", authMiddleware, validateToken);

export default authRouter;
