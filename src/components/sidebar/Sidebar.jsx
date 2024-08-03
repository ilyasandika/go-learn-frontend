import SidebarList from "./SidebarList.jsx";
import {faCopy, faFile, faIdCard, faThLarge, faUser, faUsers, faUserTag} from "@fortawesome/free-solid-svg-icons";
import {useLocation, useNavigate} from 'react-router-dom';
import NavigateTo from "../../helper/Navigate.jsx";

const Sidebar = (props) => {
    const location = useLocation();
    const currentPath = location.pathname;

    const navigate = useNavigate();

    return (
        <>
            <div className={`w-80 h-screen bg-white px-8 py-8 ${props.isOpen ? '' : 'hidden'}`}>
                <div className="flex justify-between items-center">
                    <img src="/main-logo.svg" className={`w-36 mx-auto`} alt="img" />
                </div>
                <nav className="mt-12 flex flex-col gap-3">
                    <span className="text-sm">MENU</span>
                    <SidebarList onClick={() => {
                        NavigateTo(navigate, "dashboard")
                    }} icon={faThLarge} isActive={currentPath.startsWith('/learn/dashboard') || currentPath === ('/learn')} text="Dashboard"/>

                    <span className="text-sm">ARTICLE</span>
                    <SidebarList onClick={() => {
                        NavigateTo(navigate, "articles")
                    }} icon={faCopy} isActive={currentPath.startsWith('/learn/articles')} text="Articles"/>
                    <SidebarList onClick={() => {
                        NavigateTo(navigate, "user-articles")
                    }} icon={faUserTag} isActive={currentPath.startsWith('/learn/user-articles')} text="User Article"/>
                    <SidebarList onClick={() => {
                        NavigateTo(navigate, "my-articles")
                    }} icon={faFile} isActive={currentPath.startsWith('/learn/my-articles')} text="My Article"/>

                    <span className="text-sm">PROFILE</span>
                    <SidebarList onClick={() => {
                        NavigateTo(navigate, "profiles")
                    }} icon={faUser} isActive={currentPath.startsWith('/learn/profiles')} text="My Profiles"/>
                    <SidebarList onClick={() => {
                        NavigateTo(navigate, "user-profiles")
                    }} icon={faUsers} isActive={currentPath.startsWith('/learn/user-profiles')} text="User Profiles"/>
                </nav>
            </div>

        </>
    )
}

export default Sidebar