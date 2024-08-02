import SidebarList from "./SidebarList.jsx";
import {faThLarge} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    return (
        <>
            <div className="w-80 h-screen bg-white px-8 py-8">
                <img src="/main-logo.svg" className="w-36 mx-auto" />
                <nav className="mt-12 flex flex-col gap-3">
                    <span className="text-sm">MENU</span>
                    <SidebarList icon={faThLarge} active={true} text="Dashboard"/>
                    <span className="text-sm">ARTICLE</span>
                    <SidebarList icon={faThLarge} active={false} text="Dashboard"/>
                </nav>
            </div>
        </>
    )
}

export default Sidebar