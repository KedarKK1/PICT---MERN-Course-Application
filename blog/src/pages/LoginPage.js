import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const respose = await fetch(`http://localhost:3001/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await respose.json();
        localStorage.setItem('token', json.authToken);
        localStorage.setItem('userId', json.userId);
        if (json.success == true) {
            navigate('/', { replace: true });
        } else {
            alert("Incorrect Credentials! ")
        }

    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    return (
        <div className='container' style={{ width: "clamp(250px, 40%, 600px)", border: "1px solid black", borderRadius: "10px", padding: "20px", marginTop: "50px" }}>
            <h3>Login</h3>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" value={credentials.email} className="form-control" onChange={onChange} id="email" aria-describedby="emailHelp" name="email" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" value={credentials.password} onChange={onChange} className="form-control" id="password" name="password" />
                </div>
                <button style={{ width: "100%" }} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default LoginPage