import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddPostPage = () => {


    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-primary text-white">Add Post</div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="content" className="form-label">Content</label>
                                <ReactQuill
                                    // value={content}
                                    // onChange={handleContentChange}
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
                            <button className="btn btn-primary" >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPostPage