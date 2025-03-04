import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetUserPublishedArticleByUser, GetUserUnpublishedArticleByUser } from "../api/articleApi.jsx";
import ArticleItem from "../components/table/ArticleItem.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";

const MyArticles = () => {
    const navigate = useNavigate();
    const [publishedArticles, setPublishedArticles] = useState([]);
    const [unpublishedArticles, setUnpublishedArticles] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const published = await GetUserPublishedArticleByUser();
                const unpublished = await GetUserUnpublishedArticleByUser();
                setPublishedArticles(published);
                setUnpublishedArticles(unpublished);
            } catch (error) {
               console.log(error)
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);



    if (loading) return <div>Loading...</div>;


    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold mb-4">My Articles</h1>

            {/* Published Articles */}
            <div className="w-full bg-white p-10 rounded-xl">
                <div className="flex flex-row justify-between items-center w-full p-4 bg-slate-50 rounded-xl">
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
                        {publishedArticles != null ? publishedArticles.map(article => (
                            <ArticleItem
                                key={article.id}
                                src="/Default_pfp.svg"
                                articleDate={article.created_at}
                                articleTitle={article.title}
                                detailClick={()=>{navigate("/learn/articles/" + article.id)}}
                            />
                        )) : <td className="col-span-4 text-center py-4" colSpan={4}>Data tidak ditemukan</td>}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Unpublished Articles */}
            <div className="w-full bg-white p-10 rounded-xl">
                <div className="flex flex-row justify-between items-center w-full p-4 bg-slate-50 rounded-xl">
                    <h2 className="text-lg font-bold">UNPUBLISHED ARTICLES</h2>
                    <div
                        onClick={() => navigate("add")}
                        className="flex flex-row gap-3 items-center text-white hover:cursor-pointer bg-slate-800 p-3 rounded-xl">
                        <FontAwesomeIcon icon={faFeatherAlt} />
                        <span className="font-bold text-sm text-white">Write an article</span>
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
                        {unpublishedArticles != null ? unpublishedArticles.map(article => (
                            <ArticleItem
                                key={article.id}
                                src="/Default_pfp.svg"
                                user={article.author}
                                articleDate={article.created_at}
                                articleTitle={article.title}
                                detailClick={()=>{navigate("/learn/articles/" + article.id)}}
                                editClick={0}
                                deleteClick={0}
                                // isEditable={true}
                                // isDeletable={true}
                            />
                        )) : <td className="col-span-4 text-center py-4" colSpan={4}>Data tidak ditemukan</td>}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default MyArticles;
