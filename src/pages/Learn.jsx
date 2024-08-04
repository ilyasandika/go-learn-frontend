import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Articles from "./Articles.jsx";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import Header from "../components/header/Header.jsx";
import {useState} from "react";
import InnerFooter from "../components/footer/InnerFooter.jsx";
import MyArticles from "./MyArticles.jsx";
import MyProfiles from "./MyProfiles.jsx";
import AccountSettings from "./AccountSettings.jsx";
import EditProfile from "./EditProfile.jsx";
import AddArticle from "./AddArticle.jsx";
import {AdminOnly, AuthRequired} from "../api/middleware.jsx";
import UserArticles from "./UserArticles.jsx";
import ArticleDetail from "./ArticleDetail.jsx";


function Learn() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
    <div className="flex flex-row bg-slate-100">
        <div className="sicky">
        <Sidebar isOpen={isOpen}/>

        </div>
        <div className={`w-full flex flex-col justify-between h-full`}>
            <Header isOpen={isOpen} onClick={toggleSidebar}/>
            <div className="bg-slate-100 h-full p-10 rounded-t-xl">
                <Routes>
                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="dashboard" element={<Dashboard/>}/>
                    <Route path="articles" element={<Articles/>}/>
                    <Route path="articles/:articleId" element={<ArticleDetail/>}/>
                    <Route path="my-articles" element={<MyArticles/>}/>
                    <Route path="user-articles" element={<UserArticles/>}/>
                    <Route path="profiles" element={<MyProfiles/>}/>
                    <Route path="account-settings" element={<AccountSettings/>}/>
                    <Route path="profiles/edit" element={<EditProfile/>}/>
                    <Route path="my-articles/add" element={<AddArticle/>}/>
                </Routes>
            </div>
            <InnerFooter />
        </div>
    </div>
  )
}

export default Learn
