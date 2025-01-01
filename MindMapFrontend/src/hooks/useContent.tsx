import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

export function useContent() {
  const [contents, setContents] = useState([]);

  function refresh() {
    axios
      .get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setContents(response.data.content);
      });
  }

  const deleteContent = async (contentId: string) => {
    try {
      const response = await axios.delete(`${BACKEND_URL}/api/v1/content`, {
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
