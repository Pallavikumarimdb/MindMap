import express from "express";
import Jwt from "jsonwebtoken";
import cors from "cors";
import { JWT_SECRET } from "./config";
import { UserModel, ContentModel, LinkModel } from "./db/db";
import {authMiddleware} from "./middleware/middleware"
import { random } from "./utils";
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

app.delete("/api/v1/content", authMiddleware, async(req, res)=>{
    const contentId=req.body.contentId;

    await ContentModel.deleteMany({
        contentId,
        //@ts-ignore
        userId:req.userId
    })

    res.json({
        message: "Content Deleted"
    })
})


// TO DO: Implement delete account/user's all data


app.post("/api/v1/brain/share", authMiddleware, async(req, res)=>{
    const share=req.body.share;
    
    if(share){
        const existingLink=await LinkModel.findOne({
            //@ts-ignore
            userId:req.userId
        })

        if(existingLink){
            res.json({
                hash: existingLink.hash
            })
            return;
        }

        const hash=random(10);

        await LinkModel.create({
            //@ts-ignore
            userId:req.userId,
            hash:hash
        })

        res.json({
            hash
        })
    }else{
        await LinkModel.deleteOne({
            //@ts-ignore
            userId:req.userId,
        })
        res.json({
            message:"Removed link"
        })
    }
})


app.get("/api/v1/brain/:shareLink", async(req, res)=>{
    const hash=req.params.shareLink;

    const link=await LinkModel.findOne({
        hash
    });

    if(!link){
        res.status(411).json({
            message:"Sorry incorrect input"
        })
        return
    }

    // userId
    const content=await ContentModel.find({
        userId: link.userId
    })

    const user=await UserModel.findOne({
        _id:link.userId
    })

    if (!user) {
        res.status(411).json({
            message: "user not found, error should ideally not happen"
        })
        return;
    }

    res.json({
        username: user.username,
        content: content
    })

})





app.listen(3000);