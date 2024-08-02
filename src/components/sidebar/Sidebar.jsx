import SidebarList from "./SidebarList.jsx";
import {faThLarge} from "@fortawesome/free-solid-svg-icons";
import {useLocation, useNavigate} from 'react-router-dom';
import NavigateTo from "../../helper/Navigate.jsx";



const Sidebar = (props) => {
    const location = useLocation();
    const currentPath = location.pathname;

    const navigate = useNavigate();

    return (
        <>
            <div className={`w-80 border-r h-screen bg-white px-8 py-8 ${props.isOpen ? '' : 'hidden'}`}>
                <div className="flex justify-between items-center">
                    <img src="/main-logo.svg" className={`w-36 mx-auto`} alt="img" />
                </div>
                <nav className="mt-12 flex flex-col gap-3">
                    <span className="text-sm">MENU</span>
                    <SidebarList onClick={() => {
                        NavigateTo(navigate, "/dashboard")
                    }} icon={faThLarge} isActive={currentPath.startsWith('/learn/dashboard')} text="Dashboard"/>
                    <span className="text-sm">ARTICLE</span>
                    <SidebarList onClick={() => {
                        NavigateTo(navigate, "/articles")
                    }} icon={faThLarge} isActive={currentPath.startsWith('/learn/articles')} text="Daftar Artikel"/>
                </nav>
            </div>

        </>
    )
}

export default Sidebar