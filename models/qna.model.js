import mongoose from "mongoose";

const QnASchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
    required: true,
  },
});

const QnA = mongoose.model("AllQna", QnASchema);

export default QnA;
