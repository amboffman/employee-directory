import React, { useEffect, useState } from 'react';
import TableRow from './TableRow'
import API from '../utils/API';

function TableContent(props) {
const employees=props.employeeInfo;
  return (
    <tbody>
      {employees.map((employee) => (
        <TableRow
          key={employee.id}
          firstname={employee.firstname}
          lastname={employee.lastname}
          city={employee.city}
          state={employee.state}
          email={employee.email}
          phone={employee.phone}
        />
      ))}
    </tbody>
  );
}

export default TableContent;