import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        navigate('/login', { replace: true });
    }
    return (
        <nav className="navbar bg-body-tertiary" style={{ marginBottom: "10px" }}>
            <div className="container-fluid">
                <Link className="navbar-brand" style={{ fontWeight: "bold", fontSize: "clamp(1rem, 2rem, 2.25rem)" }}>Navbar</Link>
                <form className="d-flex" role="search">
                    {!localStorage.getItem('token') ?
                        <div className="d-flex">
                            <Link className="btn btn-outline-dark mx-2" to="/login" role="button">Login</Link>
                            <Link className="btn btn-outline-dark mx-2" to="/signup" role="button">Sign Up</Link>
                        </div>
                        :
                        <div className="d-flex">
                            <Link className="btn btn-outline-dark mx-2" to="/profile" role="button">Profile</Link>
                            <Link className="btn btn-outline-dark mx-2" to="/add" role="button">Add Post</Link>
                            <button className="btn btn-outline-dark mx-2" onClick={handleLogout}>Logout</button>
                        </div>
                    }
                </form>
            </div>
        </nav>
    )
}

export default Navbar