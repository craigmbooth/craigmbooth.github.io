# Craig's Homepage Build & Deploy Info

[![CircleCI](https://circleci.com/gh/craigmbooth/craigmbooth.github.io/tree/master.svg?style=svg)](https://circleci.com/gh/craigmbooth/craigmbooth.github.io/tree/master)

This is the source for my personal webpage.  This README contains some instructions on
how to build, test and deploy the site.

In 2020 this site was rebuilt with a new theme.  The last commit to the repo prior to
me overwriting everything was hash 0ed0e6143c1ced261bf6bfe8e8226cfcdc2026ce.

## Local Build and Serve

The site is served with Jekyll.  Make sure to install the required Ruby Gems
(`bundle install`) and then build and serve with `bundle exec jekyll serve`.

## CI and Linting

Running the CI script (`ci.sh`) will check a number of accessibility and code
things with [htmltest](https://github.com/wjdp/htmltest), and will check Markdown
style with [mdl](https://github.com/markdownlint/markdownlint).

To run CI locally, do a `bundle install` then `bundle exec ./ci.sh` from the root
of the repo.

Adding rules to mdl is currently a work in progress.  Many of them are disabled.
You can list the enabled rules with `mdl -l`, and see the list of disabled
rules by looking in the file `.mdl_style.rb`.
