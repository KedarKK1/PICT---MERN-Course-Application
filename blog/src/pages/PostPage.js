import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import CommentComponent from '../components/Comment';

const PostPage = () => {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState({

        "_id": "",
        "author": "",
        "title": "",
        "content": "",
        "commentCount": 0,
        "__v": 0
    });
    const [comments, setComments] = useState(
        null
    )
    const [areButtonsDisabled, setareButtonsDisabled] = useState(true);

    let params = useParams();
    let navigate = useNavigate();

    const getPost = async () => {
        const respose = await fetch(`http://localhost:3001/post/get/${params.postId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await respose.json();
        setPost(json.post);
        // console.log('json.comments ', json.comments)
        setComments(json.comments);
        // console.log('comments ', comments)
        const userId = localStorage.getItem("userId");
        if (userId == json.post.author) {
            setareButtonsDisabled(false);
        } else {
            setareButtonsDisabled(true);
        }
        setLoading(false);
    }

    const handleDelete = async () => {
        let body = JSON.stringify({ "id": `${params.postId}` });
        console.log("body ", body)
        const respose = await fetch(`http://localhost:3001/post/remove`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: body
        });
        const json = await respose.json();
        if (json.success == true) {
            navigate('/', { replace: true });
        } else {
            alert("Cannot be deleted! ", json.err);
        }
        setLoading(false);
    }
    const handleUpdate = (post) => {
        navigate(`/edit-post/${post._id}`, { state: { post: post } });
    }


    useEffect(() => {
        setLoading(true);
        if (params.postId) {
            getPost();
        } else {
            alert("No PostId in params!")
        }
    }, [params.postId]);

    if (loading) {
        return (
            <>
                loading;
            </>
        )
    }

    return (
        <div className="container mt-5">

            <div className="card">
                <div className="d-flex justify-content-between card-header bg-primary text-white">
                    <h3 className="mb-0">{post.title}</h3>
                    <div>
                        <button className="btn btn-sm btn-danger me-2" disabled={areButtonsDisabled} onClick={handleDelete} >Delete</button>
                        <button className="btn btn-sm btn-warning" disabled={areButtonsDisabled} onClick={(e) => handleUpdate(post)} >Update</button>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: post.content }}></p>
                </div>
            </div>
            <div className="card-footer bg-light">
                <div className="flex justify-content-between">
                    <h4>Comments</h4>
                    <Link className="btn btn-outline-dark mx-2" to={`/addComment/${params.postId}`} role="button">Add Comment</Link>
                </div>
                {comments.length == 0 ? (
                    <p>No comments yet.</p>
                ) : (
                    <ul className="list-group list-group-flush">
                        {comments.map(comment => (
                            <li key={comment._id} className="list-group-item">
                                <CommentComponent comment={comment} isButtonDisabled={localStorage.getItem('userId') != comment.author} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>

        </div>
    );
}

export default PostPage;
