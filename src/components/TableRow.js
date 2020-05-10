import React, { useContext } from 'react';
import TableContentContext from '../utils/TableContentContext'

function TableRow() {
  const { firstname, lastname, city, state, email, phone, id } = useContext(TableContentContext);
  const context = useContext(TableContentContext);

  const employeesArray = Object.keys(context).map(function(key) {
    return [Number(key), context[key]];
  });
  
  console.log(employeesArray)
  const employees = employeesArray.map((employee) => (
    <tr key={id}>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{city}</td>
      <td>{state}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  ))
  return (
    <tbody>
      {employees}
    </tbody >
  )
}

export default TableRow;