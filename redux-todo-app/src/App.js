import React from 'react';
import { Routes, Route, NavLink ,Navigate} from 'react-router-dom';
import TodoList from './components/TodoList';
import EmployeeList from './components/EmployeeList';
import './App.css';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate =useNavigate()
  return (
    <div className='app-back'>
      <div className='app-head'>
      <button className="back-button" onClick={() => navigate('/')}>
        Back to Home
      </button><nav> 
        {/*    we use this nav here as links when we want to redirect to other page we can directly change to other routes by this we also used nav link where it sets the active to the link  with pout the use of any of usestate active if a route is selected  */}
          <ul>
            <li>
              <NavLink
                to="/todo-list"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Todo List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/employee-list"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Employee List
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path="/" element={<Navigate to="/todo-list" replace />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/employee-list" element={<EmployeeList />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
