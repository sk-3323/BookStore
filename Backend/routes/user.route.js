import express from "express";
import {
  signup,
  login,
  contactUs,
  loggedInUser,
  contactFromUser,
} from "../controller/user.controller.js";

const router = express.Router();

router.post("/contact", contactUs);

router.post("/signup", signup);

router.post("/login", login);

router.get("/totalusers", loggedInUser);

router.get("/contacts", contactFromUser);

export default router;
