import { JWT_SECRET, Mongo_DB } from "../config";
import mongoose, {model, Schema} from "mongoose";
mongoose.connect(Mongo_DB);


const UserSchema=new Schema({
    username: {type:String, unique:true},
    password: String
})

const ContentSchema=new Schema({
    title:String,
    link: String,
    tags: [{type:mongoose.Types.ObjectId, ref:'Tag'}],
    type: String,
    userId:{type:mongoose.Types.ObjectId, ref:'User', required:true}
})

const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true },
})


const NoteSchema=new mongoose.Schema({
    userId:{type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    content: {type: Object, required: true},
    name: { type: String, required: true, trim: true },
    createdAt:{type: Date, default: Date.now},
})



export const Note = mongoose.model("Note", NoteSchema);
export const LinkModel = model("Links", LinkSchema);
export const UserModel=model("User", UserSchema);
export const ContentModel=model("Content", ContentSchema);