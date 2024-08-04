const CommentBox = (props) => {
    return (
        <div className="bg-slate-50 rounded-xl w-full p-4 mb-3">
            <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-row items-center gap-4 p-2">
                    <img src="/Default_pfp.svg" className="w-8 h-8 rounded-full" alt="img"/>
                    <span className="text-sm">{props.author}</span>
                </div>
                {/*<span className="text-sm">2024-03-12 14:00</span>*/}
            </div>
            <div>
                <p className="font-normal p-2">{props.comment}</p>
            </div>
        </div>
    )
}

export default CommentBox