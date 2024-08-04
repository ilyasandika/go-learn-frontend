import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    GetUserPublishedArticle,
    GetUserPublishedArticleByUser, GetUserUnpublishedArticle,
    GetUserUnpublishedArticleByUser, PublishArticle, UnpublishArticle
} from "../api/articleApi.jsx";
import ArticleItem from "../components/table/ArticleItem.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt } from "@fortawesome/free-solid-svg-icons";

const UserArticle = () => {
    const navigate = useNavigate();
    const [publishedArticles, setPublishedArticles] = useState([]);
    const [unpublishedArticles, setUnpublishedArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchArticles = async () => {
        try {
            const published = await GetUserPublishedArticle();
            const unpublished = await GetUserUnpublishedArticle();
            setPublishedArticles(published);
            setUnpublishedArticles(unpublished);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    const PublishHandling = async (id) => {
        try {
            await PublishArticle(id)
            await fetchArticles()
        } catch (error) {
            console.log(error)
        }
    }

    const UnpublishHandling = async (id) => {
        try {
            await UnpublishArticle(id)
            await fetchArticles()
        } catch (error) {
            console.log(error)
        }
    }

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
                                user={article.author}
                                articleDate={article.created_at}
                                articleTitle={article.title}
                                publishClick={()=>{UnpublishHandling(article.id)}}
                                detailClick={()=>{navigate("/learn/articles/" + article.id)}}
                                isPublishable={true}
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
                                publishClick={()=>{PublishHandling(article.id)}}
                                detailClick={()=>{navigate("/learn/articles/" + article.id)}}
                                isPublishable={true}
                            />
                        )) : <td className="col-span-4 text-center py-4" colSpan={4}>Data tidak ditemukan</td>}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UserArticle;
