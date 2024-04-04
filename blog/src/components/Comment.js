import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Comments = (props) => {
    const { comment, isButtonDisabled } = props;
    let navigate = useNavigate();

    const deleteComment = async (commentId) => {
        let body = JSON.stringify({ "id": `${commentId}` });
        console.log("body ", body)
        const respose = await fetch(`http://localhost:3001/comment/remove`, {
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
    }
    // console.log("comment.author ", comment.author);
    // console.log("isButtonDisabled ", isButtonDisabled);
    return (
        < >
            <div className="card" >
                <div className="card-header text-uppercase font-weight-bold" style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <button className="btn btn-sm btn-danger m-2" disabled={isButtonDisabled} onClick={() => { deleteComment(comment._id) }}>Delete</button>
                        <Link to={`/updateComment/${comment._id}`} className="btn btn-sm btn-warning m-2" disabled={isButtonDisabled}  >Update</Link>
                        {/* <button className="btn btn-sm btn-danger m-2" >Delete</button>
                        <button className="btn btn-sm btn-warning m-2" >Update</button> */}
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text" > {comment.content}</p>
                </div>
            </div>
        </>
    )
}

export default Comments