import { useContent } from "../hooks/useContent";
import { Card } from "../components/Card";

export default function TwitterTag() {
  const { contents, deleteContent } = useContent();

  if (!contents) {
    return null; // or some loading indicator
}

  return (
    <div>
      <div className="mt-16 ml-10 py-10">
        <div className="flex gap-4 flex-wrap">
          {contents
            .filter(({ type }) => type === "twitter")
            .map(({ type, link, title, _id }) => (
              <Card
                key={_id}
                type={type}
                link={link}
                title={title}
                contentId={_id}
                onDelete={deleteContent} 
              />
            ))}
        </div>
      </div>
    </div>
  );
}
