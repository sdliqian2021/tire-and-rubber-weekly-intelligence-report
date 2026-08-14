$ErrorActionPreference = "Stop"
$repository = Split-Path -Parent $PSScriptRoot
$githubPages = Split-Path -Parent $repository
$preview = Join-Path $githubPages "sdliqian2021.github.io\tools\preview_sites.py"
$python = Get-Command python -ErrorAction Stop

if (-not (Test-Path -LiteralPath $preview -PathType Leaf)) {
    throw "Unified preview tool not found: $preview"
}

Push-Location $repository
try {
    & $python.Source $preview @args
}
finally {
    Pop-Location
}
