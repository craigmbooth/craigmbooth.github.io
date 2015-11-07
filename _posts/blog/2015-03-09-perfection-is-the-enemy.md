---
layout: post
title: "Perfection is the Enemy"
modified:
categories: blog
excerpt: "This website looks kinda different now"
tags: [website]
image:
feature:
---

One part of my own psychology that I hate is that I have the tendency to sit on projects and ideas, working away at them until I think they're 'perfect', and as a result much of what I do never sees the light of day.  This seeps into many areas of my life, not least of which would be the redesign of a website that I've been sitting on now for a couple of months

<blockquote class="twitter-tweet" lang="en"><p>Winter. Time for the yearly complete rewrite of my homepage. Finally going to break my ties to Wordpress.</p>&mdash; Craig Booth (@craigmbooth) <a href="https://twitter.com/craigmbooth/status/551407058390904834">January 3, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

In an effort to force myself to finish the ground-up rebuild of this website, I decided that I’d make the new design live today.  Sure, it has TODO messages and dead links, but on the whole it's working and I like how it looks, so here it goes.

I developed the previous version of this website when I was first learning CSS (and Wordpress forced me to pick up some PHP), but I have been largely unhappy with it for a while.  The whole site looked very much like a generic portfolio site, and behind the scenes, the HTML was janky enough that I had to do a whole bunch of workarounds to get certain things to render correctly, so I decided to rebuild.

Since it’s a ground-up rewrite, I also decided to revisit my decision to use Wordpress.  Initially, Wordpress was the de-facto choice because it has a vast army of plugins and pre-built themes, and once it's installed, you can get by largely by using the frontend.  However, there are a few reasons it's not right for me at the moment:

   * A big part of the reason I have this site is to have a playground for learning frontend development.  Wordpress feels like an extra layer of abstraction over the code, it always felt like I was designing for Wordpress, not designing a website.
   * For a simple blog, Wordpress feels like overkill.  Sure, it started out as a blogging platform, but has grown into an incredibly full-featured CMS.  Again, I felt like this complexity just meant that I was learning Wordpress, not learning code.
   * PHP.
   * Wordpress seems to update every couple of weeks, and some updates are incompatible with some plugins, and I've manually edited some plugins and those updates cause them to break and then I'm sad and hacking on PHP code that I don't understand on a Tuesday night.

In the end I settled on one of the more lightweight, flat frameworks, [Jekyll](http://jekyllrb.com), somewhere where I can just write in Markdown, use a simple templating language and then type 'jekyll build' and have a static site drop out the other side.  Outside of that I can just be involved with trying to write the best frontend code that I can.

For posterity's sake, here are some screencaptures of the old site, before they're lost to the depths of the Internet

<figure class="third">
  <a href="/images/blog/old-site/screencap1.png">
    <img src="/images/blog/old-site/screencap1.png" alt="image">
  </a>
  <a href="/images/blog/old-site/screencap2.png">
    <img src="/images/blog/old-site/screencap2.png" alt="image">
  </a>
  <a href="/images/blog/old-site/screencap3.png">
    <img src="/images/blog/old-site/screencap3.png" alt="image">
  </a>
  <a href="/images/blog/old-site/screencap4.png">
    <img src="/images/blog/old-site/screencap4.png" alt="image">
  </a>
  <a href="/images/blog/old-site/screencap5.png">
    <img src="/images/blog/old-site/screencap5.png" alt="image">
  </a>
  <a href="/images/blog/old-site/screencap6.png">
    <img src="/images/blog/old-site/screencap6.png" alt="image">
  </a>
</figure>
