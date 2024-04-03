import React, { useEffect, useState } from 'react';
import Blog from './../components/Blog';

const HomePage = () => {

  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  const getAllPost = async () => {
    const response = await fetch("http://localhost:3001/post/getAll", {
      method: 'GET',
    });
    const data = await response.json();
    setPosts(data.posts);
    setLoading(false);
  }

  useEffect(() => {

    getAllPost();
  }, [])


  return (
    <>
      {loading ? (
      <></>
      ) : (
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
                {posts && posts.map((post) => (
                  <Blog key={post._id} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
}


export default HomePage