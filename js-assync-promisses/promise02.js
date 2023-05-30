import axios from "axios";

axios
  .get("https://api.github.com/user/robert-sampaio")
  .then((res) => console.log(res.data));
