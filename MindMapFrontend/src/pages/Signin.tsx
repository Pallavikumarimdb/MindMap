import { useRef, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import.meta.env.BACKEND_URL;

interface SignInProps {
  onSignIn: () => void;
}

export const Signin: React.FC<SignInProps> = ({ onSignIn }) => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    const validateInput = (username: string | undefined, password: string | undefined) => {
      if (!username) {
        return "Username (email) is required.";
      }
      if (!password) {
        return "Password is required.";
      }
      if (password.length < 4) {
        return "Password must be at least 8 characters long.";
      }
      return null;
    };

    const errorMessage = validateInput(username, password);
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    try {
      const response = await axios.post(process.env.BACKEND_URL + "/api/v1/signin", {
        username,
        password,
      });

      const token = response.data.token;
      if (token) {
        localStorage.setItem("token", token);
        onSignIn();
        navigate("/dashboard");
      }
    } catch (error: any) {
        error.response?.data?.message || "Sign-in failed. Please try again.";
        setError("Signin failed. Please try again later.");
    }
  }

  return (
    <div>
      <div className="min-h-screen bg-[#171717] py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
          <div className="relative px-4 py-10 bg-slate-200 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div className="flex justify-center mb-4">
                <h1 className="text-3xl font-bold">Login</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                {error && <div className="text-red-600 text-sm">{error}</div>}
                  <div className="relative">
                    <Input reference={usernameRef} placeholder="Email address" />
                    <label className="absolute font-bold left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <Input reference={passwordRef} placeholder="Password" />
                    <label className="absolute font-bold left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Password
                    </label>
                  </div>
                  <div className="justify-center mx-2 pt-6">
                    <Button onClick={signin} loading={false} variant="primary" text="Sign In" fullWidth={true} />
                    <Link to="/signup" className="mt-6">
                      <div className="underline font-bold mt-4 text-blue-900">Sign Up</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
