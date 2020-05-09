import React, {useContext} from 'react';
import TableContentContext from '../utils/TableContentContext'

function TableRow() {
  const { firstname, lastname, city, state, email, phone } = useContext(TableContentContext);
  return (
    <tr>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{city}</td>
      <td>{state}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  )
}

export default TableRow;