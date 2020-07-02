---
layout: page
title: Projects
excerpt: "Py Projects"
image:
  feature: headers/projects_header.jpg
---

This page contains links to a bunch of cool projects I've built, largely related to data analysis and visualization.  I hope you like them!

{% for project in site.data.projects %}
<div class="row">
  <div class="col-md-4">
    <a href="{{project.relative_url}}"><img src="{{project.img}}" alt="{{project.img_alt}}"></a>
  </div>
  <div class="col-md-8">
    <h4>{{project.title}}</h4>
    <p>{{project.description}}</p>
  </div>
</div>
{% endfor %}
