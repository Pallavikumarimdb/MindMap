import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import 'dotenv/config'
import { Link, useNavigate } from "react-router-dom";
import img1 from "../assets/img3.png"

export function Signup() {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signup() {
        const username = usernameRef.current?.value;
        console.log(usernameRef.current)
        const password = passwordRef.current?.value;
        await axios.post(process.env.BACKEND_URL + "/api/v1/signup", {
            username,
            password
        })
        navigate("/signin")
        alert("You have signed up!")
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-between px-[15%] items-center">
        <div className=" text-center rounded-xl border min-w-48 p-8">
        <h1 className="text-2xl mb-10 font-bold text-gray-700">Sign Up</h1>
            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={passwordRef} placeholder="Password" />
            <div className=" justify-center pt-6">
                <Button onClick={signup} loading={false} variant="primary" text="Sign Up" fullWidth={true} />
                <Link to="/signin/" className="">
                    <div className="mt-6"><a className="underline underline-offset-1 mt-10 text-blue-900" href="/signup">Sign In</a></div>
                    </Link>
            </div>
        </div>
        <div>
            <img src={img1} alt="" />
        </div>
    </div>
}