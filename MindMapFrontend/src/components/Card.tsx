import { useEffect, useRef } from "react";
import { ShareIcon } from "../assets/svg/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube" | "general";
}

export function Card({ title, link, type }: CardProps) {
  const twitterEmbedRef = useRef<HTMLQuoteElement | null>(null);
  const scriptAdded = useRef(false);  // Track if script is already added

  useEffect(() => {
    let script: HTMLScriptElement | null = null;

    if (type === "twitter" && !scriptAdded.current) {
      script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        // Twitter script loaded, initialize the widget
        if (twitterEmbedRef.current) {
          (window as any).twttr.widgets.load(twitterEmbedRef.current);
        }
      };

      scriptAdded.current = true;

      // Cleanup the script only when the component unmounts or `type` changes
      return () => {
        if (script && document.body.contains(script)) {
          document.body.removeChild(script);
        }
        scriptAdded.current = false;
      };
    }

  }, [type]); // Dependency array makes sure the effect runs on `type` change



  return <div>
    <div className="p-2 overflow-hidden  rounded-md border-gray-200 bg-gray-950 text-white border min-h-48 w-72">
      <div className="flex justify-between">
        <div className="flex items-center text-md">
          <div className="text-gray-500 pr-2">
            <ShareIcon />
          </div>
          {title}
        </div>
        <div className="flex items-center">
          <div className="pr-2 text-gray-500">
            <a href={link} target="_blank">
              <ShareIcon />
            </a>
          </div>
          <div className="text-gray-500">
            <ShareIcon />
          </div>
        </div>
      </div>

      <div className="pt-4">
        {type === "youtube" && <iframe className="w-full" src={`https://www.youtube.com/embed/${link}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
        {type === "twitter" && (
          <blockquote
            className="twitter-tweet"
            ref={twitterEmbedRef}
          >
            <a href={`https://twitter.com/${link}`}></a>
          </blockquote>
        )}
        {type === "general" && <div>
          {link}
        </div>}
      </div>

      
    </div>
  </div>
}
