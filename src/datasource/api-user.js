import { getToken } from "../component/auth/auth-helper"
let apiUrl = process.env.REACT_APP_APIURL;


const signin = async (user) => {
    try {
        const response = await fetch(apiUrl + '/users/signin/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            return await response.json();
        } else {
            throw new Error('Failed to sign in');
        }
    } catch (err) {
        console.error(err);
        throw new Error('Something went wrong during sign in');
    }
};

const register = async (user) => {
    try {
        const response = await fetch(apiUrl + '/users/create/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            return await response.json();
        } else {
            const errorResponse = await response.text();
            console.error('Registration failed. Server response:', errorResponse);
            throw new Error('Failed to sign up');
        }
    } catch (err) {
        console.error(err);
        throw new Error('Something went wrong during registration');
    }
};

const read = async (id) => {
    try {
        let response = await fetch(apiUrl + '/user/get/' + id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const update = async (id, item) => {
    try {
        let response = await fetch(apiUrl + 'user/edit/' + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify(item)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}


export { signin, register, read, update };

