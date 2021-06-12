const {default: axios} = require('axios')

export  const location = () => {
  axios
    .get(`${process.env.REACT_APP_API_URL}/44418/`)
    .then((response) => {
      console.log(response)
    })
    .catch((e) => {
      console.log(e)
    })
}
