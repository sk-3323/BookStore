import bookModel from "../models/book.js";
import { z } from "zod";

const bookSchema = z.object({
  title: z.string().min(5).max(50),
  categories: z.string().min(3).max(50),
  description: z.string().min(10).max(1000),
  price: z.number().min(0).max(1000),
  author: z.string().min(5).max(50),
  year: z.number().min(1900).max(2100),
});

export const getBook = async (req, res) => {
  try {
    const book = await bookModel.find();

    res.status(200).json(book);
  } catch (error) {
    console.log("Error : " + error);
    res.status(500).json(error);
  }
};

export const getFreeBook = async (req, res) => {
  try {
    const book = await bookModel.find({ categories: "free" });

    res.status(200).json(book);
  } catch (error) {
    console.log("Error : " + error);
    res.status(500).json(error);
  }
};

export const getBookById = async (req, res) => {
  try {
    const bookid = req.params.id;
    const book = await bookModel.findById(bookid);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json(book);
  } catch (error) {
    console.log("Error : " + error);
    res.status(500).json(error);
  }
};

export const createBook = async (req, res) => {
  try {
    const validatedBook = bookSchema.parse(req.body);
    const newBook = bookModel.create(validatedBook);
    if (!newBook) return res.status(400).json({ message: "Invalid book data" });
    res.status(201).json({ message: "Book created successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: "Validation Error",
        errors: error.errors,
      });
    }
    console.error(error);
    res.status(500).json(error);
  }
};

export const updateBook = async (req, res) => {
  try {
    const bookid = req.params.id;
    const updatedBook = await bookModel.findByIdAndUpdate(bookid, req.body, {
      new: true,
    });
    if (!updatedBook)
      return res.status(404).json({ message: "Book not found" });
    res.status(200).json({ message: "Book updated successfully.." });
  } catch (error) {
    console.log("Error : " + error);
    res.status(500).json(error);
  }
};

export const deleteBook = async (req, res) => {
  try {
    const bookid = req.params.id;
    const book = await bookModel.findByIdAndDelete(bookid);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.status(200).json({ message: "Book Deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};
