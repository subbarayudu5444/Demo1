from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --------------------
# Pydantic Model
# --------------------
class Employee(BaseModel):
    name: str
    age: int
    department: str
    salary: float
    position: Optional[str] = None  # optional field

# --------------------
# Root endpoint
# --------------------
@app.get("/")
def greeting():
    return JSONResponse({"message": "Welcome To Coastal Seven Employees Data"})

# --------------------
# In-memory database
# --------------------
employees = {}
employee_id_counter = 1

# --------------------
# Create Employee
# --------------------
@app.post("/employees")
def create_employee(employee: Employee):
    global employee_id_counter
    emp_data = employee.dict()
    emp_data["id"] = employee_id_counter
    employees[employee_id_counter] = emp_data
    employee_id_counter += 1
    return {"message": "Employee created successfully", "employee": emp_data}

# --------------------
# Get Employee by ID
# --------------------
@app.get("/employees/{employee_id}")
def get_employee(employee_id: int):
    if employee_id not in employees:
        raise HTTPException(status_code=404, detail="Employee not found")
    return employees[employee_id]

# --------------------
# Update Employee
# --------------------
@app.put("/employees/{employee_id}")
def update_employee(employee_id: int, updated_data: Employee):
    if employee_id not in employees:
        raise HTTPException(status_code=404, detail="Employee not found")
    employees[employee_id].update(updated_data.dict())
    return {"message": "Employee updated successfully", "employee": employees[employee_id]}

# --------------------
# Delete Employee
# --------------------
@app.delete("/employees/{employee_id}")
def delete_employee(employee_id: int):
    if employee_id not in employees:
        raise HTTPException(status_code=404, detail="Employee not found")
    deleted = employees.pop(employee_id)
    return {"message": "Employee deleted successfully", "employee": deleted}
