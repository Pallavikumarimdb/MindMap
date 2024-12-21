import express from "express";
import Jwt from "jsonwebtoken";
import cors from "cors";
import { JWT_SECRET } from "./config";

const app=express();
app.use(express.json());
app.use(cors());

app.post("/api/v1/signup", async (req, res)=>{
    const username=req.body.username;
    const password=req.body.password;

    try {
        await UserModel.create({
            username:username,
            password:password
        })

        res.status(200).json({
                message:"User created successfully"
            })
            
        
    } catch (e) {
        res.status(411).json({
            message:"user already exist"
        })
    }
})

app.post("/api/v1/signin", async(req, res)=>{
    const username=req.body.username;
    const password=req.body.password;

    const UserExist=await UserModel.findOne({
        username,
        password
    })

    if(UserExist){
        const token=Jwt.sign({
            id: UserExist._id, 
        },JWT_SECRET);

        res.json({
            token:token
        })

    }else{
        res.status(404).json({
            message:"User not found"
        })
    }
})