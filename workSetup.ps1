# This opens all the applications I need for work in a single script
# To use this script you need code, wt, chrome and slack in your PATH
Start-Process "code"
Start-Process wt -ArgumentList '-p "Windows PowerShell" powershell -NoExit -Command "boo"'
Start-Process "chrome" -ArgumentList "--profile-directory=""work"""
Start-Process "slack"

