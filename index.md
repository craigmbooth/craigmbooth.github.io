---
layout: page
title: Welcome!
excerpt: "Craig M. Booth's Homepage"
search_omit: true
image:
  feature: headers/main_header.png
---

I am a software engineer, data scientist and expat currently living in Chicago, IL.  In the past I was an astrophysicist, working on high performance computing simulations of galaxy formation.  Currently, I am CTO at the EdTech startup [Packback](https://packback.co), where I am part of a team that helps inspire the curiosity inside of every student.  I was previously director of engineering at [Narrative Science](https://www.narrativescience.com)

<div class="row">
  <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12 front-box">
    <h4>Who Am I?</h4>
    <a href="{{ site.url }}/about/"><i class="fa fa-user fa-5x"></i></a>
    <p>A very brief sketch of who I am and what I do for a living</p>
  </div>
  <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12 front-box">
    <h4>Contact Me</h4>
    <a href="{{ site.url }}/contact/"><i class="fa fa-envelope-o fa-5x"></i></a>
    <p>Feel free to get in contact with me, either on- or off- line.</p>
  </div>
  <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12 front-box">
    <h4>Projects</h4>
    <a href="{{ site.url }}/projects/"><i class="fa fa-terminal fa-5x"></i></a>
    <p>I sometimes build data visualization projects, read about them here</p>
  </div>
  <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12 front-box">
    <h4>Publications</h4>
    <a href="{{ site.url }}/astrophysics/publications/"><span class="front-box-icon"><i class="fa fa-align-left fa-5x"></i></span></a>
    <p>I used to publish on computational astrophysics, here is a list of my papers.</p>
  </div>
  <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12 front-box">
    <h4>Writing</h4>
    <a href="{{ site.url }}/blog/"><span class="front-box-icon"><i class="fa fa-pencil fa-5x"></i></span></a>
    <p>I like to write about data, software and life</p>
  </div>
  <div class="col-md-4 col-lg-4 col-sm-6 col-xs-12 front-box">
    <h4>Visualizations</h4>
    <a href="{{ site.url }}/astrophysics/visualizations/"><i class="fa fa-video-camera fa-5x"></i></a>
    <p>I like to make movies from my cosmological simulations.</p>
  </div>
</div>

## My Most Recent Blog Posts

<ul class="post-list">
{% for post in site.posts limit:3 %}
  <li>
    <article>
      <a href="{{ post.url }}">
        {{ post.title }}
        <span class="entry-date">
          <time datetime="{{ post.date | date_to_xmlschema }}">
            {{ post.date | date: "%B %d, %Y" }}
          </time>
        </span>
        {% if post.excerpt %}
          <span class="excerpt">
            {{ post.excerpt }}
          </span>{% endif %}      </a>
    </article>
  </li>
{% endfor %}
</ul>
