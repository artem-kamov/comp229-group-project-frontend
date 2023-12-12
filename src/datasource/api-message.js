// findThreadByProductId

import { getToken } from "../component/auth/auth-helper"



let apiURL = process.env.REACT_APP_APIURL

const postAnswer = async (message) => {
    try {
        let response = await fetch(apiURL + '/messages/create-answer', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getToken()
            },
            body: JSON.stringify(message)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
  }
  
const findThreadByProductId = async (productId) => {
    try {
        let response = await fetch(apiURL + '/messages/get-product-messages/' + productId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

const postQuestion = async (message) => {
  try {
      let response = await fetch(apiURL + '/messages/create-question', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + getToken()
          },
          body: JSON.stringify(message)
      })
      return await response.json()
  } catch (err) {
      console.log(err)
  }
}

export { postQuestion, findThreadByProductId, postAnswer}

