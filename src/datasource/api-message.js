// findThreadByProductId

import { getToken } from "../component/auth/auth-helper"



let apiURL = process.env.REACT_APP_APIURL

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

export { postQuestion}

