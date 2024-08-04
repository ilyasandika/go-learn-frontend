import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faComment,
    faComments,
    faDownload,
    faFileDownload,
    faFileWord,
    faHeart,
    faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import InputBox from "../components/InputBox.jsx";
import CommentBox from "../components/Comment.jsx";
import { useEffect, useState } from "react";
import { getArticleDetail, getCommentsByArticle, postComment } from "../api/articleApi.jsx";
import { useNavigate, useParams } from "react-router-dom";

const ArticleDetail = () => {
    let { articleId } = useParams();
    const [article, setArticle] = useState("");
    const [videoUrl, setVideoUrl] = useState('');
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const fetchData = async () => {
        try {
            const article = await getArticleDetail(articleId);
            setArticle(article);
            const video = article.media.find(m => m.type === 'video');
            if (video) {
                setVideoUrl(`https://www.youtube.com/embed/${video.path}`);
            }
            const comments = await getCommentsByArticle(articleId);
            setComments(comments.data);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        fetchData();
    }, [articleId]);

    const handlePostComment = async () => {
        try {
            const response = await postComment(articleId, { comment: newComment });
            fetchData()
            setNewComment('');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="max-w-6xl mx-auto">
            <div className="w-full h-full bg-white rounded-xl px-8 py-8 mb-4">
                <h2 className="border-b pb-4 px-4 font-bold text-lg">Video</h2>
                <iframe className="w-full h-[570px] py-6 px-4 rounded" src={videoUrl}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                        allowFullScreen></iframe>
            </div>
            <div className="w-full h-full bg-white rounded-xl px-8 py-8 mb-4">
                <h2 className="border-b pb-4 px-4 font-bold text-lg">Content</h2>
                <p className="p-4" dangerouslySetInnerHTML={{ __html: article.content }}></p>
            </div>

            <div className="w-full h-full bg-white rounded-xl px-8 py-8 mb-4">
                <h2 className="border-b pb-4 px-4 font-bold text-lg">Media</h2>
                {article.media != null ? (
                    article.media.map(media => (
                        <div
                            key={media.id}
                            className="flex flex-row justify-between items-center font-semibold w-full py-4 px-6 bg-slate-100 rounded-lg my-4 mb-2"
                        >
                            <div className="space-x-4">
                                <FontAwesomeIcon icon={media.type === 'pdf' ? faFileWord : faFileDownload} className="text-xl" />
                                <a href={media.path} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                    {media.type === 'pdf' ? 'Download PDF' : 'Watch Video'}
                                </a>
                            </div>
                            <FontAwesomeIcon icon={faFileDownload} className="text-xl text-emerald-500" />
                        </div>
                    ))
                ) : (
                    <p>No media available.</p>
                )}
            </div>

            <div className="w-full h-full bg-white rounded-xl px-8 py-8 mb-4">
                <div className="flex flex-row gap-4 border-b pb-4 px-4">
                    <h2 className="border-b pb-4 px-4 font-bold text-lg">Diskusi</h2>
                        {/*<div className="flex flex-row items-center gap-2">*/}
                        {/*    <FontAwesomeIcon icon={faHeart} className="text-xl text-red-700"/>*/}
                        {/*    <span>100</span>*/}
                        {/*</div>*/}
                        {/*<div className="flex flex-row items-center gap-2">*/}
                        {/*    <FontAwesomeIcon icon={faComment} className="text-xl text-cyan-700"/>*/}
                        {/*    <span>100</span>*/}
                        {/*</div>*/}
                    </div>
                    <div
                        className="flex flex-col justify-between items-center font-semibold w-full py-4 px-2 rounded-lg my-4 mb-2">
                        {comments != null ? comments.map(comment => (
                            <CommentBox key={comment.id} author={comment.author} comment={comment.comment}/>
                        )) : ""}
                        <div className="w-full p-1 flex flex-row items-center gap-2 mt-4 ">
                            <InputBox
                                className="w-full rounded-xl"
                                placeholder="Masukkan komentar"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                            />
                            <div className="bg-white py-2 px-4 border rounded-xl cursor-pointer"
                                 onClick={handlePostComment}>
                                <FontAwesomeIcon icon={faPaperPlane}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
            }

            export default ArticleDetail;
