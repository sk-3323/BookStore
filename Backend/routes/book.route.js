import express from "express";
import {
  createBook,
  deleteBook,
  getBook,
  getBookById,
  getFreeBook,
  updateBook,
} from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);

router.get("/getfreebook", getFreeBook);

router.get("/:id", getBookById);

router.put("/:id", updateBook);

router.delete("/:id", deleteBook);

router.post("/addbook", createBook);

export default router;
