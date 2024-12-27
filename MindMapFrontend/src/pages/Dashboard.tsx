import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom";
import { Button } from "../components/Button"
import Search from "../components/Search"
import { CreateContentModal } from "../components/CreateContentModal"
import { PlusIcon } from "../assets/svg/PlusIcon"
import { ShareIcon } from "../assets/svg/ShareIcon"
import { Sidebar } from "../components/Sidebar"
import { useContent } from "../hooks/useContent"
import { BACKEND_URL } from "../config"
import axios from "axios"

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { refresh } = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen])

  const ContentType = {
    NoteBook: "NoteBook",
    Youtube: "Youtube",
    Twitter: "Twitter",
  }


  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
};

  return <div>
    <Sidebar ContentType={ContentType} isOpen={isOpen} setIsOpen={setIsOpen} />
    <div className={`p-4 min-h-screen bg-gray-500 ${isOpen ? 'ml-72' : 'ml-0'}`}>
      {!isOpen &&
        <div>
          <button onClick={toggleSidebar} className="w-10 ml-4 mt-3 item-center">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M15 6L9 12L15 18" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </g>
            </svg>
          </button>
        </div>}
      <CreateContentModal open={modalOpen} onClose={() => {
        setModalOpen(false);
      }} />

      <div className="flex justify-between mt-4" >

        <div className="flex ">
          <Search />
        </div>

        <div className="flex  gap-4">
          <Button onClick={() => {
            setModalOpen(true)
          }} variant="primary" text="Add content" startIcon={<PlusIcon size="lg" />}></Button>
          <Button onClick={async () => {
            const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
              share: true
            }, {
              headers: {
                "Authorization": localStorage.getItem("token")
              }
            });
            const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
            alert(shareUrl);
          }} variant="secondary" text="Share brain" startIcon={<ShareIcon size="lg" />}></Button>
        </div>
      </div>

      <Outlet />

      {/* <div className="mt-16 ml-10">
      <div className="flex gap-4 flex-wrap">
          { contents
        .filter(({ type }) => type ==="youtube") // Filter for YouTube types
        .map(({type, link, title}) => 
          <Card 
            type={type}
            link={link}
            title={title}
        />
        )}
      </div>
      </div> */}
    </div>
  </div>
}
