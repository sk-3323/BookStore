import bcrypt from "bcrypt";
import bcryptjs from "bcryptjs";
import userModel from "../models/user.js";
import contactModel from "../models/contact.js";

export const signup = async (req, res) => {
  try {
    let { email, username, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already exist" });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const createdUser = new userModel({
      email: email,
      username: username,
      password: hashPassword,
    });
    await createdUser.save();
    res.status(200).json({
      message: "user created successfully..",
      user: {
        _id: createdUser._id,
        username: createdUser.username,
        email: createdUser.email,
        password: createdUser.password,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const logedUser = await userModel.findOne({ email });
    const isLogin = await bcrypt.compare(password, logedUser.password);
    if (!logedUser || !isLogin) {
      return res.status(400).json({ message: "Invalid Username and password" });
    } else {
      res.status(200).json({
        message: "Login Successful..",
        user: {
          _id: logedUser._id,
          username: logedUser.username,
          email: logedUser.email,
          password: logedUser.password,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const contactUs = async (req, res) => {
  try {
    let { fname, lname, email, mobile, address, msg } = req.body;

    const contactMsg = new contactModel({
      fname,
      lname,
      email,
      mobile,
      address,
      msg,
    });
    await contactMsg.save();
    res.status(200).json({
      msg: "Your Application Has Been Send Successfully.",
      user: {
        fname: contactMsg.fname,
        lname: contactMsg.lname,
        mobile: contactMsg.mobile,
        address: contactMsg.address,
        msg: contactMsg.msg,
      },
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const loggedInUser = async (req, res) => {
  try {
    const user = await userModel.find({ username: { $ne: "admin" } });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const contactFromUser = async (req, res) => {
  try {
    const contacts = await contactModel.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json(error);
  }
};
