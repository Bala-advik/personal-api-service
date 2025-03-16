import express from "express";
import cors from "cors";
import { PORT } from "./config/env.js";
import connectToDatabase from "./database/mongodb.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import errorMiddleware from "./middleware/error.middleware.js";
import qnaRouter from "./routes/qna.routes.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CONNECT_URL,
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/qna", qnaRouter);

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Hello Super Positive!");
});

app.listen(PORT, async () => {
  console.log(`Server started running successfully`);
  await connectToDatabase();
});
