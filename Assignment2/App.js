import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

const API_URL = 'https://dummy.restapiexample.com/api/v1';

const App = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const response = await fetch(`${API_URL}/employees`);
      const data = await response.json();
      setEmployees(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchEmployee = async () => {
    const employeeId = 1;

    try {
      const response = await fetch(`${API_URL}/employee/${employeeId}`);
      const data = await response.json();
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createEmployee = async () => {
    const employee = {
      name: 'John Doe',
      salary: '5000',
      age: '35'
    };

    try {
      const response = await fetch(`${API_URL}/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateEmployee = async () => {
    const employeeId = 21;
    const employee = {
      name: 'John Doe Updated',
      salary: '6000',
      age: '36'
    };

    try {
      const response = await fetch(`${API_URL}/update/${employeeId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteEmployee = async () => {
    const employeeId = 2;

    try {
      const response = await fetch(`${API_URL}/delete/${employeeId}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Employees:</Text>
      {employees.map(employee => (
        <Text key={employee.id}>{employee.employee_name}</Text>
      ))}
      <Button title="Fetch Employee" onPress={fetchEmployee} />
      <Button title="Create Employee" onPress={createEmployee} />
      <Button title="Update Employee" onPress={updateEmployee} />
      <Button title="Delete Employee" onPress={deleteEmployee} />
    </View>
  );
};

export default App;