from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root endpoint
@app.get("/")
def greeting():
    return JSONResponse({"message": "Welcome To Coastal Seven AGENTIC SDLC"})

# In-memory employee storage (like a temporary DB)
employees = {}
employee_id_counter = 1

# Create Employee
@app.post("/employees")
def create_employee(employee: dict):
    global employee_id_counter
    employee["id"] = employee_id_counter
    employees[employee_id_counter] = employee
    employee_id_counter += 1
    return {"message": "Employee created successfully", "employee": employee}

# Get Employee by ID
@app.get("/employees/{employee_id}")
def get_employee(employee_id: int):
    if employee_id not in employees:
        raise HTTPException(status_code=404, detail="Employee not found")
    return employees[employee_id]

# Update Employee
@app.put("/employees/{employee_id}")
def update_employee(employee_id: int, updated_data: dict):
    if employee_id not in employees:
        raise HTTPException(status_code=404, detail="Employee not found")
    employees[employee_id].update(updated_data)
    return {"message": "Employee updated successfully", "employee": employees[employee_id]}

# Delete Employee
@app.delete("/employees/{employee_id}")
def delete_employee(employee_id: int):
    if employee_id not in employees:
        raise HTTPException(status_code=404, detail="Employee not found")
    deleted = employees.pop(employee_id)
    return {"message": "Employee deleted successfully", "employee": deleted}
