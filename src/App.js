import React from 'react';
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import TableContent from './components/TableContent'
import TableHeader from './components/TableHeader'
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  return (
    <Container>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Employee Directory</Navbar.Brand>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
      <Table striped bordered hover>
        <TableHeader />
        <TableContent />
      </Table>
    </Container>
  );
}

export default App;
