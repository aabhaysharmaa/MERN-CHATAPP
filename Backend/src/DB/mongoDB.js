import mongoose from "mongoose";
const mongoDbConnection = async () => {
	try {
		const con = await mongoose.connect(process.env.MONGODB_URL);
		console.log("MONGODB is connected : ", con.connection.host)
	} catch (error) {
		console.log("MONGODB Connection : ", error.message);
		throw new Error(error.message);
	}
}


export default mongoDbConnection;