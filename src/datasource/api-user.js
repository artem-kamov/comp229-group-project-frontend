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

export { signin };