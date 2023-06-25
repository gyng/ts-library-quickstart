#!/bin/sh
set -euo pipefail

npm run build
# Enable if desired
# npm audit
npm run lint
npm run test:coverage
