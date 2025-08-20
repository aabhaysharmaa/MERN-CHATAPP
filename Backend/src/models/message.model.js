import { Schema, Model } from "mongoose";
const messageSchema = Schema({
	senderId: {
		type: String,
		required: true,
		unique: true
	},
	receiverId: {
		type: String,
		required: true,
		unique: true
	},
	image: {
		type: String,
		required: true,
	}
}, { timestamps: true });

const MESSAGE = Model("MESSAGE", messageSchema);

export default MESSAGE;