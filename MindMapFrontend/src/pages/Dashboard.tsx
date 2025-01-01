import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom";
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
  const { refresh } = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen])

  useEffect(() => {
    refresh();
  }, [shareOpen])


  console.log(shareOpen);

  const ContentType = {
    NoteBook: "Text Editor",
    SortNote: "Notes",
    Youtube: "Youtube",
    Twitter: "Twitter",
    Dashboard: "Dashboard"
  }


  const [isOpen, setIsOpen] = useState(window.innerWidth > 1100);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
// };

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
    <div className={`p-4 min-h-screen bg-gray-700 transition-all ease-in-out duration-700 ${isOpen ? 'ml-56' : 'ml-10'}`}>
      <CreateContentModal open={modalOpen} onClose={() => {
        setModalOpen(false);
      }} />

      <ShareNote
      open1={shareOpen} onClose1={() => {
        setshareOpen(false);
      }}
      />

      <div className="flex justify-between mt-4" >
        <div className="flex ">
          <Search />
        </div>

        <div className="flex  gap-4">
          <Button className="h-10" onClick={() => {
            setModalOpen(true)
          }} variant="primary" text="Add Note" startIcon={<PlusIcon size="lg" />}></Button>
          <Button onClick={ () => {
            setshareOpen(true)
          }} variant="secondary" text="Share Note" startIcon={<ShareIcon size="lg" />}></Button>
        </div>
      </div>

      <Outlet/>
    </div>
  </div>
}
