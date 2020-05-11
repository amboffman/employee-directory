import React from 'react';
import TableContent from './TableContent'
import TableHeader from './TableHeader'
import Table from 'react-bootstrap/Table';
function TableResults() {


  return(
    <Table striped bordered hover>
    <TableHeader />
    <TableContent />
    </Table>
  );
}

export default TableResults;