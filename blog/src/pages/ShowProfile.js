import React, { useState, useEffect } from "react";


const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const getUser = async () => {
        let token = localStorage.getItem('token');
        if (!token || token.length == 0) {
            alert("User hasn't been signed in! Please log in before accessing profile!")
        }
        else {

            const response = await fetch(`http://localhost:3001/auth/getUserDetails`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': token
                },
            });
            const json = await response.json();
            setUser(json);
        }
    }
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getUser();
        }
    }, [])
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <div className="card" style={{ width: "400px", borderRadius: "10px", boxShadow: "0 5px 8px rgba(0,0,0,0.1" }} >
                    <div className="card-header bg-primary text-white">
                        Profile
                    </div>
                    <div className="card-body">
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5 rem", marginBottom: "1rem" }}
                        >
                            <div style={{ border: "1px solid black", borderRadius: "50%", width: "50px", height: "50px" }}></div>
                            <h5 className="card-title">{user && `${user.username}`}</h5>
                        </div>
                        <p className="card-text">Email: {user && user.email}</p>
                        <p className="card-text">Created At: {user && user.createdAt}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProfilePage;