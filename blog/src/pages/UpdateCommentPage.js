import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from 'react-router-dom';

const AddCommentPage = () => {
    const [content, setContent] = useState("");

    const navigate = useNavigate();
    const params = useParams();

    const handleContentChange = (e) => {
        setContent(e);
    }

    const getComment = async () => {
        const respose = await fetch(`http://localhost:3001/comment/get/${params.commenttId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await respose.json();
        setContent(json.comment.content);
    }

    useEffect(() => {
        if (params.commenttId) {
            getComment();
        }
    }, [params.commenttId])



    const handleSubmit = async () => {
        let token = localStorage.getItem("token");
        if (!token) {
            navigate("/login", { state: {} });
        } else {
            let bodyData = JSON.stringify({ "id": params.commenttId, "content": content });
            const response = await fetch("http://localhost:3001/comment/edit", {
                method: "POST",
                body: bodyData,
                headers: { "Content-Type": "application/json", "auth-token": token }
            });
            const data = await response.json();
            console.log("data ", data);
            if (data.success == true) {
                navigate('/', { replace: true });
            } else {
                alert("Incorrect Credentials! ")
            }
        }

    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-primary text-white">Add Comment</div>
                        <div className="card-body">
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

export default AddCommentPage