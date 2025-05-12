---
title: This future must include us all, even Figma
date: 2025-05-12
nowPlaying: Hizuki, by Venna
audioLink: https://open.spotify.com/track/6zfqWviNnpoLbB7lO3Yzwj?si=3191838b6b3b49cd
tags:
  - software
  - management
  - accessibility
  - future
description:
  “If you have come here to help me you are wasting your time. If you have come because your
  liberation is bound up with mine, then let us work together.”
published: true
featured: false
---

<pre>
<strong>“If you have come here to help me you are wasting your time. If you have come because your liberation is bound up with mine, then let us work together.”</strong> - Lilla Watson
</pre>

<img alt="test" src="../images/articles/compare-fibre-abstract.jpg"/>
<div class="padded-top">
  [Photo by <a href="https://unsplash.com/@comparefibre">Compare Fibre</a>]
</div>
      
## There was a light

<a href="https://www.figma.com/sites/" target="_blank" title="Link to Figma Sites marketing page">Figma
Sites</a> was announced at
<a href="https://config.figma.com/" target="_blank" title="Link to Config (Figma Marketing Conference) website">Config
2025</a> on May 7, 2025. In tangentially related news, the product announcement came 26 years and 2
days after
<a href="https://www.w3.org/TR/WAI-WEBCONTENT/" target="_blank" title="Link to WCAG 1.0 first guidance site.">WCAG
1.0</a> was announced.

WCAG 1.0 was developed by the
<a href="https://www.w3.org/" target="blank" title="Link to W3C website.">W3C</a> in response to the
runaway communications revolution caused by a surge in Internet connectivity, and the widespread and
rapidly accelerating adoption of these groundbreaking new protocols. As these innovations moved
beyond academic, hobbyist, and niche commercial spaces into the everyday lives of millions, WCAG 1.0
emerged as the first international standard aimed at making web content more accessible to people
with diverse information access needs. Today, it is primitive and low-tech guidance - but was at the
time, crucially, a bright, optimistic and serious statement of intent: _the web is the future of
information - and this future must include us all_.

This first pass can be considered the genesis of many of the ideas, philosophies and practices that
ended up informing
<a href="https://www.w3.org/TR/WCAG22/" target="_blank" title="Link to WCAG 2.2 Spec."> WCAG
2.2</a> - the latest formalisation of now long-established guide-rails designed to ensure that
Internet products arrive and remain accessible in 2025. It is not only today's gold standard in it's
ambition to help web products work for the widest group of mixed-access users possible, but also a
type of acknowledgment that the Internet and the web have, in the blink of an eye, become the most
dominant piece of techno-social infrastructure of our time.

The impact and significance of the work of accessibility standards today sits well beyond the
perimeter of the philosophical or the technically practical. This is not a box-ticking exercise, nor
a pat on the back for busywork. It now also informs legal compliance, ethical design, search ranking
and most importantly of all: an individual's fundamental right to equal access to digital
information and services. In many countries, the law considers accessible web sites and applications
as part of the criteria that comprises equal participation in society. People _must_ be able to
access vital information and digital services - particularly
<a href="https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps" title="Gov.UK accessibility requirements public sector page." target="_blank">public
sector</a> ones. And the future, in the EU at least, hammers this home for the
<a href="https://silktide.com/blog/the-eu-private-sector-is-finally-getting-some-accessibility-legislation/" title="Link to accessibility article for EU directive." target="_blank">
private sector</a> too.

This very brief scenic route through some of the accessibility history of the Internet is important
context for an industry that despite 30 years of standards work, is still having serious problems
considering accessibility a first-order concern and not some sort of minimum-effort, performative
bolt-on.

<hr/>

## A builder of builders

Figma Sites is the new hotness in visual website-builders, and it's designed to be useful for
'non-technical' users (although, I hate that term). It allows users to take the designs that they've
already created in Figma, and through some sort of machine transformation, automatically convert
them into responsive web layouts - removing the difficult and often expensive portion of the work
that involves a web developer actually _building_ it. I suppose people involved in running product
strategy for Figma probably referred to this sort of thing as 'closing the loop', or something,
which is often what people in companies say before they bolt on new features that are a complete
departure from the thing that made them successful in the first place. To my mind, Figma's big
announcement is unfortunately, not really a big announcement at all. The fact is that these sorts of
visual website builders have been present in one form or another for the last 20 years. Some of the
OGs of this space are
<a href="https://en.wikipedia.org/wiki/Netscape_Composer" title="Netscape Composer Wikipedia Page" target="_blank">Netscape
Composer</a>,
<a href="https://en.wikipedia.org/wiki/Microsoft_FrontPage" title="Microsoft FrontPage Wikipedia Page" target="_blank">Microsoft
FrontPage</a>, and (amazingly, still) Adobe's
<a href="https://en.wikipedia.org/wiki/Adobe_Dreamweaver" title="Adobe Dreamweaver Wikipedia Page" target="_blank">Dreamweaver</a> -
all products that developers of a particular age love the memory of and _revile_ in practice.
Despite a number of them being fairly successful at 'democratising' the process of launching
websites, even the good ones take heat for being difficult to use and limited in flexibility. I
don't think it's much of a reach to say that pretty much all of them are notorious in one way or
another for pumping out machine-generated client-side code that does not pass many of the most basic
web accessibility standards, let alone those of serious practitioners.

The code generated by the tooling that drives these products is sometimes so poor that it is
practically impossible to read, and so immediately, becomes extremely difficult to reliably debug
and maintain. Because's it's often not semantic, and contains either spotty, or no, aria work,
screen readers have no real idea what to do with it. Styling, markup and interactivity are often
schlacked into a godless, mutant code abomination that only even renders because modern browser
engines are so extremely tolerant of godless, mutant markup that they sometimes do a pretty sterling
job of handling it regardless. These companies have sometimes been staggeringly successful in spite
of what eventually comes to light as transparent disregard for the fundamental standards of the
platform they have chosen to profit from.

In it's first iteration, at least - Figma Sites unfortunately does not break away from the problem
systemic in these products. None of the output generated by the Figma Sites builder today passes
basic tests for semantic markup, and here's a really good
<a href="https://www.youtube.com/watch?v=ZsFIvULxkHI" title="Link to YouTube video" target="_blank">video
explainer</a> of the wider issue, by Kevin Powell</a>, which helps contextualise the rest of this
article. There are also interesting BlueSky threads
<a href="https://bsky.app/profile/joelanman.bsky.social/post/3lomdmfhdfc27" target="_blank" title="Link to BlueSky thread for discussion.">
here</a> and
<a href="https://bsky.app/profile/kevinpowell.co/post/3loqhep3ckk2a" target="_blank" title="Link to BlueSky thread for discussion.">here</a>
too.

<hr>

## Roughly, the GDP of Namibia

Figma is a single San Francisco technology company with a $12.5 billion dollar valuation, which
incidentally is slightly larger than the GDP of the country of
<a href="https://datacommons.org/place/country/NAM?utm_medium=explore&mprop=amount&popt=EconomicActivity&cpv=activitySource,GrossDomesticProduction&hl=en" title="Link to GDP data for Namibia" target ="_blank">Namibia</a>
(population ~2,963,000). Although Google's core product also seems to get worse every day, a quick
search reveals that Figma appears to have 1,600 employees. The company has unseated much of the
existing competition for design prototyping in the space, and today is the effective de facto tool
of choice for most web designers who work on creative teams for large companies. Their original
success is generally attributed to their collaboration tools. It's a cloud-based service, and they
use some pretty bonkers websockets stuff to allow multiplayer, real-time design work to happen -
which in the space, and at the time, was a genuine innovation. Particularly at the point that
distributed collaboration was crucial when technology companies had to keep their lights on with
fully remote teams.

Despite the history of the space, it is still hard for me to imagine that a company of this calibre
chose to ship the product while it still contains this scale of bug in 2025. It is hard for me to
imagine that in a company of Figma's size and profile, no experienced front-end engineer looked at
the output and did not immediately say _"ah, that is 29 nested_ `<div>` _tags"_. It is worse to
imagine the product function knowing about it and it still shipping it regardless - given that this
is _a website designed with the explicit charge of making other websites_. It is really a bad thing
that this is the beginning of the life of those websites. With another cursory search, it turns out
that Figma has approximately 4 million individual users so the potential blast radius, so to speak,
is enormous. It is not a bright prospect for an accessible Internet at a time when we have to be
more committed than ever to doing the right thing online as a reaction to a currently unfolding,
extremely severe degradation in web product and information quality. I do not believe it to be a
coincidence that this degradation has been astonishingly profitable for a small number of highly
motivated money types.

I don't think that being an extremely online scold that takes great pleasure in scathingly pulling
apart the technical work of teams at big companies for sport has ever really been _effective_, even
thought it sometimes feels required, to remind yourself you are not losing your mind. For that
reason, I am not very interested in the condemnation of one specific company, although I think it is
both fair and true that Figma are far too big and established a web organisation to have allowed
this to happen - because this does not feel like the work of people who deeply understand the world
wide web. But all of the best failures are usually multiple separate failures in a trenchcoat, so to
speak. I know that a lot of clever people probably worked impossibly hard on this to make sure that
the product could be announced at Config 2025. They are not the first company to find themselves
here, and they will not be the last. One of the many side-effects of This Sort Of Thing is that it
is the transparent revelation of what a product development organisation takes seriously,
internally. It also demonstrates what they are willing to compromise on to make hard deadlines work.
I think now is as good an opportunity as any to be introspective about whether the platform's
accessibility standards are ever an acceptable compromise given the civic and social role of the
Internet in 2025.

Regardless of whether or not they were looking for it in first place, companies that end up
cornering an entire section of a market inherit a mesh of difficult responsibilities, many of which
live in diametric opposition to their revenue-generating agenda. This is to say: what you do at
_any_ size matters. What you do at _Figma's_ size really, really matters.

## This Sort Of Thing as a Service

I feel intuitively that This Sort Of Thing is a symptom of the well-known and frankly, disaster, of
an issue that the commercial priorities of very large, venture-backed Internet companies reward
product practices that are the direct counter of what makes an open and accessible web. It shows the
competitive space that short-term, broadly synthetic financial pressure means that being first is
better than being even adequate. It is also a crystal-clear signal to developers at these businesses
that huge success can happily arrive at the expense of an open, semantic, free web of information. I
worry about the ramifications of that when these developers eventually go on to found their own
products or development houses. In a similar vein, when companies of the size and might of Figma go
ahead and do this stuff, it automatically informs the quality of the other design tooling in the
space - each under their own kinds of constant pressure.

In my mind, it contributes to something worse - a propagation of a web of the future that does not
prioritise diversity of need or access - by the very companies that only exist _because_ of the
rigour of the platform. Without a sophisticated way to express what a _thing_ should be (which, is
really, just coding) there's no real way to infer meaning from an arbitrary graphic that can be
transposed into rich HTML, unless we are to believe that AI tooling can now do this for us. Which
posits a different question. If AI tooling _can_ now do this for us - why isn't it? This is
declarative work, based on now millions of lines of agreed, factual standards training data. Is this
not the perfect candidate for the work of the prediction machine?

It's worth saying that I don't know how much of this new AI/LLM stuff Figma uses at the moment, if
any. I'd find it hard to believe that the answer is 'none' - but only because I have never, in my
career, seen so many tech-forward companies scrambling to try to find or create problems to solve
with an emerging technology. Nobody knows what to build. What they do know is that it should be AI.

However we got here, any outcome that looks like 'this lets us do what we already do poorly, faster'
is a frankly crushing indictment of the imagination of the industry's leading technologists and the
capability of the technology itself. It is a result of the pervasive philosophy that the most
powerful companies in the world get to talk constantly about 'disruption', and 'changing the
world' - without listening to the answers of the immediate follow up questions: _"Who are you
changing this for?"_ and _"In what ways are you changing it for them?"_. We _already_ deeply
understand the ramifications of allowing corporations to be insulated from the effects of closed,
radical, for-profit agendas - while they spout progressive marketing positivity at the same time.

The future of the web will continue to include companies that look and behave like Figma. And
although the responsibility of agitating for an accessible, progressive, quality web _is_ the job of
us all - the institutions that enjoy the rewards of disrupting our existing paradigms must also be
measured by the energy they spend honouring the difficult responsibilities that they naturally
inherit. I hope that we will see Figma improve this work because this is almost certainly not a
technical competence issue. But this isn't really about Figma. It is about the imagination that more
than ever, the true and hard work of the future - technologically and politically, is that it must
include us all.

Until tomorrow. 🕶 🖤
