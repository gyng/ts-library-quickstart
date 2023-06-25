#!/bin/sh
set -euo pipefail

mkdir -p docs/api
npm run doc:gen

echo "+ ls -la docs"
ls -la docs

echo "+ ls -la docs/api"
ls -la docs/api
