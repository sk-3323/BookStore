import express from "express";
import mongoose from "mongoose";
import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";
import cors from "cors";
const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
//connect to mongodb
try {
  mongoose.connect(`mongodb://localhost:27017/bookstore`);
} catch (error) {
  console.log(error);
}

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(3000);
