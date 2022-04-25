#!/bin/bash
# This script test that the Jekyll site in the current directory passes
# Markdown linting and a run through htmltest.
#
# Expected state:  mdl is available in the path, curl is installed
#
# Result:  Non-zero return code indicates failure.

set -ex

# Lint all of the markdown files in the source tree
mdl .

bundle exec jekyll build

# Install htmltest
curl https://htmltest.wjdp.uk | bash

HTMLTEST_OPTIONS="-c .htmltest.yml"

if [ -z "$1" ]; then
    echo "Scanning entire site"
    bin/htmltest ./_site $HTMLTEST_OPTIONS
else
    echo "Scanning page $1"
    bin/htmltest $1 $HTMLTEST_OPTIONS
fi



