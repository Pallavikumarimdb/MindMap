import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import Search from "../components/Search"
import { Card } from "../components/Card"
import { CreateContentModal } from "../components/CreateContentModal"
import { PlusIcon } from "../assets/svg/PlusIcon"
import { ShareIcon } from "../assets/svg/ShareIcon"
import { Sidebar } from "../components/Sidebar"
import { useContent } from "../hooks/useContent"
import { BACKEND_URL } from "../config"
import axios from "axios"

export function  Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents, refresh} = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen])

  const ContentType1 = {
    General:"General",
    Youtube:"Youtube",
    Twitter:"Twitter",
  }

  const [contText, setcontText] = useState(() => {
    // Fetch from localStorage or default to "General"
    return localStorage.getItem("contText") || "General";
  });

    // Load the saved value from localStorage when the component mounts
    useEffect(() => {
      const savedValue = localStorage.getItem("contText");
      if (savedValue) {
        setcontText(savedValue); // Set the state to the saved value
      }
    }, []);

  useEffect(() => {
    localStorage.setItem("contText", contText);
  }, [contText]);


console.log(contText.toLowerCase());
  
  return <div>
    <Sidebar ContentType1={ContentType1} setcontText={setcontText}/>
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

      <div className="mt-16 ml-10">
      <div className="flex gap-4 flex-wrap">
          { contents
         .filter(({ type }) => type === contText.toLowerCase()) // Filter for YouTube types
        .map(({type, link, title}) => <Card 
            type={type}
            link={link}
            title={title}
        />)}
      </div>
      </div>
    </div>
  </div>
}
