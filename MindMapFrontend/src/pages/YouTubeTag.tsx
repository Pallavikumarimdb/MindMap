import { useContent } from "../hooks/useContent"
import { Card } from "../components/Card"

export default function YouTubeTag() {
    const {contents} = useContent();

    return (
        <div>
            <div className="mt-16 ml-10">
                <div className="flex gap-4 flex-wrap">
                    {contents
                        .filter(({ type }) => type === "youtube") // Filter for YouTube types
                        .map(({ type, link, title }) =>
                            <Card
                                type={type}
                                link={link}
                                title={title}
                            />
                        )}
                </div>
            </div>
        </div>
    )
}
