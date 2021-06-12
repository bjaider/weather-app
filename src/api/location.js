import axios from 'axios'

export const location = () => {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/368148/`)
    .then((response) => {
      /* console.log(response) */
      return response
    })
    .catch((e) => {
      console.log(e)
    })
}
