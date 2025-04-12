# CLAUDE.md - Site Guide for Claude Code

## Repository Overview

This repository contains Craig Booth's personal website, hosted at [craigmbooth.github.io](https://craigmbooth.github.io/). It's a Jekyll-based static site using the Minimal Mistakes theme.

## Technology Stack

- **Static Site Generator**: Jekyll
- **Theme**: Minimal Mistakes
- **Hosting**: GitHub Pages
- **CI/CD**: Custom CircleCI setup via `ci.sh`
- **Domain**: Custom domain (craigmbooth.com) via CNAME file

## Site Structure

- **_posts/**: Blog posts organized by date (2013-2025)
- **_data/**: YAML configuration files (navigation, projects, publications)
- **_includes/**: Reusable HTML components
- **_layouts/**: Page layout templates
- **_sass/**: SCSS styling files
- **assets/**: Images, CSS, and JavaScript resources
- **projects/**: Individual project pages and resources
- **pages/**: Special standalone pages

## Key Files

- **_config.yml**: Main Jekyll configuration
- **Gemfile**: Ruby gem dependencies
- **ci.sh**: Continuous integration script
- **CNAME**: Custom domain configuration

## Common Development Tasks

### Local Development

```bash
bundle exec jekyll serve
```

### Creating New Blog Posts

Create a new file in `_posts/` with the format: `YYYY-MM-DD-title.md`

Include the front matter:

```yaml
---
title: "Post Title"
categories:
  - Category
tags:
  - tag1
  - tag2
header:
  image: /assets/images/path-to-header-image.jpg
---
```

### Creating New Projects

1. Add project details to `_data/projects.yml`
1. Create a new directory in `projects/` if needed
1. Add project assets to `assets/images/projects/`

### Adding Images

Store images in the appropriate directory under `assets/images/`

### Running Tests

```bash
./ci.sh
```

## Current Work

Current branch: `meditation` - Adding new meditation-related content

## Deployment

The site automatically deploys from the `master` branch via GitHub Pages.

To deploy changes:

1. Create a PR from your feature branch to `master`
1. Merge the PR after CI passes
1. GitHub Pages will build and deploy the site

## Reference Commands

### List all blog posts

```bash
find _posts -type f | sort
```

### Search for content

```bash
grep -r "search term" --include="*.md" .
```

### Find all image assets

```bash
find assets/images -type f
```

### Check site configuration

```bash
cat _config.yml
```
