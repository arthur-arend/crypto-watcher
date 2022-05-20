#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f github.com:arthur-arend:crypto-watcher main:gh-pages

cd -