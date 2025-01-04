import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
const BACKEND_URL = import.meta.env.BACKEND_URL;
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../assets/img3.png"


interface SignInProps {
    onSignIn: () => void; // Callback to update authentication state
  }

export const Signin: React.FC<SignInProps> = ({ onSignIn }) => {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signin() {
        const username = usernameRef.current?.value;
        console.log(usernameRef.current)
        const password = passwordRef.current?.value;
        try {
            const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
                username,
                password
            })
            const token = response.data.token;
             if (token) {
        localStorage.setItem("token", token); 
        onSignIn();
        navigate("/dashboard"); 
      }
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
    }
    return <div className="h-screen w-screen bg-gray-200 flex justify-between px-[15%] items-center">
        <div className=" text-center rounded-xl border min-w-48 p-8">
            <h1 className="text-2xl mb-10 font-bold text-gray-700">Sign In</h1>
            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={passwordRef} placeholder="Password" />
            <div className=" justify-center pt-6">
                <Button onClick={signin} loading={false} variant="primary" text="Sign In" fullWidth={true} />
                    <Link to="/signup/" className="">
                    <div className="mt-6"><a className="underline underline-offset-1 mt-10 text-blue-900" href="/signup">Sign Up</a></div>
                    </Link>
            </div>
        </div>
        <div>
            <img src={img1} alt="" />
        </div>
    </div>
}