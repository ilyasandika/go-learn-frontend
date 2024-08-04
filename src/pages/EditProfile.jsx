import InputWithLabel from "../components/InputWithLabel.jsx";

import Button from "../components/Button.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {GetUserProfileByToken, GetUserProfilePhotoByToken, UpdateUserProfile} from "../api/userProfileApi.jsx"; //

const EditProfile = () => {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [gender, setGender] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = await GetUserProfileByToken();
                setFullName(user.full_name);
                setGender(user.gender);
                setDateOfBirth(user.birth_date);
                setPhoneNumber(user.phone_number);
                setAddress(user.address);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "fullName":
                setFullName(value);
                break;
            case "gender":
                setGender(value);
                break;
            case "dateOfBirth":
                setDateOfBirth(value);
                break;
            case "phoneNumber":
                setPhoneNumber(value);
                break;
            case "address":
                setAddress(value);
                break;
            default:
                break;
        }
    };

    const handleSave = async () => {
        let request = {
            full_name: fullName,
            gender: gender,
            birth_date: dateOfBirth,
            phone_number: phoneNumber,
            address: address,
        }
        try {
            await UpdateUserProfile(request);
            navigate("/learn/dashboard"); //
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    return (
        <>
            <div className="flex flex-col">
                <div className="w-full text-left bg-white p-16 rounded-xl">
                    <h1 className="font-bold text-xl mb-6">EDIT PROFILE</h1>
                    <InputWithLabel
                        className="w-full mb-4"
                        id="fullName"
                        name="fullName"
                        label="Full Name"
                        placeholder="Masukkan nama lengkap anda"
                        value={fullName}
                        onChange={handleChange}
                    />

                    <label htmlFor="gender" className="font-semibold block mb-2">Gender</label>
                    <select
                        id="gender"
                        name="gender"
                        value={gender}
                        onChange={handleChange}
                        className="block w-full p-2 border border-gray-300 rounded mb-4"
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Laki-laki</option>
                        <option value="female">Perempuan</option>
                    </select>

                    <InputWithLabel
                        className="w-full mb-4"
                        id="birthDate"
                        name="dateOfBirth"
                        label="Birth of Date"
                        placeholder="Masukkan tanggal lahir anda"
                        type="date"
                        value={dateOfBirth.split(" ")[0]}
                        onChange={handleChange}
                    />

                    <InputWithLabel
                        className="w-full mb-4"
                        id="phoneNumber"
                        name="phoneNumber"
                        label="Phone Number"
                        placeholder="Masukkan nomor telepon anda"
                        value={phoneNumber}
                        onChange={handleChange}
                    />

                    <InputWithLabel
                        className="w-full mb-4"
                        id="address"
                        name="address"
                        label="Address"
                        placeholder="Masukkan alamat anda"
                        value={address}
                        onChange={handleChange}
                    />

                    <div className="space-x-2">
                        <Button
                            text="Back"
                            onClick={() => {
                                navigate(-1);
                            }}
                            className="mt-1 bg-slate-800 text-white hover:bg-white hover:text-slate-800 rounded-sm"
                        />
                        <Button
                            text="Save"
                            onClick={handleSave}
                            className="mt-1 bg-slate-800 text-white hover:bg-white hover:text-slate-800 rounded-sm"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProfile;
