import InputWithLabel from "../components/InputWithLabel.jsx";
import Button from "../components/Button.jsx";
import { useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';
import { useState } from "react";
import { createArticle } from '../api/articleApi.jsx';

const AddArticle = () => {
    const navigate = useNavigate();
    const [editorValue, setEditorValue] = useState('');
    const [mediaLinks, setMediaLinks] = useState([]);

    const handleEditorChange = (value) => {
        setEditorValue(value);
    };

    const handleMediaChange = (index, field, value) => {
        const updatedMediaLinks = [...mediaLinks];
        updatedMediaLinks[index][field] = value;
        setMediaLinks(updatedMediaLinks);
    };

    const addMediaField = () => {
        setMediaLinks([...mediaLinks, { type: '', path: '' }]);
    };

    const handleSubmit = async () => {
        const articleData = {
            title: document.getElementById('title').value,
            description: document.getElementById('description').value,
            content: editorValue,
            media: [
                ...mediaLinks,
                {
                    type: 'video',
                    path: document.getElementById('youtubeVideoId').value
                }
            ]
        };

        try {
            await createArticle(articleData);
            navigate("/learn/dashboard");
        } catch (error) {
            console.error('Failed to create article:', error);
        }
    };

    return (
        <>
            <div className="flex flex-col">
                <div className="w-full text-left bg-white p-16 rounded-xl">
                    <h1 className="font-bold text-xl mb-6">Add Article</h1>
                    <InputWithLabel className="w-full mb-4" id="title" name="title" label="Title"
                                    placeholder="Masukkan judul artikel anda"/>
                    <InputWithLabel className="w-full mb-4" id="description" name="description" label="Description"
                                    placeholder="Masukkan deskripsi artikel anda"/>
                    <label className="font-semibold block mb-2">Content</label>
                    <ReactQuill
                        value={editorValue}
                        onChange={handleEditorChange}
                        className="mb-4"
                    />
                    <InputWithLabel className="w-full mb-4" id="youtubeVideoId" name="youtubeVideoId"
                                    label="Youtube Video ID"
                                    placeholder="Masukkan Youtube Video ID"/>
                    <label className="font-semibold block mb-2">Media Links (Google Drive URLs)</label>
                    {mediaLinks.map((media, index) => (
                        <div key={index} className="mb-4">
                            <select
                                className="text-gray-700 text-sm border border-slate-200 focus:border-slate-400 focus:outline-none px-4 py-3 rounded-sm w-full mb-2"
                                value={media.type}
                                onChange={(e) => handleMediaChange(index, 'type', e.target.value)}
                            >
                                <option value="">Select Media Type</option>
                                <option value="pdf">PDF</option>
                                <option value="docx">DOCX</option>
                                <option value="mp3">MP3</option>
                            </select>
                            <input
                                type="text"
                                className="text-gray-700 text-sm border border-slate-200 focus:border-slate-400 focus:outline-none px-4 py-3 rounded-sm w-full"
                                placeholder="Google Drive Link"
                                value={media.path}
                                onChange={(e) => handleMediaChange(index, 'path', e.target.value)}
                            />
                        </div>
                    ))}
                    <button type="button" className="mb-4 text-blue-500" onClick={addMediaField}>Add More Media</button>
                    <div className="space-x-2">
                        <Button text="Back" onClick={() => { navigate(-1) }} className="mt-1 bg-slate-800 text-white hover:bg-white hover:text-slate-800 rounded-sm"/>
                        <Button text="Save" onClick={handleSubmit} className="mt-1 bg-slate-800 text-white hover:bg-white hover:text-slate-800 rounded-sm"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddArticle;
