import React, { useState, useEffect } from 'react';
import { employeeAPI } from './services/api';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';

function App() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [viewingEmployee, setViewingEmployee] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [welcomeMessage, setWelcomeMessage] = useState('');

  useEffect(() => {
    fetchWelcomeMessage();
  }, []);

  const fetchWelcomeMessage = async () => {
    try {
      const response = await employeeAPI.getWelcome();
      setWelcomeMessage(response.data.message);
    } catch (error) {
      console.error('Error fetching welcome message:', error);
    }
  };

  const showMessage = (text, type = 'success') => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 3000);
  };

  const handleCreateEmployee = async (employeeData) => {
    setLoading(true);
    try {
      const response = await employeeAPI.createEmployee(employeeData);
      setEmployees(prev => [...prev, response.data.employee]);
      showMessage('Employee created successfully!');
    } catch (error) {
      showMessage('Error creating employee: ' + (error.response?.data?.detail || error.message), 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateEmployee = async (employeeData) => {
    setLoading(true);
    try {
      const response = await employeeAPI.updateEmployee(editingEmployee.id, employeeData);
      setEmployees(prev => 
        prev.map(emp => emp.id === editingEmployee.id ? response.data.employee : emp)
      );
      setEditingEmployee(null);
      showMessage('Employee updated successfully!');
    } catch (error) {
      showMessage('Error updating employee: ' + (error.response?.data?.detail || error.message), 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleViewEmployee = async (id) => {
    setLoading(true);
    try {
      const response = await employeeAPI.getEmployee(id);
      setViewingEmployee(response.data);
    } catch (error) {
      showMessage('Error fetching employee details: ' + (error.response?.data?.detail || error.message), 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteEmployee = async (id) => {
    if (!window.confirm('Are you sure you want to delete this employee?')) {
      return;
    }
    
    setLoading(true);
    try {
      await employeeAPI.deleteEmployee(id);
      setEmployees(prev => prev.filter(emp => emp.id !== id));
      setViewingEmployee(null);
      showMessage('Employee deleted successfully!');
    } catch (error) {
      showMessage('Error deleting employee: ' + (error.response?.data?.detail || error.message), 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
    setViewingEmployee(null);
  };

  const handleCancelEdit = () => {
    setEditingEmployee(null);
  };

  const handleCloseDetails = () => {
    setViewingEmployee(null);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Coastal Seven</h1>
        <p>{welcomeMessage || 'Employee Management System'}</p>
      </div>

      {loading && <div className="loading">Loading...</div>}
      
      {message && (
        <div className={messageType === 'error' ? 'error' : 'success'}>
          {message}
        </div>
      )}

      {viewingEmployee ? (
        <EmployeeDetails
          employee={viewingEmployee}
          onClose={handleCloseDetails}
          onEdit={handleEditEmployee}
          onDelete={handleDeleteEmployee}
        />
      ) : (
        <>
          <EmployeeForm
            onSubmit={editingEmployee ? handleUpdateEmployee : handleCreateEmployee}
            editingEmployee={editingEmployee}
            onCancel={handleCancelEdit}
          />
          
          <EmployeeList
            employees={employees}
            onEdit={handleEditEmployee}
            onDelete={handleDeleteEmployee}
            onView={handleViewEmployee}
          />
        </>
      )}
    </div>
  );
}

export default App;