---
layout: single
title: "Building a Ray Tracer from Scratch, #1: First Light"
excerpt: "Building a photo-realistic ray tracer from scratch"
tags: ["programming", "graphics"]
header:
  overlay_image: /assets/images/blog/raytracer/raytracer_header.png
  overlay_filter: 0.5
---

I really enjoy writing code, but for the past few years have been stuck in a bit of a rut where I don’t feel like I’m actually improving my skills much.  That’s just part of the downside of having moved into management.  I’m no longer coding all day every day.  I don’t think I’m forgetting how to code, but without it being my primary job I’m just not being pushed into doing better.  I miss just being able to sit down with a big technical challenge, getting my teeth in and just coding for hours, and then getting constant constructive feedback from my smarter peers.

So, when [this link](https://web.eecs.utk.edu/~azh/blog/morechallengingprojects.html) on challenging projects for programmers appeared on Hacker News the other day, it just caught my attention something fierce, and of the projects on there writing a ray tracer just jumped out as very interesting.

Sure, I don’t need one of these, and reality is that I’ll make a few photo-realistic images of... well, probably spheres floating above checkerboards.  Whatever.  I'll enjoy it and that's what matters.

In my teens and 20s I was really into [POVRay](http://www.povray.org/), and generated a whole number of scenes from scratch (sadly lost to time), and competed in various rendering competitions.  What if I could build something that gave me those capabilities, except I built it myself!

I quickly set myself a ground rule.  I want to build a ray tracer that can make a photorealistic image *using only the Python standard library*.  Meaning: no numpy for matrix operations, no scipy for anything.  If I need to do a thing, I have to learn the fundamentals and do it myself.  I figure this will be horrendously slow, but might be a fun target for thinking about optimization.

I immediately started researching, finding a few really good resources:

   * [Very Gentle Introduction to Computer Graphics Programming](https://www.scratchapixel.com/lessons/3d-basic-rendering/get-started)
   * [Ray Tracing in One Weekend](https://raytracing.github.io/)
   * [The Ray Tracer Challenge](https://smile.amazon.com/Ray-Tracer-Challenge-Test-Driven-Renderer/dp/1680502719)

The thing that caught me was that the basic algorithm of ray tracing is simple.  You’re making a picture full of pixels.  You fire a ray from your eye to each of the pixels (the opposite of how real sight works, naturally), and then:

   * Find where it strikes a surface.
   * Cast a ray from that point toward each light source to determine which lights illuminate that point.
   * If the surface is reflective, cast a new ray in the direction of reflection and recursively determine what color is reflected there.
   * If the surface is transparent, do the same thing in the direction of refraction.
   * Combine all colors that contribute to the point and return that as the color of the pixel.

That’s it!  Go pixel-by-pixel in an image and calculate its color by checking what it hits (and if it hits a reflective, or transparent thing doing a bit more tracing).

That said, the groundwork was *painful*.

I have always been embarrassed at how bad my linear algebra is.  During college (and shamefully through much of my postgraduate work) I could always perform the calculations on the exam, but I never really got the /why/ of them.  Actually working through, step-by-step, with a goal reminding me why I was doing these things was very powerful for me.  Although this isn’t a math book, I think I picked up more linear algebra intuition from this exercise than from my actual education.

Anyway, it’s slow going to start with, to build a ray tracer, you implement the atoms of the system (vectors, matrices, colors, canvases, intersections, rays) with little to show for it. Then, it all comes together at the same time.  You want me to grab a shape, spin it 270 degrees, make it five times taller, then throw it into the far distance?  Sure, I can do that in one line of code.

        new = old.RotX(270).Scale(1, 5, 1).Translate(0, 0, 15)
        
Under the hood that’s a bunch of linear algebra that I coded from scratch, but at this level, I just don’t need to know.  This moment, the one where you realize you are working at a good level of abstraction is a really good feeling in programming and working through building a ray tracer gave it to me in spades.  I gained comfort with the underlying matrix algebra by implementing it from scratch, but at the same time could write these simple one-liners to do really tough things.
        
![First image from the raytracer: A single, shiny sphere.](/assets/images/blog/raytracer/first_image.png){: .align-left}It’s around about here in a build that progress begins to feel tangible.  It’s no longer “I got my unit tests to pass”, but that “I managed to render this new thing”, and now we hit “first light”.  That's where I'll leave this first iteration on the raytracer, with my first image.  It's a single sphere, in purple.  It's simple, but every pixel in this image was generated by tracing light rays around the image and checking where they bounce.  Very cool!
