#!/bin/bash

set -ex

jekyll build

# only_4xx:  Ignore all non-400s, because I get some timeouts when I run this locally
# allow_hash_href:  Allow href="#"
# enforce https:  Error if a non-https link is used
# url-ignore:  Twitter rate limits the CircleCI runners so the CI fails frequently
OPTIONS="--check_html --enforce_https --only_4xx --allow_hash_href --url-ignore /twitter.com/ --check_img_http"
if [ -z "$1" ]; then
    echo "Scanning entire site"
    htmlproofer ./_site $OPTIONS
else
    echo "Scanning page $1"
    htmlproofer $1 $OPTIONS
fi


