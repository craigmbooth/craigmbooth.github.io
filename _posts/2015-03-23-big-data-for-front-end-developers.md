---
layout: single
title: "Big Data for Front End Developers"
excerpt: "Teaching a Big Data for frontend developers class"
tags: [big data, teaching]
header:
  overlay_color: "#0192CA"
---

One of the things I'm very happy that my employer, [Narrative Science](https://www.narrativescience.com), has done is put me in contact with the Chicago tech community.  Through them, I have taught an occasional session at the [Startup Institute](https://startupinstitute.com). The Startup Institute is a great program that takes people who are interested in getting jobs in tech startups and turns them into very, very able employees.  I've been nothing but impressed by all of my interactions with the Startup Institute students.

In the past I have taught, as an Adjunct Instructor, a course on Big Data to the Startup Institute's cohort of back end engineers.  This coming April, I'm going to take on a slightly different challenge and teach the same session to front end developers.  This requires some refocusing of the material and I thought I'd write down a few of the ideas I've had around refactoring this backend-heavy material into something that is more widely applicable.

# Goal of the Session:  The Obligation to Dissent

Shortly after I first started working at a startup, I read the book [How Google Works](https://www.amazon.com/How-Google-Works-Eric-Schmidt-ebook/dp/B00HUU13Y0).  A very readable summary of how Google operates as a company, how they are structured, and their culture.

One part of the book stood out to me, and changed how I approached my work was this:

> For a meritocracy to work, it needs to engender a culture where there is an “obligation to dissent”.  If someone thinks there is something wrong with an idea, they must raise that concern. If they don’t, and if the subpar idea wins the day, then they are culpable.

The word 'obligation' is important here.  Personally I tend to avoid confrontation, and in my old line of work would need to be cajoled pretty heavily into participating in big group discussions, but I did take obligatory dissent on board, even though it was initially something that I had to force myself to do, heart pounding.  I have to say that having this obligation has made me a much better engineer, and by not allowing myself to check out of meetings that aren't directly relevant to my own immediate interests has made me more well rounded.

The obligation to dissent is especially critical in a small startup where, say, five engineers may be responsible for the design and implementation of entire products.  It is absolutely the responsibility of every engineer to understand, at least at a high level, the decisions that are being made.  You can't be an expert on everything, but you should at least know enough to be able to critically analyze and discuss what your peers are saying.

It is this mindset that I want to bring to Big Data for Front End Engineers.

# Overview:  Everything is Tradeoffs

We only have two hours, so we're not going to take a deep dive into technologies, instead I'm aiming to do two things:

   1. Survey the landscape of Big Data, and show the basic concepts and tradeoffs that need to be made.  Do I need to be accurate? or fast?  Do I need to be consistent? or accessible?
   2. Understand how the rising volumes of data are going to affect everybody.  Focus on what we will all need to do to keep running in the face of ever growing data requirements.

I think that every developer at a startup should be able to reason effectively about the problems posed by large volumes of data, and I hope to be able to communicate at least the outlines of a roadmap in this session.  Here is what we are going to cover:

## PART I: What Makes Something Big

"Big" doesn't only mean large data files.  Data can be hard to handle in a number of ways:

   * **Velocity**:  Data can come at you quickly.  For example, if you had access to the Twitter firehose you would be dealing with approximately 6,000 Tweets every second.  How do you write code that deals with this?
   * **Variety**:  An increasing number of applications need to consolidate multiple streams of data.  For example, a you may need to combine user click data with data inferred from videos that the users are watching, and unstructured text that the users are typing.
   * **Volume**: It is not uncommon for startups to deal with tera- or petabytes of data.  How can you parse data that is too large for any single machine you own?
   * **Veracity**: Especially in the social realm, how do you deal with uncertainty?  For example, Facebook's facial recognition software is good, but not perfect.  How do continue to function in a world where you cannot trust individual data points?

## PART II: Storing Data

How do you store and access data when it gets to be too large for a single computer?

Here we'll discuss the limitations and benefits of scaling horizontally (that is: by using multiple machines) and vertically (that is: by using a single, larger machine).  We'll see that scaling vertically works -- to a point -- and when you're dealing with web-scale data you'll need to make some tradeoffs and choose only two of:

   * Ability to always give the most up-to-date values for any data
   * Ability to be accessible even if parts of the network are down
   * Ability to survive splits in the network

## PART III: Doing Interesting Things with Data

We can't take a deep dive into specific technologies, so what I'm going to focus on instead is some thought experiments that hopefully illuminate how we think about dealing with high-velocity and high-volume data.

### Dealing with Velocity

If you're in a situation where data is coming at you so fast that you can't possibly parse and analyze all of it, how do you manage to perform complex calculations?

In short, you need to start using statistical and approximate methods.  As an example of this I'll describe an algorithm that illustrates this principle nicely.  Imagine I asked you to do the following:

Watch Twitter's firehose of Tweets (around 6,000 every second) and select from there a completely random sample of 1,000 tweets, where every single Tweet from the firehose has an equal chance of ending up in the sample.  Note that you have no idea how many total Tweets there will be, or how long the stream will run for.

### Dealing With Volume

So you have a dataset that is 100s or 1000s of times too large for your laptop to handle, say all of the user click and mouse-movement data tracked on your startup's website for the past three months.  How do you do useful calculations on that dataset?

We'll look at the basics and limitations of the MapReduce paradigm, which makes it possible to do seemingly difficult calculations on petabytes of data by writing only *two* simple functions.  As an example, we'll see how Facebook could calculate how many shared friends every single person in the network has, even on a computer as small as a standard laptop.
