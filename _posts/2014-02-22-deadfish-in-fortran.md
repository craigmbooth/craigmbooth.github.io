---
layout: single
title: "Deadfish in FORTRAN"
excerpt: "Implementing another pointless programming language."
tags: [fortran, programming]
header:
  overlay_color: "#0192CA"
---

Yesterday I was idly browsing the [esoteric programming languages wiki](https://esolangs.org/wiki/Main_Page), and stumbled over the language Deadfish, so named because

> Deadfish was originally going to be called fishheads as programming in this language is like eating raw fish heads. However, due to the limiting features of the language, programming in this language became like eating (and having to smell) dead, rotting fish heads, an experience not often generally considered pleasurable.

Deadfish is clearly a joke programming language.  That is, a programming language

> that [is] not of any interest except for potential humor value. Generally speaking, they [joke programming languages] are completely unusable for programming even in theory

Nevertheless, the wiki page for Deadfish contains implementations in 65 different languages including C, C#, C++, Chicken, Clever, COBOL, and Commodore 64 BASIC to name just the C's.  For some reason, nobody has bothered to do it in FORTRAN 77, so I decided to fix that.

Deadfish is very simple and has only four commands.  The state of the program begins at 0.  The command 'i' increments the state by 1, the command 'd' decrements the state by 1, the command 'o' outputs the state to the screen and the command 's' squares the state.

```fortram
c Deadfish interpreter in FORTRAN 77
      PROGRAM DEADFISH
      CHARACTER*1 inp
      INTEGER state

      state = 0
      DO
          WRITE(*,'(2A)', ADVANCE='no')&quot;&gt;&gt;&quot;
          READ(*,*)inp
          IF (state .EQ. 256 .OR. state .LT. 0)
    +       state = 0
            IF (inp .EQ. 'i') THEN
              state = state + 1
            ELSE IF (inp .EQ. 'd') THEN
              state = state - 1
            ELSE IF (inp .eq. 's') THEN
              state = state**2
            ELSE IF (inp .EQ. 'o') THEN
              WRITE(*,&quot;(I3)&quot;)state
            ELSE
              WRITE(*,*)'Unrecognized command'
            END IF
      END DO
      END
```

No idea why I made that.  What a `iisiiiisiiiiiiiioiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiioiiioodddddddddodddddddoiiiiiiiiiiodddddddo` idea.
