import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signin } from "../../datasource/api-user.js";
import { authenticate } from '../auth/auth-helper.js';

const Signin = () => {
  const { state } = useLocation();
  const { from } = state || { from: { pathname: '/' } };
  const navigate = useNavigate();

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

    signin(user)
      .then((data) => {
        if (data && data.success) {
          authenticate(data.token, () => {
            navigate(from, { replace: true });
          });
        } else {
          setErrorMsg(data.message);
        }
      })
      .catch(err => {
        setErrorMsg(err.message);
        console.log(err);
      });
  };

  return (
    <div className="container" style={{ paddingTop: 80, marginBottom: 40 }}>
      <div className="row">
        <div className="offset-md-3 col-md-6">
          <h1>Sign in</h1>
          <p className="flash"><span>{errorMsg}</span></p>
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group" style={{ textAlign: 'left' }}>
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
            <br />
            <div className="form-group" style={{ textAlign: 'left' }}>
              <label htmlFor="passwordTextField">Password</label>
              <input
                type="password"
                className="form-control"
                id="passwordTextField"
                placeholder=""
                name="password"
                value={user.password || ''}
                onChange={handleChange}
                required
              />
            </div>
            <br />
            <div style={{ marginTop: "10px" }}>
              <button className="btn btn-primary" type="submit" style={{ marginRight: "10px" }}>
                <i className="fas fa-edit"></i>
                Submit
              </button>
              <Link to="/products/list" className="btn btn-warning">
                <i className="fas fa-undo"></i>
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
      <footer>
       
      </footer>
    </div>
  );
};

export default Signin;
