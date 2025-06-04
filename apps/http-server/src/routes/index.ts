import { Router } from "express";
import { signinSchema, signupSchema } from "../types/type";
import prisma from "@repo/db/client";

export const router: Router = Router();

router.post("/signup", async(req, res)=> {
	const parsedData = signupSchema.safeParse(req.body);
	if(!parsedData.success) {
		res.status(400).json({
			message: "Invalid data"
		});
		return;
	}

	const existingUser = await prisma.user.findUnique({
		where: {
			username: parsedData.data.username
		}
	})
	if(existingUser) {
		res.status(400).json({
			message: "User already exists"
		});
		return;
	}
	try{
		const user = await prisma.user.create({
			data: {
				username: parsedData.data.username,
				password: parsedData.data.password
			}
		})
		res.status(201).json({
			message: "User created successfully",
			user
		})
	} catch (error) {
		res.status(500).json({
			message: "Internal server error"
		})
	}
	
})

router.post("/signin", async(req, res)=> {
	const parsedData = signinSchema.safeParse(req.body);
	if(!parsedData.success) {
		res.status(400).json({
			message: "Invalid data"
		});
		return;
	}
	try{
		const user = await prisma.user.findFirst({
			where: {
				username: parsedData.data.username,
				password: parsedData.data.password
			}
		})
		if(!user) {
			res.status(401).json({
				message: "Invalid credentials"
			});
			return;
		}
		res.status(200).json({
			message: "User signed in successfully",
			user
		})
	} catch (error) {
		res.status(500).json({
			message: "Internal server error"
		})
	}
})