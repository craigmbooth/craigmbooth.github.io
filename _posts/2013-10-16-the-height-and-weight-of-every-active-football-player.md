---
layout: single
title: "The height and weight of every active football player"
excerpt: "Visualization of the height and weight of every NFL player"
tags: [nfl, sports, data]
header:
  overlay_color: "#0192CA"
---

While brushing up my Python skills the other week, I decided to figure out web scraping and to do a little data analysis project.  Specifically, I decided to look at the height and weight of every active NFL player, with the data that is found in tabular form on nfl.com.  For anybody who wants to play with this data for themselves,  here is a link to an [iPython notebook with the source](https://nbviewer.ipython.org/6994733) showing how I made the dataset.  This script also requires the file [teams.txt](https://gist.github.com/craigmbooth/6994779), which is up on github via the link.  Then, given this database, it is easy to extract the heights and weights of each player and see how they all stack up against one another.  A lot of the questions about the graphs were asking about the outlying points, so I'll quickly summarize them here:

* The shortest player is Trindon Holliday, who is 5 feet 5 inches tall
* The 6'8" quarterback is Brock Osweiler

{% include figure image_path="/assets/images/blog/height-weight/cmbheightweight-cb.png" caption="Graph showing height vs weight for all active NFL players." %}

You can [click here](/assets/images/blog/height-weight/chartHeightweightMetric.png) for a metric version of the chart, translated by the Polish American Football team [Angels Toruń](https://en.wikipedia.org/wiki/Angels_Toru%C5%84)!  The average weight and height of every position is as follows:

* Safeties 6’0″ 207.6
* Linebackers 6’2″ 246.3
* Defensive Tackles 6’3″ 309.8
* Defensive Ends 6’4″ 283.1
* Cornerbacks 5’11″ 193.4
* Centers 6’3″ 306.2
* Tight Ends 6’4″ 254.7
* Running Backs 5’11″ 215.3
* Guards 6’4″ 314.5
* Quarterbacks 6’3″ 223.8
* Wide Receivers 6’1″ 202.6
* Offensive Tackles 6’5″ 313.5

The same plot for punters and kickers is [here](/assets/images/blog/height-weight/heightweightpunter.png).  I moved punters and kickers into a separate graph just because the offense and defense are already sufficiently crowded that it's not entirely easy to read.

After posting these visualizations to Reddit they got picked up by the websites of a whole lot of places:

*   [Deadspin](https://regressing.deadspin.com/chart-the-height-and-weight-of-every-nfl-player-by-po-1445608274)
*   [Bleacher Report](https://bleacherreport.com/articles/1812211-awesome-graphic-visualizes-the-height-and-weight-of-every-nfl-player)
*   [Sports Illustrated](https://extramustard.si.com/2013/10/15/infographic-the-size-of-nfl-players-by-position/)
*   [USA Today](https://ftw.usatoday.com/2013/10/nfl-heights-weights-tallest-fattest/)
*   [Next Impulse Sport](https://nextimpulsesports.com/2013/10/16/check-chart-every-nfl-players-size/)
*   [Business Insider](https://www.businessinsider.com/awesome-visualization-shows-height-and-weight-of-nfl-players-by-position-2013-10)

When I add up the number of people who have seen and/or shared these graphs, it's obvious that they have been viewed well over a quarter of a million times (125,000 from a link on imgur.com alone).  This is more people than have ever seen the astrophysics that I've worked on for the last decade.  I'm not sure how to feel about that.
