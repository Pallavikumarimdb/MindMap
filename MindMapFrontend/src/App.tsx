import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard"
import YouTubeTag from "./pages/YouTubeTag"
import NoteBook from "./pages/NoteBook"
import TwitterTag from "./pages/TwitterTag"
import DashboardHome from "./pages/DashboardHome"
import NotesPage from "./pages/NotesPage"
import Home from "./Landing/Home"

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} >
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
