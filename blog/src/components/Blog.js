import React from 'react'
import { Link } from 'react-router-dom';

const Blog = (props) => {

    const { post } = props;

    return (
        <Link className="text-decoration-none" to={`/post/${post._id}`}>
            <div className="card mb-4 shadow">
                <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                    <h4 className="mb-0">{post.title}</h4>
                    {/* <div>
                        <button className="btn btn-sm btn-danger me-2" onClick={() => { handleDeletePost(post._id) }}>Delete</button>
                        <button className="btn btn-sm btn-warning">Update</button>
                    </div> */}
                </div>
                <div className="card-body">
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: post.content }}></p>
                </div>
            </div>
        </Link>
    );

}

export default Blog