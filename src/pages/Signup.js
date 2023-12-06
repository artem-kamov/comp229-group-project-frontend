import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [showAlreadyHaveAccount, setShowAlreadyHaveAccount] = useState(false);

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("User already exists");
          } else if (res.data === "notexist") {
            history("/Home", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="login">
      <style>
        {`
          .login {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          form {
            display: flex;
            flex-direction: column;
            align-items: flex-start; /* Align form items to the left */
          }

          form label {
            margin-bottom: 5px;
          }

          form input {
            margin-bottom: 10px;
          }

          .already-have-account {
            margin-top: 20px;
          }

          .already-have-account p {
            margin-bottom: 10px;
          }

          .already-have-account-button {
            background-color: #f0f0f0;
            border: none;
            padding: 10px;
            cursor: pointer;
          }
        `}
      </style>

      <h1>Signup</h1>

      <form action="POST">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          placeholder="First Name"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />

        <input type="submit" onClick={submit} />
      </form>

      {showAlreadyHaveAccount && (
        <div className="already-have-account">
          <p>
            Already have an account? <Link to="/Login">Login Page</Link>
          </p>
        </div>
      )}

      <button
        className="already-have-account-button"
        onClick={() => {
          setShowAlreadyHaveAccount(true);
        }}
      >
        I already have an account
      </button>
    </div>
  );
}

export default Signup;
