import React from 'react'

const PostPage = () => {

    return (
        <div className="container mt-5">
            
            <div className="card">
                <div className="d-flex justify-content-between card-header bg-primary text-white">
                    <h3 className="mb-0">post title here</h3>
                    <div>
                        <button className="btn btn-sm btn-danger me-2">Delete</button>
                        <button className="btn btn-sm btn-warning" >Update</button>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text">Post content here</p>
                </div>
            </div>
        
        </div>
    );
}

export default PostPage;
