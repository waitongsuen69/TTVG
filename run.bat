@echo off
@REM To start the run.bat, `./run.bat` will install packages and run, `./run.bat run` will only startup the project.
if "%1"=="run" (
  call:runFunc
) else if "%1"=="install" (
  call:installFunc
) else (
  call:installFunc
  call:runFunc
)
goto:eof


:installFunc
cd ttvg_client && npm run installs
goto:eof

:runFunc
cd ttvg_client && npm install && npm start
goto:eof

@REM start cmd /k "cd ttvg_server & cd env/Scripts & activate.bat & cd ../.. & pip install -r requirement.txt & python back_end.py"
