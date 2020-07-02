#!/bin/bash

set -ex

jekyll build

# Install htmltest, which does a couple of tests that htmlproofer doesn't
curl https://htmltest.wjdp.uk | bash

# only_4xx:  Ignore all non-400s, because I get some timeouts when I run this locally
# allow_hash_href:  Allow href="#"
# enforce https:  Error if a non-https link is used
# url-ignore:  Twitter rate limits the CircleCI runners so the CI fails frequently
HTMLPROOFER_OPTIONS="--check_html --enforce_https --only_4xx --allow_hash_href --url-ignore /twitter.com/ --check_img_http"

# skip-external:  We skip external link checking with htmltest because htmlproofer does it
HTMLTEST_OPTIONS="--skip-external"

if [ -z "$1" ]; then
    echo "Scanning entire site"
    bin/htmltest ./_site $HTMLTEST_OPTIONS
    htmlproofer ./_site $HTMLPROOFER_OPTIONS
else
    echo "Scanning page $1"
    bin/htmltest $1 $HTMLTEST_OPTIONS
    htmlproofer $1 $HTMLPROOFER_OPTIONS
fi


