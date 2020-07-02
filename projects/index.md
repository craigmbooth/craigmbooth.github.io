---
layout: page
title: Projects
excerpt: "Py Projectse"
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

<!--
<div class="row">
  <div class="col-md-4">
    <a href="hubble/"><img src="images/hubble.png"></a>
  </div>
  <div class="col-md-8">
    <h4>The Height and Weight of Every NFL Player, Visualized</h4>
    <p>I used a web spider to crawl stack overflow for every tagged question. I then used this data to construct a huge graph showing how all of the different tags are related. In essence forming a topographical map of how all of computing is interrelated. I then put this map into a zoomable, Google maps style interface.</p>
  </div>
</div>

<div class="row">
  <div class="col-md-8">
    <h4>Household Infrared Photography</h4>
    <p>I used a web spider to crawl stack overflow for every tagged question. I then used this data to construct a huge graph showing how all of the different tags are related. In essence forming a topographical map of how all of computing is interrelated. I then put this map into a zoomable, Google maps style interface.</p>
  </div>
  <div class="col-md-4">
    <a href="hubble/"><img src="images/hubble.png"></a>
  </div>
</div>
-->
