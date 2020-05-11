import React, { useEffect, useState } from 'react';
import TableRow from './TableRow'
import API from '../utils/API';

function TableContent() {

  const [employees, setEmployees] = useState([]);


  useEffect(() => {
    loadEmployees();
  }, []);

  function loadEmployees() {
    API.getRandomEmployees()
      .then(randomEmployees => {
        setEmployees(randomEmployees.data.results.map(
          employee => ({
            firstname: employee.name.first,
            lastname: employee.name.last,
            city: employee.location.city,
            state: employee.location.state,
            email: employee.email,
            phone: employee.phone,
            id: employee.id.value
          })
        ))
      })
      .catch((err) => console.log(err.message))
  }
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