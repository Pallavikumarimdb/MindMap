import { useContent } from '../hooks/useContent';
import { Card } from '../components/Card';

export default function GeneralTag() {
    const { contents, deleteContent } = useContent();
  return (
            <div>
                <div className="mt-16 ml-10">
                    <div className="flex gap-4 flex-wrap">
                        {contents
                            .filter(({ type }) => type === "general") 
                            .map(({type, link, title, _id  }) =>
                                <Card
                            key={_id}
                            type={type}
                            link={link}
                            title={title}
                            contentId={_id}
                            onDelete={deleteContent}
                                />
                            )}
                    </div>
                </div>
            </div>
  )
}
