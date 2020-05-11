import axios from "axios";

export default {
  getRandomEmployees: () => {
    return axios
      .get("https://randomuser.me/api/?results=20&nat=US"
      );
  },
};
