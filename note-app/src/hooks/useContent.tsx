'use client'
import axios from "axios";
import { useEffect, useState } from "react";

export function useContent() {
  const [contents, setContents] = useState([]);

  function refresh() {
    console.log("Backend URL mm:", process.env.BACKEND_URL);

    try {
      axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setContents(response.data.content);
      });
      
    } catch (error) {
      console.error("Error deleting content:", error);
    }
  }

  const deleteContent = async (contentId: string) => {
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        data: { contentId }, // Pass contentId in the request body
      });
  
      console.log(response.data.message); // Log success message
      refresh(); // Refresh the content list
    } catch (error) {
      console.error("Error deleting content:", error);
    }
  };
  

  useEffect(() => {
    refresh();
    const interval = setInterval(() => {
      refresh();
    }, 10 * 1000); // Refresh content every 10 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { contents, refresh, deleteContent };
}
