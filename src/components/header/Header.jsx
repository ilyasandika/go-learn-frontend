import UserProfile from "./UserProfile.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretLeft, faListUl} from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
    return (
        <>
            <div className="flex w-full h-16 py-4 px-8 justify-between">
                <button onClick={props.onClick} className="text-lg">
                    <FontAwesomeIcon icon={props.isOpen ? faCaretLeft : faListUl}/>
                </button>

                <UserProfile/>
            </div>
        </>
    )
}

export default Header;