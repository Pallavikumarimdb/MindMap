'use client'
import { useEffect, useRef } from "react";
// import '@mariusbongarts/previewbox/dist'; 
import { Trash2 } from "lucide-react";


interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube" | "general";
  contentId: string;
  onDelete?: (contentId: string) => void;
}

export function Card({ title, link, type, contentId, onDelete }: CardProps) {
  const twitterEmbedRef = useRef<HTMLQuoteElement | null>(null);
  const scriptAdded = useRef(false);

  useEffect(() => {
    let script: HTMLScriptElement | null = null;

    if (typeof window !== "undefined" && type === "twitter" && !scriptAdded.current) {
      script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (twitterEmbedRef.current && (window as any)?.twttr?.widgets) {
          (window as any).twttr.widgets.load(twitterEmbedRef.current);
        }
      };

      scriptAdded.current = true;

      return () => {
        if (script && document.body.contains(script)) {
          document.body.removeChild(script);
        }
        scriptAdded.current = false;
      };
    }
  }, [type]);


  return <div>
    <div className="bg-gray-900 transition-all  duration-300 hover:-translate-y-1 overflow-hidden  rounded-md border-gray-200  text-white border p-2">
      <div className="">
        {type === "youtube" && <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
        {type === "twitter" && (
          <blockquote
            className="twitter-tweet"
            ref={twitterEmbedRef}
          >
            <a href={`https://twitter.com/${link}`}></a>
          </blockquote>
        )}
        {type === "general" && <div>
          {/* <previewbox-link href={link} className="w-full"></previewbox-link> */}
          </div>}
      </div>

      <div className=" flex justify-between">
        <div className="ml-6 flex items-center text-md">
          <h1 className="font-bold text-xl">{title}</h1>
        </div>

        <button
          //@ts-ignore
          onClick={() => onDelete(contentId)}
          className="mr-2 w-8 text-white py-2 px-1 rounded hover:bg-red-600"
        >
          <Trash2 />
        </button>
      </div>


    </div>
  </div>
}
