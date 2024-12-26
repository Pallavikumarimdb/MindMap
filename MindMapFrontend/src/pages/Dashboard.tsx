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

export function  Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {refresh} = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen])

  const ContentType = {
    NoteBook:"NoteBook",
    Youtube:"Youtube",
    Twitter:"Twitter",
  }

  
  return <div>
    <Sidebar ContentType={ContentType} />
    <div className="p-4 ml-72 min-h-screen bg-gray-500">
      <CreateContentModal open={modalOpen} onClose={() => {
        setModalOpen(false);
      }} />

      <div className="flex justify-between mt-4" >
        
        <div className="flex ">
        <Search/>
        </div>
      
      <div className="flex  gap-4">
        <Button onClick={() => {
          setModalOpen(true)
        }} variant="primary" text="Add content" startIcon={<PlusIcon size="lg"/>}></Button>
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
        }} variant="secondary" text="Share brain" startIcon={<ShareIcon size="lg"/>}></Button>
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
