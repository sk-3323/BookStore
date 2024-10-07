import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 50,
    trim: true,
  },
  categories: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 100,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    max: 1000,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
    min: 1900,
    max: 2100,
  },
});

const bookModel = mongoose.model("book", bookSchema);

export default bookModel;
