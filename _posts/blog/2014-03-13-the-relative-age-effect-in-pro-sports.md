---
layout: post
title: "The Relative Age Effect in Pro-Sports"
modified:
categories: blog
excerpt: "An exploration of the birth dates of professional athletes"
tags: [data, visualization, sports]
image:
feature:
---

I remember reading a Malcolm Gladwell book, Outliers, and learning about an idea that he popularized.  Namely, that if you look at ice hockey teams, the majority of the players were born in January through March.  The explanation for this is the so-called relative-age effect. Namely:

*   In Canada, the cutoff for joining a hockey team in a year is Jan. 1
*   This means that when they're allowed to join junior hockey, some kids have just turned six, while others are almost seven
*   The bigger kids tend to be better at hockey, so
*   These kids end up playing in the teams, getting more training, getting even better

This argument feels very compelling to me, but it always puzzled me that I have seen it discussed in a large number of places, but it is always in the context of hockey.  Surely in the US, too, there is a cutoff date for school children to join teams, and surely the same things must hold true in football and basketball and baseball.

[sports-reference.com](http://www.sports-reference.com) has a database of the birth dates for all of the sportsmen they track, so built a little web spider to collate this data for tens of thousands of players.  Here's what I found:

[![download](/images/blog/relative-age/download.png)](/images/blog/relative-age/download.png)

So, each chart shows the number of players born per month, and the red line shows the number of players you would expect if they were distributed evenly throughout the year (this line is not perfectly flat because different months have different numbers of days).

As expected, hockey shows a really strong preponderance for hockey players to be born in January.  Baseball shows a similar trend, with most players being born just after the start of a school year, suggesting that they would be the oldest kids in a given cohort.

Unexpectedly, basketball shows _absolutely no trend_.  The Chi squared value reveals that the distribution of ages is totally consistent with players being born with equal probability on any day of the week.  My first speculative thought is that the reason for this is that, unlike football, hockey and baseball, basketball is a sport that can be played with very little equipment so it's possible that most early basketball training happens outside of structured teams, so kids of all ages mix together without arbitrary 'cutoff dates' keeping them apart.

Finally the NFL shows a weird trend, with fewer players than would be expected born in the spring (this is statistically significant).  I have no idea why this happens, maybe there are some positions in football that are unaffected by young-age and kids are shunted into positions accordingly.  If anybody has any ideas on this I'd love to hear them.
