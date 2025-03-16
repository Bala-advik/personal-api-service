import { Router } from "express";
import {
  createQnA,
  deleteQnA,
  getOneQnA,
  getQnA,
  updateQnA,
} from "../controllers/qna.controller.js";
import errorMiddleware from "../middleware/error.middleware.js";
import authMiddleware from "../middleware/auth.middleware.js";

const qnaRouter = Router();

// Path api/v1/auth/qna (GET)
qnaRouter.get("/", authMiddleware, errorMiddleware, getQnA);

// Path api/v1/auth/qna/:id (GET)
qnaRouter.get("/:id", authMiddleware, errorMiddleware, getOneQnA);

// Path api/v1/auth/qna (POST)
qnaRouter.post("/", authMiddleware, errorMiddleware, createQnA);

// Path api/v1/auth/qna/:id (PUT)
qnaRouter.put("/:id", authMiddleware, errorMiddleware, updateQnA);

// Path api/v1/auth/qna/:id (DELETE)
qnaRouter.delete("/:id", authMiddleware, errorMiddleware, deleteQnA);

export default qnaRouter;
