@echo off
REM Colors for Windows command prompt (limited support)
REM This script starts both frontend and backend servers on Windows

echo.
echo Starting Primo Group development servers...
echo.

REM Check if directories exist
if not exist "backend" (
    echo ERROR: backend directory not found. Are you in the project root?
    exit /b 1
)

if not exist "frontend" (
    echo ERROR: frontend directory not found. Are you in the project root?
    exit /b 1
)

REM Check for .env file in backend
if not exist "backend\.env" (
    echo WARNING: backend\.env not found. Please create it with required environment variables.
    echo Required: MONGO_URL, DB_NAME, CORS_ORIGINS
)

echo.
echo [INFO] Starting FastAPI backend...
cd backend
start "Primo Backend" python -m uvicorn server:app --reload --host 0.0.0.0 --port 8000
cd ..

timeout /t 2 /nobreak

echo [INFO] Starting React frontend...
cd frontend
start "Primo Frontend" cmd /k yarn start
cd ..

echo.
echo ===== Primo Group Development Environment =====
echo Frontend: http://localhost:3000
echo Backend:  http://localhost:8000
echo API Docs: http://localhost:8000/docs
echo.
echo [INFO] Press Ctrl+C in each terminal to stop the servers
echo.
pause
