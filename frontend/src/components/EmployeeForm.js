import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ onSubmit, editingEmployee, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    department: '',
    salary: '',
    position: ''
  });

  useEffect(() => {
    if (editingEmployee) {
      setFormData({
        name: editingEmployee.name || '',
        age: editingEmployee.age || '',
        department: editingEmployee.department || '',
        salary: editingEmployee.salary || '',
        position: editingEmployee.position || ''
      });
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = {
      ...formData,
      age: parseInt(formData.age),
      salary: parseFloat(formData.salary)
    };
    onSubmit(submitData);
    if (!editingEmployee) {
      setFormData({
        name: '',
        age: '',
        department: '',
        salary: '',
        position: ''
      });
    }
  };

  return (
    <div className="card">
      <h2>{editingEmployee ? 'Edit Employee' : 'Add New Employee'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter employee name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age *</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              min="18"
              max="100"
              placeholder="Enter age"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="department">Department *</label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              placeholder="Enter department"
            />
          </div>
          <div className="form-group">
            <label htmlFor="salary">Salary *</label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
              placeholder="Enter salary"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Enter position (optional)"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            {editingEmployee ? 'Update Employee' : 'Add Employee'}
          </button>
          {editingEmployee && (
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;