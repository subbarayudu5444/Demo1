import React from 'react';

const EmployeeList = ({ employees, onEdit, onDelete, onView }) => {
  if (employees.length === 0) {
    return (
      <div className="card">
        <h2>Employee List</h2>
        <p style={{ textAlign: 'center', color: '#666', padding: '40px' }}>
          No employees found. Add some employees to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Employee List ({employees.length})</h2>
      <div className="employee-list">
        {employees.map((employee) => (
          <div key={employee.id} className="employee-card">
            <div className="employee-header">
              <h3 className="employee-name">{employee.name}</h3>
              <span className="employee-id">ID: {employee.id}</span>
            </div>
            
            <div className="employee-details">
              <div className="detail-item">
                <span className="detail-label">Age</span>
                <span className="detail-value">{employee.age} years</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Department</span>
                <span className="detail-value">{employee.department}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Salary</span>
                <span className="detail-value">${employee.salary.toLocaleString()}</span>
              </div>
              {employee.position && (
                <div className="detail-item">
                  <span className="detail-label">Position</span>
                  <span className="detail-value">{employee.position}</span>
                </div>
              )}
            </div>
            
            <div className="employee-actions">
              <button 
                className="btn btn-primary" 
                onClick={() => onView(employee.id)}
              >
                View Details
              </button>
              <button 
                className="btn btn-secondary" 
                onClick={() => onEdit(employee)}
              >
                Edit
              </button>
              <button 
                className="btn btn-danger" 
                onClick={() => onDelete(employee.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;