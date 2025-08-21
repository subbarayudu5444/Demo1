from fastapi import FastAPI
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
@app.get("/")
def greeting():
    return JSONResponse({"message": "Welcome To Coastal Seven AGENTIC SDLC"})
@app.get("/hello")
def read_hello():
    return JSONResponse({"message": "Hello from FastAPI Backend!"})
