import express from "express";
import { router } from "./routes";

const app = express();


app.use(express.json());
app.use("/api/v1", router);


function startServer() {
  try{
		app.listen(3000, () => {
			console.log("Server is running on port 3000");
		});
	} catch (error) {
		console.error(error);
	}
}

startServer();
