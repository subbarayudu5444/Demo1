import React from 'react';

const EmployeeDetails = ({ employee, onClose, onEdit, onDelete }) => {
  if (!employee) return null;

  return (
    <div className="card">
      <div className="employee-header">
        <h2>Employee Details</h2>
        <button className="btn btn-secondary" onClick={onClose}>
          Close
        </button>
      </div>
      
      <div className="employee-card">
        <div className="employee-header">
          <h3 className="employee-name">{employee.name}</h3>
          <span className="employee-id">ID: {employee.id}</span>
        </div>
        
        <div className="employee-details">
          <div className="detail-item">
            <span className="detail-label">Full Name</span>
            <span className="detail-value">{employee.name}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Age</span>
            <span className="detail-value">{employee.age} years old</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Department</span>
            <span className="detail-value">{employee.department}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Annual Salary</span>
            <span className="detail-value">${employee.salary.toLocaleString()}</span>
          </div>
          {employee.position && (
            <div className="detail-item">
              <span className="detail-label">Position</span>
              <span className="detail-value">{employee.position}</span>
            </div>
          )}
          <div className="detail-item">
            <span className="detail-label">Employee ID</span>
            <span className="detail-value">#{employee.id}</span>
          </div>
        </div>
        
        <div className="employee-actions">
          <button 
            className="btn btn-secondary" 
            onClick={() => onEdit(employee)}
          >
            Edit Employee
          </button>
          <button 
            className="btn btn-danger" 
            onClick={() => onDelete(employee.id)}
          >
            Delete Employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;