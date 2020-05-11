import React from 'react';


function TableData(props) {
 return (
    <tr key={props.key}>
      <td>{props.firstname}</td>
      <td>{props.lastname}</td>
      <td>{props.city}</td>
      <td>{props.state}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
    </tr>
 )

}

export default TableData;