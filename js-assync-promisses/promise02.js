const axios = require("axios");

axios
  .get("https://api.github.com/users/robert-sampaio")
  .then((response) => {
    const user = response.data;

    return axios.get(user.repos_url);
  })
  .then((repos) => console.log(repos.data))
  .catch((error) => console.log(error));
