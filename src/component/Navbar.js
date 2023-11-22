import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">a
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                <img src="/images/upDog.png" alt="Logo" style={{ height: '30px', marginRight: '10px'}} />
                    {/* TRVL<i className="fab fa-typo3" /> */}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/Home" className="nav-link active">
                            <i class="fa-solid fa-house-user"></i> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Login" className="nav-link">
                                Login
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/link2" className="nav-link">
                                
                            </Link>
                        </li> */}
                        
                        {/* <li className="nav-item">
                            <Link to="/disabled" className="nav-link disabled" aria-disabled="true">
                                Disabled
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
