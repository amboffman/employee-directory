import React from "react";

const TableRowContext = React.createContext({
  firstname: "",
  lastname: "",
  city: "",
  state: "",
  email: "",
  phone: ""
})

export default TableRowContext;
