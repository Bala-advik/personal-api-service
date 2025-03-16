import { JWT_SECRET } from "../config/env.js";
import QnA from "../models/qna.model.js";
import jwt from "jsonwebtoken";

const validateQnA = (req) => {
  const errors = [];
  if (!req.body.answer) {
    errors.push("Answer is required");
  }
  if (!req.body.question) {
    errors.push("Question is required");
  }
  if (!req.body.category) {
    errors.push("Category is required");
  }
  if (!req.body.subcategory) {
    errors.push("Sub Category is required");
  }
  return errors;
};

export const getQnA = async (req, res, next) => {
  try {
    const queryString = req.query.category;

    if (queryString) {
      const categoryQnas = await QnA.find({ category: queryString });
      console.info(
        `Category ${queryString} retrived with ${categoryQnas.length} items`
      );
      res.status(200).json(categoryQnas);
    } else {
      res.status(400).json({ message: "Category query parameter is required" });
    }
  } catch (err) {
    next(err);
  }
};

export const getOneQnA = async (req, res, next) => {
  await QnA.find({ _id: req.params.id })
    .then((certainQna) => res.status(201).json(certainQna))
    .catch((err) => next(err));
};

export const createQnA = async (req, res, next) => {
  const errors = validateQnA(req);

  if (errors.length > 0) {
    const error = new Error(errors.join(", "));
    error.status = 400;
    return next(error);
  }

  const newQnA = new QnA(req.body);
  await newQnA
    .save()
    .then((qna) => res.status(201).json(qna))
    .catch((err) => next(err));
};

export const updateQnA = async (req, res, next) => {
  const errors = validateQnA(req);

  if (errors.length > 0) {
    const error = new Error(errors.join(", "));
    error.status = 400;
    return next(error);
  }

  await QnA.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((qna) => res.status(201).json(qna))
    .catch((err) => next(err));
};

export const deleteQnA = async (req, res, next) => {
  await QnA.findByIdAndDelete(req.params.id)
    .then((qna) => res.status(201).json({ message: "User deleted" }))
    .catch((err) => next(err));
};
