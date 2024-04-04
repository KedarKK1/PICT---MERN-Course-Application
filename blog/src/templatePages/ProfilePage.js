import React from 'react'

const ProfilePage = () => {


    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <div className="card" style={{ width: "400px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                    <div className="card-header bg-primary text-white">
                        Profile
                    </div>
                    <div className="card-body">
                        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "1rem" }}>
                            <div style={{ border: "1px solid black", borderRadius: "50%", width: "50px", height: "50px" }}></div>
                            <h5 className="card-title">Username here</h5>
                        </div>
                        <p className="card-text">Email: emailHere</p>
                        <p className="card-text">Created At: createdAt</p>
                    </div>
                </div>
            </div>
        </>


    )
}

export default ProfilePage