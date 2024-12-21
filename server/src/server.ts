import express from "express";
import Jwt from "jsonwebtoken";
import cors from "cors";
import { JWT_SECRET } from "./config";
import { UserModel, ContentModel, LinkModel } from "./db/db";
import {authMiddleware} from "./middleware/middleware"

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

app.post("/api/v1/content", authMiddleware, async (req, res)=>{
    const link=req.body.link;
    const type=req.body.type;

    await ContentModel.create({
        link,
        type,
        title:req.body.title,
        //@ts-ignore
        userId:req.userId,
        tags:[]
    })

    res.json({
        message:"Content uploaded successfully"
    })
})


app.get("/api/v1/content", authMiddleware, async (req, res)=>{
    //@ts-ignore
    const userId=req.userId;

    const content=await ContentModel.find({
        userId:userId
    }).populate("userId", "username")
    res.json({
        content
    })

})


app.listen(3000);