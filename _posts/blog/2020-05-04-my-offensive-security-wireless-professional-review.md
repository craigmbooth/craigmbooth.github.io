---
layout: post
title: "Wireless Security Certification"
modified:
categories: "blog"
excerpt: "Hacking wifi for fun and no profit"
tags: ["security"]
image:
feature:
---

# My Offensive Security Wireless Professional Certification Review

The COVID-19 lockdowns have caused most everybody I know to pick up an odd hobby or two.  Myself?  I have been passing the time by brewing kombucha, learning how to sharpen knives on a whetstone, building picture frames, and honestly spending more time than I would like watching Netflix.

Getting restless again, I realized that I wanted to learn something new.  I have had my eye on [Offensive Security’s Wireless Professional](https://www.offensive-security.com/wifu-oswp/) (OSWP) Certification for a while now.  As they promise:

> OSWPs are able to identify existing encryptions and vulnerabilities in 802.11 networks. They can circumvent network security restrictions and recover the encryption keys in use. The 4-hour exam also demonstrates that OSWPs are able to perform under imposed time constraints.

Now, I don’t work directly in security, and I *already know* that the material on this course is somewhat out-of-date.  What I really want to get out of this is an understanding of how WiFi works, and maybe get a little kick out of managing to decrypt a WiFi password or two, and to do something more productive than Netflix with some of my quarantine hours.

With that in mind, a few weeks ago, I signed up for the course.  Here are my thoughts on the course and the exam.

## The Course

A few days after registering, you receive the welcome email and course materials.  There are two parts to the course materials:  A PDF and some videos.  Given my previous experience of Offensive Security courses, I didn’t even look at the videos.  They cover the same things as the PDF and I just work better that way.

The PDF itself is 386 pages of instruction.  Approximately the first half of it is dedicated to the history of WiFi, the detailed structure of WiFi packets, and the algorithms used for communication.  I spent a fair amount of time grinding through this dry material.  I didn’t always retain 100% of it, but I came away feeling like my understanding of WiFi was measurably higher than it was at the start.

After this introductory material, you get on to the meat of the course:  Compromising wireless networks.  To do this, you need to put together a home lab by purchasing a suitable wireless card (must be able to do packet injection) and a router.  Largely following the course recommendations, I got a [D-Link DIR-615 Wireless-N Router](https://smile.amazon.com/gp/product/B000QD7B6W/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1), and a [Alfa AWUS036NHA - Wireless B/G/N USB Adaptor](https://smile.amazon.com/gp/product/B004Y6MIXS/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1)

<figure class="full">
  <img src="{{ site.url }}/images/oswp/oswp_equipment.png" alt="Pictures of the required equipment">
</figure>

The course is designed to be taught using [Backtrack linux](https://www.backtrack-linux.org/)  I decided not to go through the hassle of installing Backtrack linux anywhere, and instead just did the course on my Ubuntu 18 laptop.  I had very little issue with this, a basic apt-get install of aircrack-ng worked for everything in the course.  The only thing I struggled with was getting the WiFi card into monitor mode, since so many pieces of software had their fingers in that part of the pie.  I ended up having to kill enough daemons and remember (and sometimes repeat) enough commands that I just wrote functions to do it for me.  Maybe these will be useful for somebody one day:

{% highlight bash %}
monitor-mode-on () {
    local channel=$1
    local adapter="wlx00c0ca9876b6"
    if [[ -z "$channel" ]]; then
      echo "Must set channel" 1>&2
      return 1
    fi
   echo "Starting monitor mode on channel $channel"
   sudo service avahi-daemon stop
   sudo service network-manager stop
   sudo wpa_cli -i $adapter terminate
   sudo pkill wpa_supplicant
   sudo airmon-ng start $adapter $channel
   sudo iwconfig wlan0mon channel $channel
}

monitor-mode-off () {
    sudo airmon-ng stop wlan0mon
    sudo service network-manager start
}

{% endhighlight %}

In the end, I got through the course in 3-4 weeks of just taking on a chapter when I felt like I had spare time in the evening.  Each chapter has the same structure:

   * Introduce a concept
   * Get you to set up your lab network in a vulnerable configuration
   * Walk you through getting the Wifi key for a network in that configuration

Which is a really fun way to learn, since you’re immediately applying every concept that you pick up.  Overall, the learning process was very enjoyable for me, although I can’t speak to the quality of the videos since I didn’t watch any but the introductory one.

<figure class="full">
  <img src="{{ site.url }}/images/oswp/oswp_screenshot.png" alt="Some terminals">
</figure>
<figcaption>
A few terminals working on a WEP password.
</figcaption>

##  The Exam

The exam was really enjoyable.  Rather than being a multiple choice exercise, you’re given root SSH access to a host.  There are three wireless networks in range of that host.  Success on the exam means cracking the encryption keys to all three of those networks, and documenting how you did it.

As for the difficulty of the exam: if you have done the exercises in the PDF, you have all the tools you need to pass.  The exam is four hours in length, which is an ample amount of time to get everything done.

That said, to prepare myself I did a bit of exam-specific work.  It is public knowledge that the exam is “crack some Wifi networks”.  With that in mind, I spent 20 minutes the night before the exam just writing out a flowchart of what I could try, given the skils I learned in the course:  

   * IF it’s a WPA2 network, do X
   * ELSE IF it’s a WEP network and there clients connected to it, do Y
   * Else if there are no clients, do Z...
   * etc. etc.

When I started my exam I first looked at traffic to all three networks, identified which paths I would be taking down the flowchart, and so had a pretty good plan of attack put together in the first few minutes.

At that point, it was just executing on things I knew.  I tripped up a couple of times due to inaccurate typing, but got the last password within 50 minutes of starting.  I then spent another hour writing the report, and re-cracking one of the networks just to make sure I got all the juciest screenshots. 

A few days later, I got back the "We are happy to inform you that you have successfully completed..." email.

<figure class="half">
  <a href="https://www.youracclaim.com/badges/1ec73a2f-164b-47e1-b039-a1529929f6e4"><img src="{{ site.url }}/images/oswp/oswp_logo.png" alt="Link to certification"></a>
</figure>

## Concluding Thoughts

Yeah the OSWP is maybe out of date, yeah it’s not the most challenging exam in the world, but I had fun, and I learned a lot about how WiFi works, and in a pinch I feel like I could apply what I learned.  Given that, this course totally met my expectations, and now I have a nifty little Offensive Security Wireless Professional certification.


