import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";
import { JWT_SECRET } from "./config";
import { UserModel, ContentModel, LinkModel, Note } from "./db/db";
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
        const token=jwt.sign({
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

//@ts-ignore
app.get("/api/auth/verify-token", (req, res) => {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).send("Token missing");
    }
  
    try {
      const decoded = jwt.verify(token, JWT_SECRET); 
      res.status(200).send({ message: "Token is valid" });
    } catch (error) {
      res.status(401).send({ message: "Invalid token" });
    }
  });
  
  

app.post("/api/v1/content", authMiddleware, async (req, res)=>{
    const link=req.body.link;
    const type=req.body.type;

    await ContentModel.create({
        link,
        type,
        title:req.body.title,
        // authMiddleware will extract userId and give here
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

//@ts-ignore
app.delete("/api/v1/content", authMiddleware, async (req, res) => {
    const contentId = req.body.contentId;
  
    if (!contentId) {
      return res.status(400).json({ message: "Content ID is required" });
    }
  
    try {
      const result = await ContentModel.deleteOne({
        _id: contentId, 
        //@ts-ignore
        userId: req.userId, 
      });
  
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: "Content not found or not authorized" });
      }
  
      res.json({
        message: "Content deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting content:", error);
      res.status(500).json({ message: "An error occurred while deleting the content" });
    }
  });
  

// TO DO: Implement delete account/user's all data


app.post("/api/v1/brain/share", authMiddleware, async(req, res)=>{
    const share=req.body.share;
    
    if(share){
        const existingLink=await LinkModel.findOne({
            //@ts-ignore
            userId:req.userId
        })

        //TO DO: find race condition here and solve it
        if(existingLink){
            res.json({
                hash: existingLink.hash
            })
            return;
        }

        const hash=random(10);

        await LinkModel.create({
            // authMiddleware will extract userId and give here
            //@ts-ignore
            userId:req.userId,
            hash:hash
        })

        res.json({
            hash
        })
        // if user want to disable the link
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
         // in contentmodel we hava userId to reference
        userId: link.userId
    })

    const user=await UserModel.findOne({
        // in usermodel we hava _id to reference
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


//@ts-ignore
app.post("/api/v1/notes", authMiddleware, async(req, res) => {
    const { name, content } = req.body;
    //@ts-ignore
    const userId = req.userId;

    if (!name || !content) {
        return res.status(400).json({ message: 'Name and content are required.' });
      }

    try {
        const newNote=new Note({
            userId,
            name,
            content,

        })

        await newNote.save();
        res.status(201).json({message: 'Note saved successfully', note: newNote})
        
    } catch (error) {
        res.status(500).json({ message: 'Failed to save note', error });
    }
})


app.get("/api/v1/notes", authMiddleware, async(req, res)=>{
    //@ts-ignore
    const userId=req.userId;

    try {
        const notes=await Note.find({userId});
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({message: 'Failed to retrieve notes', error })
    }
})

//@ts-ignore
app.delete('/api/v1/notes/:id', async (req, res) => {
    const noteId = req.params.id;
    try {
      const deletedNote = await Note.findByIdAndDelete(noteId);
      if (!deletedNote) {
        return res.status(404).send({ message: 'Note not found' });
      }
      res.status(200).send({ message: 'Note deleted successfully' });
    } catch (error) {
      res.status(500).send({ message: 'Internal server error', error });
    }
  });
  

//@ts-ignore
app.put('/api/v1/notes/:id', authMiddleware, async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
  
    try {
      const updatedNote = await Note.findByIdAndUpdate(
        id,
        { content },
        { new: true } // Returns the updated document
      );
  
      if (!updatedNote) {
        return res.status(404).json({ message: 'Note not found' });
      }
  
      res.status(200).json(updatedNote);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  });
  



app.listen(3000);