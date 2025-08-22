# Coastal Seven - Employee Management System

A full-stack employee management application built with FastAPI (backend) and React (frontend).

## 🚀 Quick Start

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```
Backend runs on: http://localhost:8000

### Frontend Setup
```bash
cd frontend
npm install
npm start
```
Frontend runs on: http://localhost:3000

## 📁 Project Structure

```
Demo1/
├── backend/
│   ├── main.py              # FastAPI application
│   └── requirements.txt     # Python dependencies
├── frontend/
│   ├── src/                 # React source code
│   ├── public/              # Static files
│   └── package.json         # Node dependencies
└── README.md               # This file
```

## 🛠️ Technologies

**Backend:**
- FastAPI - Modern Python web framework
- Pydantic - Data validation
- CORS middleware - Cross-origin requests

**Frontend:**
- React 18 - UI framework
- Axios - HTTP client
- CSS3 - Modern styling

## 📋 Features

- ✅ Create employees
- ✅ View employee list
- ✅ Update employee details
- ✅ Delete employees
- ✅ Responsive design
- ✅ Real-time API integration

## 🔧 API Endpoints

- `GET /` - Welcome message
- `POST /employees` - Create employee
- `GET /employees/{id}` - Get employee
- `PUT /employees/{id}` - Update employee
- `DELETE /employees/{id}` - Delete employee

## 📱 Usage

1. Start both backend and frontend servers
2. Open http://localhost:3000 in your browser
3. Add, edit, view, and delete employees through the UI

## 🎯 Employee Fields

- **Name** (required) - Employee full name
- **Age** (required) - Employee age
- **Department** (required) - Work department
- **Salary** (required) - Annual salary
- **Position** (optional) - Job position

---

**Coastal Seven AGENTIC SDLC Demo**