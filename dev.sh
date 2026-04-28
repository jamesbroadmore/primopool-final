#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging functions
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Handle cleanup on exit
cleanup() {
    log_info "Shutting down development servers..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    wait $BACKEND_PID 2>/dev/null
    wait $FRONTEND_PID 2>/dev/null
    log_success "All servers stopped"
    exit 0
}

# Trap Ctrl+C and other termination signals
trap cleanup SIGINT SIGTERM EXIT

# Check if backend directory exists
if [ ! -d "backend" ]; then
    log_error "backend directory not found. Are you in the project root?"
    exit 1
fi

# Check if frontend directory exists
if [ ! -d "frontend" ]; then
    log_error "frontend directory not found. Are you in the project root?"
    exit 1
fi

log_info "Starting Primo Group development servers..."
echo ""

# Check for .env file in backend
if [ ! -f "backend/.env" ]; then
    log_warning "backend/.env not found. Please create it with required environment variables."
    log_warning "Required: MONGO_URL, DB_NAME, CORS_ORIGINS"
fi

# Start backend server
log_info "Starting FastAPI backend..."
cd backend
python -m uvicorn server:app --reload --host 0.0.0.0 --port 8000 &
BACKEND_PID=$!
cd ..

sleep 2

# Start frontend server
log_info "Starting React frontend..."
cd frontend
yarn start &
FRONTEND_PID=$!
cd ..

log_success "All servers started!"
echo ""
echo -e "${BLUE}=== Primo Group Development Environment ===${NC}"
echo -e "Frontend: ${GREEN}http://localhost:3000${NC}"
echo -e "Backend:  ${GREEN}http://localhost:8000${NC}"
echo -e "API Docs: ${GREEN}http://localhost:8000/docs${NC}"
echo ""
log_info "Press Ctrl+C to stop all servers"

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID
