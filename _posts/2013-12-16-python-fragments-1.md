---
layout: single
title: "Python Fragments #1: A Class With Immutable Attributes"
excerpt: Building a python class with unchangable attributes
tags: [python, programming]
header:
  overlay_color: "#0192CA"
---

This is the first of a series of posts I want to write about things I learn about the Python programming language. I have been a coder for many years, but it's only for the past month or so that I've worked outside of academia --- and with proper software engineers --- for the first time. I'm also for the first time focusing all my energies on a single language, Python, and as such I'm learning a lot.

Recently I have been working as part of a small team on a project that requires a number of small hardcoded dictionaries and constants to be passed around to virtually every function in the code. My first thought was to write a small class that had these things as attributes, essentially like a structure in C, and to pass the relevant parts of this structure to whatever functions needed them. This works just fine, but when other people started looking at the code, I found that it's all too easy for people to modify the attributes of this class, especially when they were passed into a function. If I were to do this again, I'd design better so that this isn't an issue, but rather than rewrite the entire codebase to use proper get methods for each of the attributes, or to explicitly import and use the relevant parts of the class in the correct modules, I wanted a quick fix that would just make the class immutable. Enter, this hack.

The basic idea is just to override __setattr__ and __delattr__ methods to raise an exception. Doing this alone doesn't get the job done because the object's __init__ method will try to use these methods to set its own attributes, so inside of __init__, we must then also use object.__setattr__ to set its attributes. Here's an example:

{% highlight python %}
class ClassWithImmutableAttributes(object):
    """Class has immutable attributes"""
    def __setattr__(self, *args):
        """Override __setattr__ to prevent attributes of this class from
        being changed.
        """
        raise AttributeError("Attributes of the %s class cannot be "
            "changed" % type(self).__name__)

    def __delattr__(self, *args):
        """Override __delattr__ to prevent attributes of this class from
        being deleted.
        """
        raise AttributeError("Attributes of the %s class cannot be "
            "deleted" % type(self).__name__)

    def __init__(self):
        """Attributes of this method can be accessed but not modified.
        Explicitly use object.__setattr__ to set attributes
        """
        object.__setattr__(self, "x", 1)
{% endhighlight %}

So there it is. Attributes that can't be changed.
