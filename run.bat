@echo off
start cmd /k "cd ttvg_client & npm install & npm start"

start cmd /k "cd ttvg_server & cd env/Scripts & activate.bat & cd ../.. & pip install -r requirement.txt & python back_end.py"
