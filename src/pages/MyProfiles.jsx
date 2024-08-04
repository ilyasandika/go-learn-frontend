import BiodataItem from "../components/profile/BiodataItem.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faPlus} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import NavigateTo from "../helper/Navigate.jsx";
import {useEffect, useRef, useState} from "react";
import {GetUserProfileByToken, GetUserProfilePhotoByToken, UpdateUserProfilePhoto} from "../api/userProfileApi.jsx";

const MyProfiles = () => {
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const [fullName, setFullName] = useState("");
    const [gender, setGender] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [profilePhoto, setProfilePhoto] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = await GetUserProfileByToken();
                setFullName(user.full_name);
                setGender(user.gender);
                setDateOfBirth(user.birth_date);
                setPhoneNumber(user.phone_number);
                setAddress(user.address);
                setCreatedAt(user.created_at);
            } catch (error) {
                console.log(error);
            }
        };

        const fetchPhoto = async () => {
            try {
                const user = await GetUserProfilePhotoByToken();
                setProfilePhoto(user.path)
            } catch (error) {
                console.log(error);
            }
        }

        fetchPhoto()
        fetchData();
    }, []);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('profilePhoto', file);

            try {
                setProfilePhoto("")
                await UpdateUserProfilePhoto(formData);
                // Update local state with the new profile photo URL
                setProfilePhoto(URL.createObjectURL(file));
            } catch (error) {
                console.error("Error updating profile photo:", error);
            }
        }
        window.location.reload()
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row w-full gap-10 items-center bg-white rounded-xl p-6">
                <img
                    src={`${BASE_URL}/profile_photos/${profilePhoto}`}
                    alt="profile-img"
                    className="w-32 h-32 object-cover rounded-full border cursor-pointer"
                    onClick={handleImageClick} //
                />
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                />
                <div className="flex flex-col w-full gap-2">
                    <p className="text-3xl font-bold">{fullName.toUpperCase()}</p>
                    <p className="">{gender.toUpperCase()}</p>
                </div>
            </div>

            <div className="flex flex-col w-full bg-white rounded-xl p-10">
                <div className="flex flex-row justify-between items-center w-full p-4 bg-slate-50 rounded-xl">
                    <h2 className="text-lg font-bold">BIODATA</h2>
                    <div
                        className="flex flex-row gap-3 items-center hover:cursor-pointer text-slate-800 rounded-xl"
                        onClick={() => { NavigateTo(navigate, "edit") }}
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </div>
                </div>
                <div className="p-4">
                    <BiodataItem header="Full Name" text={fullName} />
                    <BiodataItem header="Gender" text={gender === "male" ? "Laki-laki" : "Perempuan"} />
                    <BiodataItem header="Date of Birth" text={dateOfBirth.split(" ")[0]} />
                    <BiodataItem header="Phone Number" text={phoneNumber} />
                    <BiodataItem header="Address" text={address} />
                    <BiodataItem header="Joined At" text={createdAt.split(" ")[0]} />
                </div>
            </div>
        </div>
    );
};

export default MyProfiles;
