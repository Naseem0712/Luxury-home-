# Clean up script for Next.js development
Write-Host "Clearing Next.js build cache..." -ForegroundColor Green
Remove-Item -Path ".next" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path ".turbo" -Recurse -Force -ErrorAction SilentlyContinue

# Kill processes on common development ports
Write-Host "Releasing ports 3000-3007..." -ForegroundColor Green
3000..3007 | ForEach-Object {
    $port = $_
    $processIds = netstat -ano | Select-String ":$port " | ForEach-Object { ($_ -split '\s+')[5] }
    foreach ($processId in $processIds) {
        if ($processId -match '^\d+$') {
            try {
                Stop-Process -Id $processId -Force -ErrorAction SilentlyContinue
                Write-Host "Killed process $processId on port $port" -ForegroundColor Yellow
            } catch {
                Write-Host "Could not kill process $processId on port $port" -ForegroundColor Red
            }
        }
    }
}

# Start the development server
Write-Host "Starting development server..." -ForegroundColor Green
npm run dev 