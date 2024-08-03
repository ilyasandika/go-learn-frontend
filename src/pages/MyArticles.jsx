import LatestCommentItem from "../components/table/LatestCommentItem.jsx";
import ArticleItem from "../components/table/ArticleItem.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faFeatherAlt, faPlus} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

const MyArticles = () => {
    const navigate = useNavigate();
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold mb-4">My Article</h1>
            <div className="w-full bg-white p-10 rounded-xl">
                <div className="flex flex-row justify-between items-center w-full p-4 bg-slate-50 rounded-xl ">
                    <h2 className="text-lg font-bold">PUBLISHED ARTICLES</h2>
                </div>
                <div className="p-4">
                    <table className="table-auto border-collapse w-full">
                        <thead>
                        <tr>
                            <th className="border-b border-slate-400 py-4 text-start">Article Title</th>
                            <th className="border-b border-slate-400 py-4 text-start">Date Post</th>
                            <th className="border-b border-slate-400 py-4 text-start">Posted By</th>
                            <th className="border-b border-slate-400 py-4 text-start">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <ArticleItem src="/Default_pfp.svg" user="Ilyas Andika"
                                     articleDate="14 Juli 2024"
                                     articleTitle="Golang Backend Developer"/>
                        <ArticleItem src="/Default_pfp.svg" user="Ilyas Andika"
                                     articleDate="14 Juli 2024"
                                     articleTitle="Golang Backend Developer"/>
                        <ArticleItem src="/Default_pfp.svg" user="Ilyas Andika"
                                     articleDate="14 Juli 2024"
                                     articleTitle="Golang Backend Developer"/>
                        <ArticleItem src="/Default_pfp.svg" user="Ilyas Andika"
                                     articleDate="14 Juli 2024"
                                     articleTitle="Golang Backend Developer"/>
                        <ArticleItem src="/Default_pfp.svg" user="Ilyas Andika"
                                     articleDate="14 Juli 2024"
                                     articleTitle="Golang Backend Developer"/>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="w-full bg-white p-10 rounded-xl">
                <div className="flex flex-row justify-between items-center w-full p-4 bg-slate-50 rounded-xl ">
                    <h2 className="text-lg font-bold">UNPUBLISHED ARTICLES</h2>
                    <div
                        onClick={()=>navigate("add")}
                        className="flex flex-row gap-3 items-center text-white hover:cursor-pointer bg-slate-800 p-3 rounded-xl">
                        <FontAwesomeIcon icon={faFeatherAlt}/>
                        <span  className="font-bold text-sm text-white">Write an article</span>
                    </div>
                </div>

                <div className="p-4">
                    <table className="table-auto border-collapse w-full p-2">
                        <thead>
                        <tr>
                            <th className="border-b border-slate-400 py-4 text-start">Article Title</th>
                            <th className="border-b border-slate-400 py-4 text-start">Date Post</th>
                            <th className="border-b border-slate-400 py-4 text-start">Posted By</th>
                            <th className="border-b border-slate-400 py-4 text-start">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <ArticleItem src="/Default_pfp.svg" user="Ilyas Andika"
                                     articleDate="14 Juli 2024"
                                     articleTitle="Golang Backend Developer" isEditable={true}/>
                        <ArticleItem src="/Default_pfp.svg" user="Ilyas Andika"
                                     articleDate="14 Juli 2024"
                                     articleTitle="Golang Backend Developer" isEditable={true}/>
                        <ArticleItem src="/Default_pfp.svg" user="Ilyas Andika"
                                     articleDate="14 Juli 2024"
                                     articleTitle="Golang Backend Developer" isEditable={true}/>
                        <ArticleItem src="/Default_pfp.svg" user="Ilyas Andika"
                                     articleDate="14 Juli 2024"
                                     articleTitle="Golang Backend Developer" isEditable={true}/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MyArticles