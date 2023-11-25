let apiURL = process.env.REACT_APP_APIURL

const list = async () => {
    try {
        let response = await fetch(apiURL + '/product/list/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        // console.log('llega hasta aca');
        // console.log('response', await response.json())
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

// const create = async (product) => {
//     try {
//         let response = await fetch(apiURL + '/inventory/add/', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 // 'Authorization': 'Bearer ' + getToken()
//             },
//             body: JSON.stringify(product)
//         })
//         return await response.json()
//     } catch (err) {
//         console.log(err)
//     }
// }

// const read = async (id) => {
//     try {
//         let response = await fetch(apiURL + '/inventory/get/' + id, {
//             method: 'GET',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             }
//         })
//         return await response.json()
//     } catch (err) {
//         console.log(err)
//     }
// }

// const update = async (id, item) => {
//     try {
//         let response = await fetch(apiURL + '/inventory/edit/' + id, {
//             method: 'PUT',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 // 'Authorization': 'Bearer ' + getToken()
//             },
//             body: JSON.stringify(item)
//         })
//         return await response.json()
//     } catch (err) {
//         console.log(err)
//     }
// }

// const remove = async (id) => {
//     try {
//         let response = await fetch(apiURL + '/inventory/delete/' + id, {
//             method: 'DELETE',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + getToken()
//             }
//         })
//         return await response.json()
//     } catch (err) {
//         console.log(err)
//     }
// }

export { list /* , create, read, update, remove */ }