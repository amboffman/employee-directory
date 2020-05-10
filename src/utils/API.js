import axios from "axios";

export default {
  getRandomEmployee: () => {
    return axios
      .get("https://randomuser.me/api/?results=5000?nat=US")
      .then((res) => {
        const employees = res.data.results;
        const results = employees.map((employee) => {
          return {
            firstname: employee.name.first,
            lastname: employee.name.last,
            city: employee.location.city,
            state: employee.location.state,
            email: employee.email,
            phone: employee.phone
          };
        });
        return results;
      });
  },
};
