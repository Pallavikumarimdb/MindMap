import { useContent } from "../hooks/useContent"
import { Card } from "../components/Card"

export default function YouTubeTag() {
    const { contents, deleteContent } = useContent();
    //@ts-ignore

    if (!contents) {
        return <div> No YouTube Links Available...</div>;
    }
    
    return (
        <div>
            <div className="mt-16  ml-16  py-10">
                <div className="flex gap-4 flex-wrap">
                    {contents
                        .filter(({ type }) => type === "youtube") 
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
