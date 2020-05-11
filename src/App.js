import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './App.css';
import API from './utils/API';
import TableContent from './components/TableContent'
import TableHeader from './components/TableHeader'
import Table from 'react-bootstrap/Table';

function App() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

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

  const handleInputChange = (event) => setSearch(event.target.value);
  
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
        <TableContent employeeInfo={employees}/>
      </Table>
    </Container>
  );
}

export default App;
