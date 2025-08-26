# Coastal Seven - Employee Management System

## PROJECT_INFO
- project_name: Coastal Seven Employee Management System
- project_type: full_stack
- description: A full-stack employee management application built with FastAPI backend and React frontend for CRUD operations

## TECHNOLOGY_STACK
### Backend:
- language: python
- framework: fastapi
- version: 3.8+
- main_file: main.py

### Frontend:
- language: javascript
- framework: react
- build_tool: npm
- main_file: index.js

### Database:
- type: in-memory
- connection: embedded

## DEPLOYMENT_CONFIG
### Ports:
- backend_port: 8000
- frontend_port: 3000

### Environment:
- runtime_version: python 3.8+, node 16+
- os_requirements: any
- memory_requirements: 512MB

## BUILD_COMMANDS
### Backend:
```bash
cd backend
pip install -r requirements.txt
```

### Frontend:
```bash
cd frontend
npm install
npm run build
```

## RUN_COMMANDS
### Backend:
```bash
cd backend
uvicorn main:app --host 0.0.0.0 --port 8000
```

### Frontend:
```bash
cd frontend
npm start
```

## DEPENDENCIES
### Backend Dependencies:
- fastapi
- uvicorn

### Frontend Dependencies:
- react ^18.2.0
- react-dom ^18.2.0
- react-scripts 5.0.1
- axios ^1.6.0

## API_ENDPOINTS
- GET / - Welcome message
- POST /employees - Create employee
- GET /employees - List all employees
- GET /employees/{id} - Get employee by ID
- PUT /employees/{id} - Update employee
- DELETE /employees/{id} - Delete employee

## HEALTH_CHECK
- endpoint: /
- expected_response: {"message": "Welcome To Coastal Seven Employees Data"}

## DOCKER_INFO
- base_image: python:3.10-slim, node:18-alpine
- expose_ports: 8000, 3000
- working_directory: /app

---

**Coastal Seven AGENTIC SDLC Demo**