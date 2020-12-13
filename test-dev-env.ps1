if ( $null -eq (Get-Command 'node' -ErrorAction SilentlyContinue)) {
    gs download and install nodejs
}

if ( $null -eq (Get-Command 'npm' -ErrorAction SilentlyContinue)) {
    gs install npm package manager
}

if (-not (Test-Path env:\AWS_SDK_LOAD_CONFIG)) {
    "AWS_SDK_LOAD_CONFIG env missing"
}

npm i
node .\main.js
