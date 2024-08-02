import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const SidebarList = (props) => {
    return(
        <div className={`group flex items-center py-2.5 px-4 rounded-lg gap-5 cursor-pointer transition duration-200 ${props.isActive ? 'bg-slate-800' : 'hover:bg-slate-100'}`} onClick={props.onClick}>
            <FontAwesomeIcon icon={props.icon}  className={`mr-2 ${props.isActive? 'text-white':''} `} />
            <p
                className={`block text-slate-800 font-semibold ${props.isActive ? 'text-white':''}`}>{props.text}</p>
        </div>
    )
}

export default SidebarList;