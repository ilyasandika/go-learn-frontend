import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const SidebarList = (props) => {
    return(
        <div className={`group flex items-center py-2.5 px-4 rounded gap-5 transition duration-200 ${props.active ? 'bg-slate-800' : 'hover:bg-slate-100'}`} >
            <FontAwesomeIcon icon={props.icon}  className={`mr-2 ${props.active? 'text-white':''} `} />
            <p
               className={`block text-slate-800 group-hover:text-white ${props.active ? 'text-white':''}`}>{props.text}</p>
        </div>
    )
}

export default SidebarList;