---
layout: single
title: "NFL Height and Weight Data Release"
excerpt: "Making public the data I used for the height-weight charts"
tags: [data, nfl]
header:
  overlay_color: "#0192CA"
---

Back in 2013, I made a series of charts about the height and weights of NFL players.  They're available on this website for anybody who is interested.  Since then I have gotten the occasional request for access to the raw data behind those charts.

Since I cycled through laptops a couple of times in the interim I didn't really have easy access to the data, but kept on meaning to go and dig it up from my backups.  Today I got another request for the data from somebody working on a science fair project, which was just the kick I needed to actually go and track it down.  Unfortunately the historical data wasn't especially easy to get, but for a snapshot in time, here is a CSV file containing the player information I have on the players from 2013 NFL rosters

[Here is the data](https://gist.github.com/craigmbooth/5a9be04fe72d77fa3cff).  The file looks like this:

    number,full_name,position,height_in_inches,weight_in_lbs,date_of_birth,team
    23,"Alford, Robert",CB,70,186,11/1/1988,ATL
    95,"Babineaux, Jonathan",DT,74,300,10/12/1981,ATL
    72,"Baker, Sam",T,77,301,5/30/1985,ATL
    59,"Bartu, Joplo",OLB,74,230,10/3/1990,ATL
    71,"Biermann, Kroy",OLB,75,255,9/12/1985,ATL
    63,"Blalock, Justin",G,76,326,12/20/1983,ATL
    5,"Bosher, Matt",P,72,208,10/18/1987,ATL
    3,"Bryant, Matt",K,69,203,5/29/1975,ATL
    51,"Chaney, Jamar",LB,72,242,10/11/1986,ATL
    + 1,000 more lines

For clarity, the exact meanings of each of the columns are as follows:

* *number*:  The player's shirt number
* *full_name*:  The player's full name, in the form Last, First
* *position*:  The 1/2 letter abbreviation for the players position
* *height_in_inches*:  The player's heigh in inches
* *weight_in_lbs*:  The player's weight in pounds
* *date_of_birth*:  The player's date of birth in the form MM/DD/YYYY
* *team*:  The three letter abbreviation for the team the player was on at the end of the 2013 season.
