import InputWithLabel from "../components/InputWithLabel.jsx";
import Button from "../components/Button.jsx";
import {useNavigate} from "react-router-dom";
import ReactQuill from 'react-quill';
import {useState} from "react";

const EditProfile = () => {
    const navigate = useNavigate();
    const [editorValue, setEditorValue] = useState('');

    const handleEditorChange = (value) => {
        setEditorValue(value);
    };
    return (
        <>
            <div className="flex flex-col">
                <div className=" w-full text-left bg-white p-16 rounded-xl">
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
                    <label className="font-semibold block mb-2">Media (PDF, DOCX, MP3, Max: 2 MB) </label>
                    <input type="file" id="files" name="files" className="text-gray-700 text-sm border border-slate-200 focus:border-slate-400 focus:outline-none px-4 py-3 rounded-sm w-full mb-4" multiple />
                    <div className="space-x-2">
                        <Button text="Back" onClick={() => {
                            navigate(-1)
                        }} className="mt-1  bg-slate-800 text-white hover:bg-white hover:text-slate-800 rounded-sm"/>
                        <Button text="Save" onClick={() => {
                            navigate("/learn/dashboard")
                        }} className="mt-1  bg-slate-800 text-white hover:bg-white hover:text-slate-800 rounded-sm"/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EditProfile;