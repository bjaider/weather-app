import axios from 'axios'

export const location = (city) => {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/${city}/`)
    .then((response) => {
      /* console.log(response) */
      return response
    })
    .catch((e) => {
      console.log(e)
    })
}
