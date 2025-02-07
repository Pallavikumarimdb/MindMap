import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom";
import { Button } from "../components/Button"
import Search from "../components/Search"
import { CreateContentModal } from "../components/CreateContentModal"
import { PlusIcon } from "../assets/svg/PlusIcon"
import { ShareIcon } from "../assets/svg/ShareIcon"
import { Sidebar } from "../components/Sidebar"
import { useContent } from "../hooks/useContent"
import ShareNote from "./ShareNote";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [shareOpen, setshareOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(window.innerWidth > 1100);
  const { refresh } = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen])

  useEffect(() => {
    refresh();
  }, [shareOpen])


  const ContentType = {
    NoteBook: "Text Editor",
    SortNote: "Notes",
    Youtube: "Youtube",
    Twitter: "Twitter",
    Dashboard: "Dashboard",
    General: "General"
  }

  useEffect(() => {
    const handleResize = () => {
      // Update state based on screen width
      if (window.innerWidth > 1100) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Call it once to set initial state
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div>
    <Sidebar ContentType={ContentType} isOpen={isOpen} setIsOpen={setIsOpen} />
    <div className={` min-h-screen bg-gray-700 transition-all ease-in-out duration-700 ${isOpen ? 'ml-56' : 'ml-10'}`}>
      <CreateContentModal open={modalOpen} onClose={() => {
        setModalOpen(false);
      }} />

      <ShareNote
        open1={shareOpen} onClose1={() => {
          setshareOpen(false);
        }}
      />

      <div className="bg-gradient-to-r from-teal-200 to-teal-500 justify-center text-md text-gray-700  text-center p-1 pt-0">Leverage the functionality of advanced search with:
        <Link to={"/"}><span className="bg-gradient-to-r from-violet-600 to-indigo-600 font-extrabold text-xl text-transparent bg-clip-text"> @Note Pro</span>🎊</Link>
      </div>

      <div className="sticky top-0 z-50 w-full ml-10 bg-gray-700 supports-[backdrop-filter]:bg-background/60  flex justify-between pt-4" >
        <div className="flex ">
          <Search />
        </div>

        <div className="flex mr-2 mt-1 lg:mr-10 sm:mr-4 gap-4">
          <Button className="h-10" onClick={() => {
            setModalOpen(true)
          }} variant="primary" text="Add Note" startIcon={<PlusIcon size="lg" />}></Button>
          <Button onClick={() => {
            setshareOpen(true)
          }} variant="secondary" text="Share Note" startIcon={<ShareIcon size="lg" />}></Button>
        </div>
      </div>

      <Outlet />
    </div>
  </div>
}
