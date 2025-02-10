'use client'
import { useContent } from '@/hooks/useContent';
import { Card } from '@/components/Card';

export default function GeneralTag() {
    const { contents, deleteContent } = useContent();

    if (!contents) {
        return <div> No Links Available...</div>;
    }
  return (
            <div className='mx-10  ml-16  py-10'>
                <div className="mt-16 ">
                    <div className="flex gap-8 flex-col-1 ">
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
