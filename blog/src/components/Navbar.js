import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-sm btn-outline-success" type="submit">Search</button>

                            {/* Adjust the buttons according to user login status */}
                            <button className="btn btn-sm btn-outline-success" type="submit">Login</button>
                            <button className="btn btn-sm btn-outline-success" type="submit">SignUp</button>

                            <button className="btn btn-sm btn-outline-success" type="submit">Logout</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar