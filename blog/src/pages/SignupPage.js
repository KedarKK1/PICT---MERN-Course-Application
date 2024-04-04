import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [credentials, setCredentials] = useState({ username: "", email: "", password: "", cpassword: "" });
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const { username, email, password, cpassword } = credentials;
        if(password != cpassword) {
            alert("password and confirm password should match");
        }else{
            const response = await fetch(`http://localhost:3001/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password })
            });
            const json = await response.json();
            if (json.success == true) {
                localStorage.setItem('token', json.authToken);
                navigate('/login', { replace: true });
            } else {
                alert("Incorrect Credentials! ")
            }
        }

        }


    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className='container' style={{ width: "clamp(300px, 40%, 600px)", padding: "20px", marginTop: "10vh", border: "1px solid black", borderRadius: "10px" }}>
                <h3>Sign up</h3>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Username</label>
                        <input type="text" className="form-control" value={credentials.username} onChange={onChange} name="username" id="username" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" value={credentials.email} onChange={onChange} name="email" id="email" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" value={credentials.cpassword} onChange={onChange} name="cpassword" id="cpassword" minLength={5} required />
                    </div>
                    <button style={{ width: "100%" }} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Signup