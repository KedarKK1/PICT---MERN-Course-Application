import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams, useNavigate } from 'react-router-dom';

const EditPostPage = ({ match }) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const [post, setPost] = useState({

        "_id": "",
        "author": "",
        "title": "",
        "content": "",
        "commentCount": 0,
        "__v": 0
    });


    const params = useParams();
    let navigate = useNavigate();

    const getPost = async () => {
        const respose = await fetch(`http://localhost:3001/post/get/${params.postId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await respose.json();
        setTitle(json.post.title);
        setContent(json.post.content);
    }

    useEffect(() => {
        if (params.postId) {
            getPost();
        } else {
            alert("No PostId in params!")
        }
    }, [params.postId]);

    const handleInputeChange = (e) => {
        setTitle(e.target.value);
    }


    const handleContentChange = (e) => {
        setContent(e);
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Not authenticated!");
            return;
        }
        try {
            const respose = await fetch(`http://localhost:3001/post/edit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                },
                body: JSON.stringify({
                    id: params.postId,
                    title: title,
                    content: content
                })
            });
            const json = await respose.json();
            console.log("json ", json);
            if (json.success == true) {
                navigate('/', { replace: true });
            } else {
                alert("Incorrect Credentials! ")
            }
        } catch (err) {
            alert("Error ", err);
        }

    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-primary text-white">Edit Post</div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title" value={title} onChange={handleInputeChange} />
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
                            <button className="btn btn-primary" onClick={onSubmitHandler} >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditPostPage;
