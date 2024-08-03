import {faCopy, faFile, faFileArchive} from "@fortawesome/free-solid-svg-icons";
import ArticleCard from "../components/card/articleCard.jsx";

const Articles = () => {
    return (
        <div className="flex flex-col">
            <h1 className="text-2xl font-bold mb-4">Articles</h1>
            <div className="flex flex-wrap gap-4 justify-between">
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
            </div>

            <h1 className="text-2xl font-bold mb-4 mt-10">Liked Articles</h1>
            <div className="flex flex-wrap gap-4 justify-between">
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
                <ArticleCard/>
            </div>
        </div>
    )
}

export default Articles;