import axios from 'axios'

export const search = (city) => {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/search/?query=${city}`)
    .then((response) => {
      console.log(response)
      return response.data
    })
    .catch((e) => {
      console.log(e)
    })
}
