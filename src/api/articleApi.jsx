import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const GetUserUnpublishedArticleByUser = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/articles/unpublished/user`, {
            withCredentials: true
        });
        return response.data.data
    } catch (error) {
        throw new error(error.message)
    }
}

export const GetUserPublishedArticleByUser = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/articles/published/user`, {
            withCredentials: true
        });
        console.log(response.data.data)
        return response.data.data
    } catch (error) {
        throw new error(error.message)
    }
}

export const GetUserUnpublishedArticle = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/articles/unpublished`, {
            withCredentials: true
        });
        console.log(response)
        return response.data.data
    } catch (error) {
        throw new error(error.message)
    }
}

export const GetUserPublishedArticle = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/articles/published`, {
            withCredentials: true
        });
        console.log(response.data.data)
        return response.data.data
    } catch (error) {
        throw new error(error.message)
    }
}

export const PublishArticle = async (id) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/articles/published/${id}`, "", {
            withCredentials: true
        });
    } catch (error) {
        throw new error(error.message)
    }
}

export const UnpublishArticle = async (id) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/articles/unpublished/${id}`, "",{
            withCredentials: true
        });
    } catch (error) {
        throw new error(error.message)
    }
}

export const createArticle = async (articleData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/articles`, articleData, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });

        return response.data;
    } catch (error) {
        console.error('Error creating article:', error);
        throw error;
    }
};

export const getArticleDetail = async (articleId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/articles/${articleId}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });

        return response.data.data;
    } catch (error) {
        console.error('Error creating article:', error);
        throw error;
    }
};

export const getCommentsByArticle = async (articleId) => {
    const response = await axios.get(`${API_BASE_URL}/comments/articles/${articleId}`, {
        withCredentials:true
    });
    return response.data;
};

export const postComment = async (articleId, commentData) => {
    const response = await axios.post(`${API_BASE_URL}/comments/articles/${articleId}`, commentData, {
        withCredentials: true
    });
    return response.data;
};



