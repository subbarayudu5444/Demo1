# Coastal Seven - Employee Management Frontend

A React-based frontend application for managing employees, built to work with the FastAPI backend.

## Features

- ✨ Modern, responsive UI with gradient design
- 👥 Complete employee CRUD operations (Create, Read, Update, Delete)
- 📱 Mobile-friendly responsive design
- 🎨 Beautiful card-based layout
- ⚡ Real-time API integration with FastAPI backend
- 🔍 Employee details view
- ✏️ Inline editing capabilities

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- FastAPI backend running on http://localhost:8000

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit: http://localhost:3000

### Backend Setup

Make sure your FastAPI backend is running:

1. Navigate to the backend directory:
   ```bash
   cd ../backend
   ```

2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Start the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```

## Project Structure

```
frontend/
├── public/
│   └── index.html          # Main HTML template
├── src/
│   ├── components/         # React components
│   │   ├── EmployeeForm.js    # Form for adding/editing employees
│   │   ├── EmployeeList.js    # List view of all employees
│   │   └── EmployeeDetails.js # Detailed view of single employee
│   ├── services/
│   │   └── api.js          # API service layer
│   ├── App.js              # Main application component
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## API Integration

The frontend communicates with the FastAPI backend through the following endpoints:

- `GET /` - Welcome message
- `POST /employees` - Create new employee
- `GET /employees/{id}` - Get employee by ID
- `PUT /employees/{id}` - Update employee
- `DELETE /employees/{id}` - Delete employee

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Technologies Used

- **React 18** - Frontend framework
- **Axios** - HTTP client for API calls
- **CSS3** - Modern styling with gradients and animations
- **Create React App** - Build toolchain

## Features Overview

### Employee Management
- Add new employees with name, age, department, salary, and optional position
- View all employees in a beautiful card layout
- Edit existing employee information
- Delete employees with confirmation
- View detailed employee information

### UI/UX Features
- Responsive design that works on all devices
- Smooth animations and hover effects
- Loading states and error handling
- Success/error message notifications
- Modern gradient background and card-based layout

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is part of the Coastal Seven AGENTIC SDLC demonstration.