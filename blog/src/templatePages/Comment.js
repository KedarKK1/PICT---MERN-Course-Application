import React, { useState } from 'react'

const Comments = () => {

    // const comment = {
    // content: 'This is a comment',
    // };
    return (
        < >
            <div className="card" >
                <div className="card-header text-uppercase font-weight-bold" style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        {/* <button className="btn btn-sm btn-danger m-2" disabled={`${userId != comment.author}`} onClick={() => { }}>Delete</button>
                        <button className="btn btn-sm btn-warning m-2" disabled={`${userId != comment.author}`} >Update</button> */}
                        <button className="btn btn-sm btn-danger m-2" >Delete</button>
                        <button className="btn btn-sm btn-warning m-2" >Update</button>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: comment.content }}></p>
                    {/* <p>{comment.createdAt}</p>
                    <p>{comment.updatedAt}</p> */}
                </div>
            </div>
        </>
    )
}

export default Comments