import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
   const navigate =useNavigate()
  useEffect(() => {
    axios.get('https://api.restful-api.dev/objects')
    .then(response => setEmployees(response.data))
    .catch(error => console.error(error));

  }, []);

  return (
    <div className='employee'>
      <button className="back-button" onClick={() => navigate('/')}>
        Back to Home
      </button>
      <h1>Employee List</h1>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;