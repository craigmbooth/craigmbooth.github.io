#!/bin/bash

set -ex

jekyll build

# Install htmltest, which does a couple of tests that htmlproofer doesn't
curl https://htmltest.wjdp.uk | bash

# skip-external:  We skip external link checking with htmltest because htmlproofer does it
HTMLTEST_OPTIONS="-c .htmltest.yml"

if [ -z "$1" ]; then
    echo "Scanning entire site"
    bin/htmltest ./_site $HTMLTEST_OPTIONS
else
    echo "Scanning page $1"
    bin/htmltest $1 $HTMLTEST_OPTIONS
fi

mdl .

