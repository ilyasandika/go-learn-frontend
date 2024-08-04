import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


export const GetUserByToken = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/details`, {
            withCredentials: true
        });
        return response.data.data
    } catch (error) {
        throw new error(error.message)
    }
}

export const GetUserProfileByToken = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user_profiles/details`, {
            withCredentials: true
        });
        return response.data.data
    } catch (error) {
        throw new error(error.message)
    }
}

export const UpdateUserProfile = async (req) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/user_profiles/details`, req, {
            withCredentials: true
        });
        return response.data.data
    } catch (error) {
        throw new error(error.message)
    }
}

export const UpdateUserProfilePhoto = async (req) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/user_profile_photos`, req, {
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data.data
    } catch (error) {
        throw new error(error.message)
    }
}

export const GetUserProfilePhotoByToken = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user_profile_photos`, {
            withCredentials: true
        });
        return response.data.data
    } catch (error) {
        throw new error(error.message)
    }
}