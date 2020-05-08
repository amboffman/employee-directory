import axios from "axios";

export default {
  getRandomEmployee: () => {
    return axios.get("https://randomuser.me/api/");
  },
};