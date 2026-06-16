@echo off
set "ROOT=%~dp0"
start "StudyTrack Backend" cmd /k "pushd "%ROOT%backend" && python app.py"
start "StudyTrack Frontend" cmd /k "pushd "%ROOT%frontend" && npm run dev -- --host 0.0.0.0"
timeout /t 6 >nul
start "" "http://localhost:5173"
