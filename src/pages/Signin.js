import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { signin } from "../datasource/api-user.js";
import { authenticate } from '../component/auth/auth-helper.js';

const Signin = () => {
    const { state } = useLocation();
    const { from } = state || { from: { pathname: '/' } };

    let navigate = useNavigate();

    const [errorMsg, setErrorMsg] = useState('');
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        signin(user).then((data) => {
            if (data && data.success) {
                authenticate(data.token, () => {
                    navigate(from, { replace: true });
                });
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
                <div className="col-md-6 offset-md-3">
                    <div className="signin-container">
                        <h1 className="signin-heading">Sign In</h1>
                        <p className="flash"><span>{errorMsg}</span></p>
                        <form onSubmit={handleSubmit} className="signin-form">
                            <div className="form-group">
                                <label htmlFor="emailTextField">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="emailTextField"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={user.email || ''}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="passwordTextField">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="passwordTextField"
                                    placeholder="Enter your password"
                                    name="password"
                                    value={user.password || ''}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button className="btn btn-primary" type="submit">
                                Sign In
                            </button>
                            <Link to="/" className="btn btn-warning">
                                Cancel
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;