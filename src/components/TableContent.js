import React, { useEffect, useState } from 'react';
import TableContentContext from '../utils/TableContentContext'
import TableRow from './TableRow'
import API from '../utils/API';
import TableHeader from './TableHeader';

function TableContent() {

  const [employee, setEmployee] = useState({});
  const [employees, setEmployees] = useState({});


  useEffect(() => {
    loadEmployees();
  }, []);

  function loadEmployees() {
    API.getRandomEmployees()
      .then(randomEmployees => {
        setEmployee(randomEmployees[0])
        setEmployees(...randomEmployees)
      })
  }
  return (
    <TableContentContext.Provider value={{ ...employees }}>
      <TableHeader />
        <TableRow />
    </TableContentContext.Provider>
  );
}

export default TableContent;