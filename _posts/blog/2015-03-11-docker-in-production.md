---
layout: post
title: "Docker in Production: Reality, Not Hype"
modified:
categories: blog
excerpt: "Notes from a DevOps meetup"
tags: [devops, docker, meetup]
image:
feature:
---

Earlier this year, I attended the DevOps Days Chicago conference and one of the talks that stuck with me was by [Bridget Kromhout](https://bridgetkromhout.com/), who stepped up at the start of the conference and gave a great talk, demystifying a bit of DevOps jargon for the rest of us (unicorns? pigs? goats in silos? cats? I don't even know).

Earlier this week, we were lucky enough to have Orbitz host a meetup, where Bridget would return and give us a warts and all discussion of what it was like to have been running Docker in production since version 0.something, back when the Docker website proudly sported a message telling you not to use Docker in production.

I took a lot of notes, but rather than rehashing the entire talk I thought it would be fun just to run through five interesting things I learned

<figure class="half">
<a href="{{ site.url }}/images/blog/docker-meetup/meetup.jpg"><img src="{{ site.url }}/images/blog/docker-meetup/meetup.jpg" alt="Picture from the meetup"></a>
<a href="{{ site.url }}/images/blog/docker-meetup/meetup2.jpg"><img src="{{ site.url }}/images/blog/docker-meetup/meetup2.jpg" alt="Picture from the meetup"></a>
</figure>

## The Distributed, Private Docker Registry

Rather than relying on a centralized Docker Registry, DramaFever (Bridget's company) have decentralized their Docker registries, which basically means that every machine, from production servers to developer laptops is running a Docker container that acts as a local Docker registry.

This stops a single registry instance from getting overloaded when a ton of machines spin up at the same time.  A very neat idea, I think.

## Micro Images

Docker images get big.  When you build from the base Ubuntu image, you're looking at half a GB or upwards, before you even build your software on top of that.

Bridget pointed out that if you're optimizing for size and speed of deployment, there is a base Docker image named `scratch`, which is 0B in size.  You can simply layer your code on top of `scratch` until it works.

That said, this is an optimization, and it will be much more work to get this functional.  For example, want to grab logs from `/var/logs`? Well, you better remember to set up the file system first.  If it turns out that deploy-speed is a pain point in your infrastructure, this is an option to speed things up, but it will require quite some work.

## CloudWatch and Graphite

We saw a beautiful flowchart of how DramaFever does monitoring.  On there was an arrow, pointing from Amazon's CloudWatch to Graphite.  An audience member asked what that arrow was for, and we learned that it was because dumping data in Graphite would allow it to persist past the arbitrary AWS limit (two months?).

At DramaFever they run a cronjob on the Graphite server that pulls down CloudWatch metrics for the sole purpose of having them available for longer than Amazon gives them to you.  A very pragmatic workaround to one of my little annoyances with CLoudWatch.  Speaking of which...

## Be Pragmatic

The title on this section is not something that was said, but rather something that was demonstrated very ably.  Working in operations is pretty much as far away from an isolated sandbox as you can get.  It is totally inevitable that there will be race conditions and mysterious bugs and network failures when dozens of complex systems are talking to one another.

In an ideal world we would all have the time to figure out the root cause of every single issue, take apart the code that is causing it and fix it.  In the real world, we need things to work today.  One example I liked was when talking a very specific intermittent bug, with a very recognizable error message (``error getting container init rootfs``), which was discovered to be due to the Red Hat file system, the solution was simply to install the  [naginator](https://wiki.jenkins-ci.org/display/JENKINS/Naginator+Plugin) plugin for Jenkins.  This plugin does nothing but repeat a build if a certain error message happens, stopping much heartache when this random race condition from outside of your control crashes a build.

## Why Docker

One of the last questions asked at the talk was whether Docker was better than a well configured Chef and/or Ansible setup.  The answer was yes, because you know what you are getting.  If a Docker container is running and has a certain ID, you can be very certain that what's inside it is what you expect.

This is certainly not the case with Chef builds, and I can imagine that working in a world where you have this feeling of safety would make everything a lot easier.
