const LatestCommentItem = (props) => {
    return (
        <tr>
            <td className="border-b border-slate-400 p-4 items-center">
                <div className="flex items-center">
                    <img src={props.src} alt="profile" className="inline mr-2 w-8 h-8"/>
                    <span className="line-clamp-1 text-sm hover:line-clamp-none ">{props.user}</span>
                </div>
            </td>
            <td className="border-b border-slate-400 p-4"><p className="line-clamp-1 hover:line-clamp-none text-sm"> {props.comment} </p></td>
            <td className="border-b border-slate-400 p-4"><p className="line-clamp-1 hover:line-clamp-none text-sm">{props.article}</p>
            </td>
        </tr>
    )
}

export default LatestCommentItem