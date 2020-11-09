---
layout: single
title: "Deadfish~ in Python"
excerpt: Implementing a joke programming language in Python
tags: ["python", "programming"]
header:
  overlay_color: "#0192CA"
---

So, apparently implementing the joke programming language <a href="https://esolangs.org/wiki/Deadfish">Deadfish</a> in FORTRAN77 wasn't enough of a futile exercise, I also found a page about the as-yet-unimplemented language <a href="https://esolangs.org/wiki/Deadfish~">Deadfish~</a>, which is a superset of Deadfish and is similarly frustratingly useless,  adding an amusingly unusable implementation of looping and conditionals, as well as the ability to print out "Hello, World!" with a single keypress.

So, naturally, I wrote an interpreter for Python, which is up on github <a href="https://github.com/craigmbooth/deadfish">here</a>.  Please, please, never try to use it for anything.

{% highlight python %}
>>iisiiiis{ic}{ic}icicicicicic
ABCDEFGHIJKLMNOPQRSTUVWXYZ
>>{{ "{{d" }}}}
>>iisssoiissiso
0289
>>w
Hello, World!
{% endhighlight %}
