---
layout: single
author_profile: false
title: Publications
excerpt: "Journal articles I published in astrophysics"
sidebar:
  - nav: astrophysics-sidebar
header:
  overlay_image: /assets/images/astrophysics/astrophysics_header.jpg
  overlay_filter: 0.5
---

# Publications

This page contains a list of my publications, including refereed publications, conference proceedings, a poster given as part of a public outreach effort and, finally, my PhD thesis.  For quick reference, first author papers are <mark class="highlight">highlighted</mark>.

<!-- No idea whay but the Google Scholar page 403s when htmlproofer tries to go there -->
My PhD thesis is available on this page and this list is available with citation statistics from <a href="https://scholar.google.com/citations?user=6FNQpXEAAAAJ" data-proofer-ignore>my Google Scholar page</a>.

## Refereed Publications

<ol reversed>
  {% for pub in site.data.publications %}
    <li>
      {% if pub.first_author %}
        <mark class="highlight">
      {% endif %}
      <em>{{pub.title}}</em><br>
      {% if pub.first_author %}
        </mark>
      {% endif %}

      {{pub.authors}}<br>
      {{pub.reference}}
      {% if pub.ads %}
        [<a href="https://adsabs.harvard.edu/abs/{{pub.ads}}">ADS</a>]
      {% endif %}
      {% if pub.arxiv %}
        [<a href="https://arxiv.org/abs/{{pub.arxiv}}">astro-ph</a>]
      {% endif %}
      {% if pub.html %}
        [<a href="{{pub.html}}">HTML</a>]
      {% endif %}
    </li>
  {% endfor %}
</ol>

## Conference Proceedings

<ol>
  <li>
    <em>Simulations of the Growth of Black Holes and Feedback from Active Galactic Nuclei</em><br />
    Booth C. M., Schaye J.<br />
    The Monster's Fiery Breath: Feedback In Galaxies, Groups, And Clusters. AIP Conference Proceedings, Volume 1201, pp. 21-24 (2009).
    [<a href="https://adsabs.harvard.edu/abs/2009AIPC.1201...21B">ADS</a>]
  </li>
</ol>

## Posters

<ol>
  <li>
    <em>Cosmic cookery: Growing galaxies in a computer</em><br />
    As part of the Durham team presenting our work at the Royal Society Summer Science Exhibition (2005), I designed a poster that stretches a cooking metaphor well past breaking point. [<a href="/astrophysics/rs05poster.pdf">ADS</a>]
  </li>
</ol>
