#!/bin/sh
set -euo pipefail

yarn build
# Enable if desired
# yarn audit
yarn lint
yarn test:coverage
