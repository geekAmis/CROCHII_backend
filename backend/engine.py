from backend.microservice.sing_up.login import *

from fastapi.staticfiles import StaticFiles
app.mount("/Login_files", StaticFiles(directory="frontend/templates/Login_files"), name="static")