import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">a
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src="upDog.png" alt="Logo" style={{ height: '30px', marginRight: '10px' }} />
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
                            <Link to="/" className="nav-link active">
                                <i class="fa-solid fa-house-user"></i> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Login" className="nav-link">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className='nav-link dropdown-toggle' to="#" role="button" data-bs-toggle="dropdown">
                                <i className="fa-solid fa-barcode"></i> Products
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to="/products/list">
                                        <i className="fa-regular fa-rectangle-list"></i> Products List
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/products/add">
                                        <i className="fa-solid fa-square-plus"></i> Add a new Product
                                    </Link>
                                </li>
                            </ul>
                        </li >
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
