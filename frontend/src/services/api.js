import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const employeeAPI = {
  // Get welcome message
  getWelcome: () => api.get('/'),
  
  // Create new employee
  createEmployee: (employeeData) => api.post('/employees', employeeData),
  
  // Get employee by ID
  getEmployee: (id) => api.get(`/employees/${id}`),
  
  // Update employee
  updateEmployee: (id, employeeData) => api.put(`/employees/${id}`, employeeData),
  
  // Delete employee
  deleteEmployee: (id) => api.delete(`/employees/${id}`),
};

export default api;