---
title: I launched this little blog on 11ty, and I am excited about it
date: 2025-03-12
nowPlaying: A Shimmer, by Nils Frahm
audioLink: https://open.spotify.com/track/09F0zRNSUa0qAWYUksXtXt?si=df8d2b202dfc4b31
tags:
  - 11ty
  - writing
  - personal-news
description:
  I put off building this website for over a year and then I whipped it together in 3 short evenings. I will, once
  again, of course, be learning no lessons about procrastination from this.
published: true
---

<pre>{{ description }}</pre>
<img alt="test" src="../images/articles/rachael-ren-U94eGGi_1ZY-unsplash.jpg"/>
<div class="padded-top">[Photo by <a href="https://unsplash.com/@2094_photography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Rachael Ren</a>]</div>

<h2>I built a little website and it feels important.</h2>

It's hard to explain exactly why it took me so long to build a very small website, but it did and I've decided not to
feel guilty about it. There's something uniquely weird about how hard it is to
put anything out under your own name even if it's just three font faces on a white web page, so it is in some way a
minor miracle that it even got done at all.

You see, reader, the Internet is ceremoniously collapsing under the weight of itself due to various things that
spreadsheet men imagined into existence like venture capital, product managers, KPIs, and getting promoted for launching
and then
sunsetting your own products at companies like Google. For reasons to do with astoundingly large piles of tax-protected
debt finance, our once beautiful
Internet has spent a decade being transformed from a perfect, beautiful, open, technicolour sun-shower into a sterile
and privately owned collection of 6 websites full of screenshots of one another, that exist to use political atomisation
as an emotional backdrop to sell advertising for modern horrors like Temu. Listen I'm not saying it's right I'm just
saying it's what it is.
This is not only obviously enormously concerning from an ethical information-superhighway perspective, but also
uniquely annoying from a practical one. Because whenever one of your online platforms gets _Nuked By The Immense Power
Of Capital_, all of your content, social graph and the little seat you spent years carving out for
yourself disappears. And there is nothing you can do about it, because you don't own the platform, or really even, the
content.
Even if you can get your content out of the dead machine, half of the time it's in some wackjob format that requires
you to be a literal software engineer to be able to port it into a _different_ bullshit content platform. Which 7 months
later is then bought by some other competing monolith, who immediately unleash _Another Team That Makes Line Go Up!_
and then you're really on borrowed time before you're in the **exact same cursed position**.

### Unless!

Unless, you own your own little website that is free of the funereal dirge of capital market dysfunction. Where the
content is not inside some sort of door-wide-open internet-connected database that suffers from almost quarterly
security breaches, but in fact is just text files that you can write and host, and if the server collapses or the host
gets bought by some sort of recreational sadist, you can just throw the whole damn repo up somewhere else. And it
really doesn't affect you at all. And you can just write words on it, and keep them, and nobody can drag it out from
under you, not even planet earth's wealthiest man.

### And that's why I chose 11ty. And it was a good choice.

And so, this whole project went a little something like this:

1. I decided that I was _actually_ going to **make this website**.
2. I knew I wanted a static site because I was too lazy to learn a different CMS, and wasn't going to do the
   sledgehammer vs. walnut thing of building a personal site using a massive Python framework. I also wanted to be able
   to just write
   text files into a computer, and mess with them in HTML or markdown. The most important part was to find something
   modern enough that I'd like using it, with the smallest set of obstacles to actually publishing anything. Because
   then when I predictably don't, I can at least hate myself and not the technology.
3. I researched multiple static site generators. Having been out of the game for a while, the three dominant ones appear
   to be [Astro](https://astro.build/), [Hugo](https://gohugo.io/) and [11ty](https://www.11ty.dev/) although there seem
   to be a number solving the same
   problem. All looked cool, and I think any of them would have worked great.
4. Astro looked a bit more like a weapon for enterprise, Hugo I was less familiar with, and I already have a
   different [11ty site](https://ahumanfuture.co) that
   was mostly built by a friend, so I already had an owned codebase to look at. So I chose 11ty.
5. I am a back-end developer and as such, under-qualified to design something myself. So I found a very
   nice [base theme](https://github.com/yinkakun/eleventy-duo) on
   the [11ty starter site](https://www.11ty.dev/docs/starter/) that I spent an hour reading the code for before I
   decided it did what I wanted, and I would be able to whip into an aesthetic shape consistent with my other site.
6. I then did various unsupervised surgical procedures to the template that I am not proud of but were effective.
   This part took by far the longest because building a website that is just three fonts with some zany hover effects is
   deceptively hard if you don't want it to just look like a website full of broken CSS.
7. I then realised that the theme I'd chosen was on 11ty 2, rather than 3. I wanted to be on the freshest version, so I
   updated it, which broke a load of weird stuff that I then fixed. This is a hazard of the npm ecosystem which of
   course has haunted asylum energy.
8. I unpublished all the boilerplate content, messed with the article styles and racked this post out at warp-speed.
9. I then pushed all the code up to the new [repo](https://github.com/thmsrmbld/terminal-ahumanfuture).
10. I logged into my [Netlify](https://www.netlify.com) account and set up their automatic CI / deploy-from-repo stuff
    to point at the repo, and it deployed it in about 3 minutes. I've done this before, but frankly, their deploy
    workflow
    is an astonishing piece of technology that I can still barely believe exists. Website published under a custom
    domain with automatic certificate handling, by just giving it access to the public Github repo, followed by
    automatic deploys on push. Something that takes hours if not days under regular circumstances.

I think collectively, it took about 16 hours to get done, including writing this post. I could have done it faster if
I'd cared less about the visual stuff, hadn't chosen to take war to the npm ecosystem in the middle of the job, and
hadn't spent half the time messing around watching Batman.

<hr>

Anyway. I'm a software engineer and chronically online child of the Internet, so I'll be writing about programming,
building things, strange music and counterculture. If you need any pointers setting up your own 11ty website, I'm a
cowboy at the game at best, but email me, and I'll do what I can to help. Alternatively, you can with my blessing
just [steal my entire website repo](https://github.com/thmsrmbld/terminal-ahumanfuture)
but if you _do_ do that, _please_:

1. Check out the original theme fully to understand it, and respect its license.
2. **Please** do change your fonts to your own choices, so they're stylistically reflective of your
   own thing, that would mean a lot to me. Google Fonts, for example, has
   brilliant [pairings](https://fonts.google.com/knowledge/choosing_type/pairing_typefaces) and they're all free.

Got it done. Looking forward to seeing you soon. 🕶 🖤
