import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//Parsing data  so we can access req.body object
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import mongoDbConnection from "./DB/mongoDB.js";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js"; 
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);



app.listen(PORT, () => {
	mongoDbConnection()
	console.log("Express Server is running on PORT", PORT)
});



app.use((err, req, res, next) => {
	res.send(err.message)
})