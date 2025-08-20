import mongoose from "mongoose";
import { generateToken } from "../lib/utils.js"
import USER from "../models/user.model.js";
import bcrypt from "bcryptjs"
export const user = (req, res) => {
	res.send("Controllers")
}

export const signup = async (req, res) => {
	try {
		const { email, fullName, password } = req.body;
		if (!email || !fullName || !password) {
			res.status(400).json({ success: false, message: "All fields are required" })
		}
		if (password.length < 6) return res.status(400).send({ message: "Password Length Must Be MOre than 6" })
		const ifUserAlreadyExists = await USER.findOne({ email });
		if (ifUserAlreadyExists) return res.status(400).json({ success: false, message: "User Already Exists" });

		const salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hash(password, salt)
		const newUser = await USER({
			email,
			fullName,
			password: hashPassword
		})
		if (newUser) {
			 generateToken(newUser._id, res)
			await newUser.save();
			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				email: newUser.email,
				profilePic: newUser.profilePic
			})

		} else {
			console.log("newUser Error ");
			throw new Error
		}

	} catch (error) {
		console.log("SignUp error : ", error.message)
		res.status(500).json({
			message: "Internal Server Error"
		})
	}

}


export const login = (req, res) => {
	res.send("login")
}


export const logout = (req, res) => {
	res.send("logout")
}
