let apiURL = process.env.REACT_APP_APIURL;

const signin = async (credentials) => {
    try {
        let response = await fetch(apiURL + '/user/signin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const list = async () => {
    try {
        let response = await fetch(apiURL + '/user/list', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const create = async (user) => {
    try {
        let response = await fetch(apiURL + '/user/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const read = async (userId) => {
    try {
        let response = await fetch(apiURL + '/user/get/' + userId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const update = async (userId, updatedUser) => {
    try {
        let response = await fetch(apiURL + '/user/edit/' + userId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const remove = async (userId) => {
    try {
        let response = await fetch(apiURL + '/user/delete/' + userId, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

const setAdmin = async (userId) => {
    try {
        let response = await fetch(apiURL + '/user/setadmin/' + userId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};

export { signin, list, create, read, update, remove, setAdmin };
