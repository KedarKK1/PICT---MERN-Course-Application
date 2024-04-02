import React from 'react'

const LoginPage = () => {
    return (
        <div className='container' style={{ width: "clamp(250px, 40%, 600px)", border: "1px solid black", borderRadius: "10px", padding: "20px", marginTop:"50px" }}>
            <h3>Login</h3>
            <hr />
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button style={{width:"100%"}} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default LoginPage