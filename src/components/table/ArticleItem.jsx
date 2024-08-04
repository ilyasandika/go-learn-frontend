
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faEye, faPaperPlane, faTrash} from "@fortawesome/free-solid-svg-icons";

const LatestCommentItem = (props) => {
    return (
        <tr>
            <td className="border-b border-slate-400"><p
                className="line-clamp-1 hover:line-clamp-none text-sm"> {props.articleTitle} </p>
            </td>
            <td className="border-b border-slate-400"><p
                className="line-clamp-1 hover:line-clamp-none text-sm">{props.articleDate}</p>
            </td>
            <td className="border-b border-slate-400  items-center">
                <div className="flex items-center">
                    <img src={props.src} alt="profile" className="inline mr-2 w-8 h-8"/>
                    <span className="line-clamp-1 text-sm hover:line-clamp-none ">{props.user}</span>
                </div>
            </td>


            <td className=" border-b border-slate-400 py-6 space-x-4">
                {<FontAwesomeIcon icon={faEye} onClick={props.detailClick} className="hover:cursor-pointer fa-fw text-cyan-500 text-lg"/>}
                {props.isDeletable && <FontAwesomeIcon icon={faTrash}  onClick={props.deleteClick} className="hover:cursor-pointer fa-fw text-red-500 text-lg"/>}
                {props.isPublishable && <FontAwesomeIcon icon={faPaperPlane} onClick={props.publishClick} className="hover:cursor-pointer fa-fw text-emerald-500 text-lg"/>}
                {props.isEditable && <FontAwesomeIcon icon={faEdit} onClick={props.editClick} className="hover:cursor-pointer fa-fw text-slate-500 text-lg"/>}
            </td>
        </tr>
    )
}

export default LatestCommentItem