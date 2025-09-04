# PowerShell script to clean up font declarations
$content = Get-Content "src\style.css" -Raw

# Remove all Inter font declarations
$content = $content -replace "  font-family: 'Inter', Arial, sans-serif;`r?`n", ""

# Remove any inherit font declarations we want to clean up
$content = $content -replace "  font-family: inherit;`r?`n", ""

# Write back to file
Set-Content "src\style.css" -Value $content -NoNewline
Write-Host "Font cleanup complete!"
