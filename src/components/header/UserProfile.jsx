import { useState, useRef, useEffect } from 'react';
import NavigateTo from "../../helper/Navigate.jsx";
import {useNavigate} from "react-router-dom";
import {logout} from "../../api/authApi.jsx";
import {GetUserProfileByToken, GetUserProfilePhotoByToken} from "../../api/userProfileApi.jsx";

const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const [fullName, setFullName] = useState("");
    const [profilePhoto, setProfilePhoto] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = await GetUserProfileByToken();
                setFullName(user.full_name);
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

    const handleLogout = async () => {
        try {
            const response = await logout()
            navigate("/")
        } catch (error) {
            alert(error.response)
        }
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <div onClick={toggleDropdown} className="flex items-center cursor-pointer">
                <img src={`${BASE_URL}/profile_photos/${profilePhoto}`} alt="User Profile" className="w-8 h-8 object-cover rounded-full mr-2" />
                <span className="text-sm">Hi! {fullName}</span>
            </div>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                    <a onClick={() => {
                        NavigateTo(navigate,"account-settings")
                    }} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:cursor-pointer">Account Settings</a>
                    <a onClick= {handleLogout}
                           className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:cursor-pointer">Logout</a>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
