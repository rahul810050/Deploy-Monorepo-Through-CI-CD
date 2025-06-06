import express from "express";

const app = express();


app.use(express.json());


function startServer() {
  try{
		app.listen(3001, () => {
			console.log("Server is running on port 3000");
		});
	} catch (error) {
		console.error(error);
	}
}

startServer();
