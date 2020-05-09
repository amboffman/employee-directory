import React, { useEffect, useState } from 'react';
import TableContentContext from '../utils/TableContentContext'
import TableRow from './TableRow'
import API from '../utils/API';
import TableHeader from './TableHeader';

function TableContent() {

  const [employee, setEmployee] = useState({});

  useEffect(() => {
    loadEmployees();
  }, []);

  function loadEmployees() {
    API.getRandomEmployee()
      .then(randomEmployee => {
        setEmployee(randomEmployee[0])
      })
  }
  return (
    <TableContentContext.Provider value={{ ...employee }}>
      <TableHeader />
      <tbody>
        <TableRow />
      </tbody>
    </TableContentContext.Provider>
  );
}

export default TableContent;