import { Router } from "express";
import {
  createQnA,
  deleteQnA,
  getOneQnA,
  getQnA,
  updateQnA,
} from "../controllers/qna.controller.js";
import errorMiddleware from "../middleware/error.middleware.js";

const qnaRouter = Router();

// Path api/v1/auth/qna (GET)
qnaRouter.get("/", errorMiddleware, getQnA);

// Path api/v1/auth/qna/:id (GET)
qnaRouter.get("/:id", errorMiddleware, getOneQnA);

// Path api/v1/auth/qna (POST)
qnaRouter.post("/", errorMiddleware, createQnA);

// Path api/v1/auth/qna/:id (PUT)
qnaRouter.put("/:id", errorMiddleware, updateQnA);

// Path api/v1/auth/qna/:id (DELETE)
qnaRouter.delete("/:id", errorMiddleware, deleteQnA);

export default qnaRouter;
