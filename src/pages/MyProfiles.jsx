import BiodataItem from "../components/profile/BiodataItem.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faPlus} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import NavigateTo from "../helper/Navigate.jsx";

const MyProfiles = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-4">

            <div className="flex flex-row w-full gap-10 items-center bg-white rounded-xl p-6">
                <img src="/Default_pfp.svg" alt="profile-img" className="w-24 rounded-full"/>
                <div className="flex flex-col w-full gap-2">
                    <p className="text-3xl font-bold">Ilyas Andika</p>
                    <p className="">ilyasandika</p>
                </div>
            </div>

            <div className="flex flex-col w-full bg-white rounded-xl p-10">
                <div className="flex flex-row justify-between items-center w-full p-4 bg-slate-50 rounded-xl ">
                    <h2 className="text-lg font-bold">BIODATA</h2>
                    <div
                        className="flex flex-row gap-3 items-center hover:cursor-pointer text-slate-800 rounded-xl" onClick={()=>{NavigateTo(navigate, "edit")}}>
                        <FontAwesomeIcon icon={faEdit}/>
                    </div>
                </div>
                <div className="p-4">
                    <BiodataItem header="Full Name" text="Ilyas Andika"/>
                    <BiodataItem header="Gender" text="Male"/>
                    <BiodataItem header="Date of Birth" text="14 Januari 2003"/>
                    <BiodataItem header="Phone Number" text="62 898 165 9898"/>
                    <BiodataItem header="Address" text="Jl. R.A Kartini Gang Gajah Mada Muara Enim"/>
                    <BiodataItem header="Joined At" text="14 Januari 2024"/>
                </div>
            </div>

        </div>
    )
}

export default MyProfiles;