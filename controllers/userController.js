const userModel = require("../models/userModel");

// login callback
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(404).send("User Not Found");
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

//Register Callback
const registerController = async (req, res) => {
  try {
    const { email } = req.body;
    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: "User already exists with this email"
      });
    }
    
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      newUser,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(400).json({
      success: false,
      error: error.message || "Failed to register user"
    });
  }
};

module.exports = { loginController, registerController };