import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFire} from "@fortawesome/free-solid-svg-icons";

const InnerFooter = () => {
    return (
        <div className="w-full pb-6 px-10 bg-slate-100 flex justify-between">
            <p className="text-sm">© 2024 Go Academy</p>
            <p className="text-sm">Made with <FontAwesomeIcon icon={faFire} className="mx-1 text-red-600"/> by Kelompok Dua Belas IT-401</p>
        </div>
    )
}

export default InnerFooter