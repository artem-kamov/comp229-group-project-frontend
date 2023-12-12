import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faUndo } from '@fortawesome/free-solid-svg-icons';
import { read, update } from "../../datasource/api-user";
import UserModel from "../../datasource/userModel";

 const EditProfile = () => {
    let navigate =  useNavigate();
    let [user, setUser] =  useState(new UserModel());

    useEffect(()=>{
        const id = sessionStorage.getItem('id');
        read(id).then((data)=>{
            if (data) {
                setUser(new UserModel(
                    data.selectedUser.id,
                    data.selectedUser.email,
                    data.selectedUser.username,
                    data.selectedUser.password,
                    ));
            }
        }).catch(err => {
            alert(err.message);
            console.log(err)
        });
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let updatedUser = {
            email: user.email,
            username: user.username,
            password: user.password,
        }

        update(user.id, updatedUser).then(data => {
            if (data && data.success) {
                alert(data.message);
                navigate("/products/list");
            }
            else {
                alert(data.message);
            }
        }).catch(err => {
            alert(err.message);
            console.log(err)
        });
    };

    return (
        <div className="container" style={{ paddingTop: 80 }}>
            <div className="row">
                <div className="offset-md-3 col-md-6">
                    <form onSubmit={handleSubmit} className="form">
                        <div className="form-group">
                            <label htmlFor="emailTextField">Enter New Email: </label>
                            <input type="text" className="form-control"
                                id="emailTextField"
                                placeholder="example@domain.com "
                                name="email"
                                value={user.email || ''}
                                onChange={handleChange}
                                required>
                            </input>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="usernameTextField">Enter New Username</label>
                            <input type="text" className="form-control"
                                id="usernameTextField"
                                placeholder="your_username "
                                name="username"
                                value={user.username || ''}
                                onChange={handleChange}
                            >
                            </input>
                        </div>
                        <br />
                        <div className="form-group">
                            <label htmlFor="passwordTextField">Enter New Password</label>
                            <input type="password" className="form-control"
                                id="passwordTextField"
                                placeholder=""
                                name="password"
                                value={user.password || ''}
                                onChange={handleChange}
                                required>
                            </input>
                        </div>
                        <br />
                        <button className="btn btn-primary" type="submit">
    <FontAwesomeIcon icon={faEdit} />
    Submit
</button>

<Link href="#" to="/products/list" className="btn btn-warning">
    <FontAwesomeIcon icon={faUndo} />
    Cancel
</Link>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
