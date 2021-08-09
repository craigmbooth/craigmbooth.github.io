#!/bin/bash

set -ex

# Lint all of the markdown files in the source tree
mdl .

jekyll build

# Install htmltest, which does a couple of tests that htmlproofer doesn't
curl https://htmltest.wjdp.uk | bash

HTMLTEST_OPTIONS="-c .htmltest.yml"

if [ -z "$1" ]; then
    echo "Scanning entire site"
    bin/htmltest ./_site $HTMLTEST_OPTIONS
else
    echo "Scanning page $1"
    bin/htmltest $1 $HTMLTEST_OPTIONS
fi



