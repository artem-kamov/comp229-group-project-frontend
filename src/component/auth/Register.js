import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../datasource/api-user";

const Registration = () => {
    const navigate = useNavigate();

    const [errorMsg, setErrorMsg] = useState('');
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const fullName = `${user.firstName} ${user.lastName}`;

        register({ ...user, name: fullName }).then((data) => {
            if (data && data.success) {
                navigate('/');
            } else {
                setErrorMsg(data.message);
            }
        }).catch(err => {
            setErrorMsg(err.message);
            console.log(err);
        });
    };

    return (
        <div className="container" style={{ paddingTop: 80 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <h1>Signup</h1>
                    <p className="flash"><span>{errorMsg}</span></p>
                    <form onSubmit={handleSubmit} className="form">
                        <div className="form-group">
                            <label htmlFor="firstNameTextField">First Name</label>
                            <input type="text" className="form-control"
                                id="firstNameTextField"
                                placeholder="Enter your first name"
                                name="firstName"
                                value={user.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="lastNameTextField">Last Name</label>
                            <input type="text" className="form-control"
                                id="lastNameTextField"
                                placeholder="Enter your last name"
                                name="lastName"
                                value={user.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="usernameTextField">Username</label>
                            <input type="text" className="form-control"
                                id="usernameTextField"
                                placeholder="Choose a username"
                                name="username"
                                value={user.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="emailTextField">Email</label>
                            <input type="email" className="form-control"
                                id="emailTextField"
                                placeholder="Enter your email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="passwordTextField">Password</label>
                            <input type="password" className="form-control"
                                id="passwordTextField"
                                placeholder="Enter your password"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <br />
                        <button className="btn btn-primary" type="submit">
                            <i className="fas fa-user-plus"></i>
                            Sign Up
                        </button>

                        <Link to="/signin" className="btn btn-link">
                            <i className="fas fa-sign-in-alt"></i>
                            Already have an account? Sign In
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;
