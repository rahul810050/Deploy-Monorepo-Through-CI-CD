import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port: 8080});

wss.on("connection", async(socket) => {
	console.log("Client connected");
	socket.send("welcome to WebSocket server")
})

