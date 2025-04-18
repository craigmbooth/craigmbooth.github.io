---
layout: single
title: "Learning Logic Puzzles"
excerpt: "Trying to actually get good at logic puzzles"
tags: ["logic", "puzzles"]
header:
  overlay_image: /assets/images/blog/sudoku/sudoku_header.jpg
  overlay_filter: 0.5
---

I have always liked logic puzzles.  If somebody puts one in front of me, I’m always happy to dive in and take a shot.  I derive a lot of enjoyment from it.  That said, I have never actually made a focused effort to *improve* at logic puzzles.  I do them infrequently enough that it’s not like I ever retain any new techniques that improve my abilities.  Each time I come to a new puzzle I’m starting from scratch.

Around the start of 2021 (coming into the second year of COVID-related lock down), I decided to spend some time actually getting good at puzzles.  In particular, I realized that I had basically never solved a Sudoku before and resolved to pick up a modicum of ability at solving these, with the assumption that Sudoku solving is very well documented, and what I learn from Sudoku will be partially transferable to other puzzles.

From January through April, I fired up the sudoku.com app, doing the challenges every day.  As is the case with brand new skills, I initially improved rapidly (an easy puzzle took me around 15 minutes to begin with, a month later that number was 4-6 minutes), and then continued to refine my abilities with a little bit of reading on more advanced techniques than I would have figured out on my own (X-wings, XY-wings, Skyscrapers) and my times continued to improve, and I took on medium, then hard, then expert puzzles in a reasonable amount of time (as of writing my average solve times are 5:38 (easy), 12:11 (medium), 16:58 (hard), 19:19 (expert))

At some point, I was watching my favorite puzzle YouTube channel [Cracking the Cryptic](https://www.youtube.com/channel/UCC-UOdK8-mIjxBQm_ot1T-Q), and they did a video where they solved a puzzle from the book [“World of Sudoku vol. 4”](https://akashdoulani.blogspot.com/2021/04/world-of-sudoku-vol-4.html).  This book actually sounded like one that I wanted to get, for three main reasons:

1. The puzzles are hand-crafted, not generated by computer.  I had never solved hand-crafted Sudoku before, relying instead on the infinite number of puzzles that my app would spit out.  Hand-crafted puzzles are superior to generated ones because of the human touch:  The setter can design an interesting or logical solve-path, make puzzles that rely heavily on certain techniques, and so on.  I would expect much more variety from puzzles set by a human than those generated by machine.
1. In addition to the puzzles in this book, a competitive Sudoku solver (Chiel Beenhakker) has tried each of the puzzles and their time is included alongside each puzzle.  This definitely piqued my interest.  I love data, and numbers, and having a consistent benchmark to compare myself to just appealed very strongly.
1. I have only ever solved puzzles in an app before, and the app takes care of a lot of bookkeeping for you, and immediately informs you of errors so you can’t go too far down a bad path.  This feels like solving on easy-mode, and I want to be able to solve puzzles without a machine assist, so will be doing it with pencil and paper.

I resolved to get a copy of the book, solve a bunch of puzzles and see where I stack up against an actual competitive Sudoku solver.  Between April 18th and May 27, 2021 I solved all 120 puzzles in this book.

# Things I Learned Solving 120 Moderate/Tough Sudoku

I got a total of 42 hrs 11 minutes of enjoyment out of the book, which, for something that cost $8.99 is exceptionally efficient, clocking in at 21 cents per *hour* of puzzling.

I improved!  Here is a graph showing the ratio of my time to Chiel Beenhakker’s as I worked my way through the book.  I started around 6x slower than him, and ended around 2.5x slower.

![Scatter plot showing my time vs. Chiel's time](/assets/images/blog/sudoku/sudoku_me_vs.png)

The Pearson correlation coefficient between my times and his is very low (0.36).  I was expecting something higher, since we were solving the same puzzles I would expect us to take the same path, just with me going more slowly.  The scatter (I think) is indicative that I’m frequently missing things.

How do I know it’s me who is missing things?  Here are histograms of our times.

![Histogram showing my time vs. Chiel's time](/assets/images/blog/sudoku/sudoku_histo_me_vs.png)

His are very consistent with a strong peak around 5 minutes.  I’m all over the place, implying that my performance is just much more variable.

I was definitely delighted by the human-built Sudoku.  Something I never experienced before with computer-generated puzzles was neat solve paths.  For example seeing patterns form on the grid, or experiencing one logical jump clearly unlocking the next part of the board.  That's just not something that I ever experienced in grinding through machine-generated puzzles.

I also found that, as I picked up more experience, my technique changed from being very “rote” (check the numbers 1-9, in order, repeat once in case the first sweep filled anything in, then look for rows, columns and boxes that are close to full, then do another sweep of the numbers 1-9), to being a little more flexible where I would observe the grid and go where the puzzle looked “ready” to be filled in, look at numbers or boxes that looked busy, or where there were patterns I knew would be beneficial.

Overall, I learned that I will never be a competitive puzzle solver, but my delight in solving puzzles didn't wane at any point, and now I'm spending some time with various other types of logic puzzle.
