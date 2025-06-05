import { WebSocketServer } from "ws";
// import prisma from "@repo/db/client";
// import jwt from "jsonwebtoken";

const wss = new WebSocketServer({port: 8080});

wss.on("connection", async(socket) => {
	console.log("Client connected");
	socket.send("welcome to WebSocket server")
	// socket.on("message", async(message)=> {
		// const parsedData = JSON.parse(message.toString());
		// try{
			// if(parsedData.type === "signup"){
			// 	const existingUser = await prisma.user.findUnique({
			// 		where: {
			// 			username: parsedData.payload.username
			// 		}
			// 	})
			// 	if(existingUser) {
			// 		socket.send(JSON.stringify({
			// 			type: "error",
			// 			message: "User already exists"
			// 		}))
			// 		return;
			// 	}
			// 	const user = await prisma.user.create({
			// 		data: {
			// 			username: parsedData.payload.username,
			// 			password: parsedData.payload.password
			// 		}
			// 	})
			// 	socket.send(JSON.stringify({
			// 		type: "success",
			// 		message: "User created successfully",
			// 		user
			// 	}))
			// } else if(parsedData.type === "signin"){
			// 	const user = await prisma.user.findFirst({
			// 		where: {
			// 			username: parsedData.payload.username,
			// 			password: parsedData.payload.password
			// 		}
			// 	})
			// 	const token = jwt.sign({id: user?.id}, "jwt-secret")
			// 	if(!user) {
			// 		socket.send(JSON.stringify({
			// 			type: "error",
			// 			message: "Invalid username or password"
			// 		}))
			// 	}
			// 	socket.send(JSON.stringify({
			// 		type: "success",
			// 		message: "Login successful",
			// 		token
			// 	}))
			// }
	// 	}catch(e){
	// 		console.log(e)
	// 		socket.send(JSON.stringify({
	// 			type: "error",
	// 			message: "Internal server error"
	// 		}))
	// 	}
	// })
})

