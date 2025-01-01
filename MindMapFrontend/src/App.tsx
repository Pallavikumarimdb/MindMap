import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard"
import YouTubeTag from "./pages/YouTubeTag"
import NoteBook from "./pages/NoteBook"
import TwitterTag from "./pages/TwitterTag"
import DashboardHome from "./pages/DashboardHome"
import NotesPage from "./pages/NotesPage"
import Home from "./Landing/Home"
import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        // Verify token with the backend
        const response = await axios.get("/api/auth/verify-token", {
          headers: { Authorization: token },
        });

        if (response.status === 200) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Token verification failed:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, []);

  if (loading) return <div>Loading...</div>;


  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin onSignIn={() => setIsAuthenticated(true)} />} />
      <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/signin" />} >
      <Route index element={<DashboardHome />} />
      <Route path="notebook" element={<NoteBook />} />
      <Route path="youtubetag" element={<YouTubeTag />} />
      <Route path="twittertag" element={<TwitterTag />} />
      <Route path="notepage" element={<NotesPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App
