import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';

const AddPostPage = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const navigate = useNavigate();

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleContentChange = (e) => {
        setContent(e);
    }

    const handleSubmit = async () => {
        let token = localStorage.getItem("token");
        if (!token) {
            navigate("/login", { state: {} });
        } else {
            let bodyData = JSON.stringify({ "title": title, "content": content });
            const response = await fetch("http://localhost:3001/post/add", {
                method: "POST",
                body: (bodyData), // here was the mistake, i made THE MISTAKE WAS JSON.stringify(bodyData) where bodyData was already stringified, two i was stringifying the bodyData it twice!
                headers: { "Content-Type": "application/json", "auth-token": token }
            });
            const data = await response.json();
            navigate("/", { state: {} });
        }

    }


    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-primary text-white">Add Post</div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label"  >Title</label>
                                <input type="text" name="title" className="form-control" value={title} onChange={handleTitleChange} id="title" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="content" className="form-label">Content</label>
                                <ReactQuill
                                    value={content}
                                    onChange={handleContentChange}
                                    modules={{
                                        toolbar: [
                                            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                            [{ size: [] }],
                                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                            [{ 'list': 'ordered' }, { 'list': 'bullet' },
                                            { 'indent': '-1' }, { 'indent': '+1' }],
                                            ['link', 'image', 'video'],
                                            ['clean']
                                        ],
                                    }}
                                />
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary" onClick={handleSubmit} >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPostPage