import { useContent } from "../hooks/useContent"
import { Card } from "../components/Card"
// import MainEditPage from "./Editor";
import MyEditor from "./Editor";

export default function NoteBook() {

      const {contents} = useContent();

    return (
        <div>
            <div className=" mt-6">
                <div className="flex gap-4 flex-wrap">
                    {/* {contents
                        .filter(({ type }) => type === "general") // Filter for YouTube types
                        .map(({ type, link, title }) =>
                            <Card
                                type={type}
                                link={link}
                                title={title}
                            />
                        )} */}
                        <div className="mt-6 min-w-full ">
                        {/* <MainEditPage/> */}
                        <MyEditor/>
                        </div>
                </div>
            </div>
        </div>
    )
}
