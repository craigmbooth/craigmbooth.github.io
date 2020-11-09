---
title: Projects
excerpt: Sometimes I build things.  Here they are.
layout: single
author_profile: true
header:
  overlay_image: /assets/images/projects/projects_header.jpg
  overlay_filter: 0.5
---

This page contains links to a bunch of cool projects I've built, largely related to data analysis and visualization.  I hope you like them!

{% for project in site.data.projects %}
## {{ project.title }}
  
![{{project.img_alt}}]({{project.img}})

{{project.description}}
  
[Link]({{project.relative_url}})

{% endfor %}


