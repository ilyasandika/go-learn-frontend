import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faHeart} from "@fortawesome/free-solid-svg-icons";

const MostPopularItem = (props) => {
    return (
        <div className="flex flex-row items-center gap-8 w-full justify-between border-b py-4">
            <div>
                <p className="text-sm font-bold">{props.articleTitle}</p>
                <p className="text-sm">{props.articleDate}</p>
            </div>
            <div>
                <p className="flex gap-2 items-center text-sm font-semibold"><FontAwesomeIcon icon={faHeart}
                                                                                              className="text-red-600"/> {props.totalLike}
                </p>
                <p className="flex gap-2 items-center text-sm font-semibold"><FontAwesomeIcon
                    icon={faComment} className="text-cyan-600"/> {props.totalComment} </p>
            </div>
        </div>
    )
}

export default MostPopularItem