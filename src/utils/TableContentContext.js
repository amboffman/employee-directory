import React from "react";

const TableRowContext = React.createContext({
  firstname: "",
  lastname: "",
  city: "",
  state: "",
  email: "",
  phone: "",
  id: ""
})

export default TableRowContext;
