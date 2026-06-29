# OmniPlatform Deployment Script
# This script deploys the project to Vercel

$ErrorActionPreference = "Stop"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  OmniPlatform Deployment Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Vercel CLI is installed
$vercelInstalled = Get-Command vercel -ErrorAction SilentlyContinue
if (-not $vercelInstalled) {
    Write-Host "Vercel CLI not found. Installing..." -ForegroundColor Yellow
    npm install -g vercel
}

# Read Vercel token from .env.local
$envFile = Get-Content .env.local -Raw
$tokenMatch = $envFile | Select-String -Pattern 'VERCEL_TOKEN=(.+)' -Match
if (-not $tokenMatch) {
    Write-Host "Error: VERCEL_TOKEN not found in .env.local" -ForegroundColor Red
    exit 1
}
$token = $tokenMatch.Matches[0].Groups[1].Value.Trim()

Write-Host "Deploying to Vercel..." -ForegroundColor Green
Write-Host ""

# Deploy with Vercel
vercel --prod --token $token --yes

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  Deployment Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Your site is now live on Vercel!" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Run the SQL schema in Supabase Dashboard" -ForegroundColor White
Write-Host "2. Configure OAuth providers in Supabase" -ForegroundColor White
Write-Host "3. Set up storage buckets in Supabase" -ForegroundColor White
