---
layout: post
date: 2020-09-08 12:00:00 -0000
category: posts
author: 7te
tags: productivity life note-taking zetterkasten
---


#### or, how to set up a zetterkasten in **nb**

I've struggled for years (`[0]`) to find a note taking system that works for me for longer than 24 hours. I've read and tried lots of different methods that I've seen people use, from one massive 20,000 line .txt file with autogenerated time and date, to using Evernote🤢. My most recent attempt at sanity was meticulously bookmarking everthing that was, is, or will be relevant in my life at some point.The only way this was remotely possible was by carefully tagging each bookmark and placing them into folders. This worked better than most solutions for me, but crucially it has no easy pipeline for actual note taking, and it also requires me to sync bookmarks across browsers, devices, etc. 

Fortunately I think I've found a better solution for myself. One term that was continually popping up on this quest I've been on was [zetterkasten](https://en.wikipedia.org/wiki/Zettelkasten) which, despite potentially being one of the most German words I've ever heard, offers a very simple format of notetaking that allows the user to create a symbolic system of knowledge based on a semantic tag system`[1]`, which is easily searchable both in the past in a file cabinet, and currently using `grep` to find and review your knowledge portal based on your search terms. 

Recently I came across [this](https://news.ycombinator.com/item?id=24709393) link on HN to a CLI based, git synced, note taking application. 

[nb](https://github.com/xwmx/nb) looks to be an interesting solution for me, and people like me, as I struggle to find something that is:


- [x] that can quickly and efficiently store hyperlinks, markdown, and other forms of media. 
- [x] isn't maintained by a company as a source of profit or ideally open sourced
- [x] is built on technology that i am confident will be around for a decade, at a minimum
- [x] easy to use`[2]`, but more importantly, fast to use so that I can brainstorm as fast as I can type and add media without hassle
- [x] git, or git-like behavior

A few other quick positives, if you maintain a markdown based blog such as this one, using nb makes it incredibly easy to create blog posts from your zetterkasten.

I've had some issues getting **nb** to work on Windows 10, but I haven't had any issues on any *nix based system.

>  ## citations

* `[0]` LITERALLY decades
* `[1]` idk what i was citing here tbh..
* `[2]` this would not be easy to use if you are not reasonably comfortable with shell commands, piping, and how a terminal emulator works in general