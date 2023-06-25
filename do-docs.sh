#!/bin/sh
set -euo pipefail

mkdir -p docs/api
npm run doc:gen
ls docs/api
