import {faCopy, faFile, faFileArchive} from "@fortawesome/free-solid-svg-icons";
import InfoCard from "../components/card/InfoCard.jsx";
import LatestCommentItem from "../components/table/LatestCommentItem.jsx";
import MostPopularItem from "../components/table/MostPopularItem.jsx";

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="flex gap-4 w-full justify-between">
                <InfoCard
                    icon={faCopy}
                    title="Total Article"
                    count={`224 articles`}
                    className="bg-slate-800"
                />
                <InfoCard
                    icon={faFile}
                    title="Published Article"
                    count={`112 articles`}
                    className="bg-cyan-400"
                />
                <InfoCard
                    icon={faFileArchive}
                    title="Unpublished Article"
                    count={`112 articles`}
                    className="bg-emerald-300"
                />
            </div>
            <div className="flex flex-row gap-4 w-full justify-between">
                <div className="w-full bg-white flex-[2_2_0] p-6 rounded-xl">
                    <h2 className="text-lg font-bold">Latest Comment</h2>
                    <table className="table-auto border-collapse w-full">
                        <thead>
                        <tr>
                            <th className="border-b border-slate-400 p-4 text-start">Name</th>
                            <th className="border-b border-slate-400 p-4 text-start">Comment</th>
                            <th className="border-b border-slate-400 p-4 text-start">Article</th>
                        </tr>
                        </thead>
                        <tbody>
                        <LatestCommentItem src="/Default_pfp.svg" user="Ilyas Andika"
                                           comment="Wow this is really impressive article"
                                           article="Golang Backend Developer"/>
                        <LatestCommentItem src="/Default_pfp.svg" user="Ilyas Andika"
                                           comment="Wow this is really impressive article"
                                           article="Golang Backend Developer"/>
                        <LatestCommentItem src="/Default_pfp.svg" user="Ilyas Andika"
                                           comment="Wow this is really impressive article"
                                           article="Golang Backend Developer"/>
                        <LatestCommentItem src="/Default_pfp.svg" user="Ilyas Andika"
                                           comment="Wow this is really impressive article"
                                           article="Golang Backend Developer"/>
                        <LatestCommentItem src="/Default_pfp.svg" user="Ilyas Andika"
                                           comment="Wow this is really impressive article"
                                           article="Golang Backend Developer"/>
                        </tbody>
                    </table>
                </div>
                <div className="w-full bg-white flex-1 p-6 rounded-xl">
                    <h2 className="text-lg font-bold mb-4">Most Popular Article</h2>
                    <MostPopularItem articleTitle="Golang Backend Developer" articleDate="14 Januari 2024"
                                     totalLike="144" totalComment="123"/>
                    <MostPopularItem articleTitle="Golang Backend Developer" articleDate="14 Januari 2024"
                                     totalLike="144" totalComment="123"/>
                    <MostPopularItem articleTitle="Golang Backend Developer" articleDate="14 Januari 2024"
                                     totalLike="144" totalComment="123"/>
                    <MostPopularItem articleTitle="Golang Backend Developer" articleDate="14 Januari 2024"
                                     totalLike="144" totalComment="123"/>
                    <MostPopularItem articleTitle="Golang Backend Developer" articleDate="14 Januari 2024"
                                     totalLike="144" totalComment="123"/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;