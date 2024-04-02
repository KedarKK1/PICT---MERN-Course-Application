import React from 'react'

const Blog = () => {
    return (
        <div>
            <div classNames="card" style={{ width: "18rem", margin:"20px" }}>
                <div className='mb-4 shadow'>
                    <div className="card-header bg-primary d-flex justify-content-between align-items-center">
                        <h5 classNames="card-title mb-1" style={{padding:"10px"}}>Card title</h5>
                    </div>
                    <div classNames="card-body" >
                        <p style={{padding:"10px"}} classNames="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog