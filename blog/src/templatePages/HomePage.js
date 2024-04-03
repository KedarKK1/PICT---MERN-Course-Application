import React from 'react';
import Blog from './Blog';

const HomePage = () => {

    const posts = [
        {
            "_id": "660c055fba3fa848d770ac5b",
            "author": "660bfa69c70f0216188fa33c",
            "title": "welcome to new Wildlife century ",
            "content": "This is kanchenchunga wildlife century",
            "commentCount": 0,
            "__v": 0
        },
        {
            "_id": "660c0580ba3fa848d770ac5d",
            "author": "660bfa69c70f0216188fa33c",
            "title": "welcome to LNS with Kapil ",
            "content": "This is kapils latenight show summary",
            "commentCount": 0,
            "__v": 0
        },
        {
            "_id": "670c0580ba3fa848d53yac4h",
            "author": "610bfa69c70f0214388fa43d",
            "title": "welcome to IPL After match commentary ",
            "content": "This is Virat Kohli we're speaking with. Share your thoughts on current match Virat.",
            "commentCount": 0,
            "__v": 0
        }
    ]

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-4">
                        {/* <div className="card">
                            <div className="card-header bg-primary text-white">
                                Profile
                            </div>
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-3">
                                    <div className="avatar bg-dark me-3 rounded-circle"></div>
                                    <p className="mb-0">{user && user.username}</p>
                                </div>
                                <p className="mb-3">This paragraph contains some basic information about the user. This paragraph contains some basic information about the user.</p>
                                <div className="card-footer text-muted">Email: {user && user.email}</div>
                                <div className="card-footer text-muted">LinkedIn: {user && user.linkedin}</div>
                                <button type="button" className="btn btn-primary w-100 mt-3" data-bs-toggle="modal" data-bs-target="#addPostModal">
                                    Add Post
                                </button>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header bg-dark text-white">
                                Feed
                            </div>
                            <div className="card-body">
                                Show All posts here one by one
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default HomePage