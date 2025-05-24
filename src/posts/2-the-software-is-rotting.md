---
title: Your software is rotting
date: 2025-04-19
nowPlaying: Vinegar Hill, by Elijah Fox
audioLink: https://open.spotify.com/track/3OQmeH3w7UgGOoYYNtu1DY?si=5138005425d34a72
tags:
  - software
  - management
  - architecture
  - long-read
  - featured
description:
  The bad news is that your software is rotting. The good news is that there are many simple but
  powerful things we can do to slow the process to a crawl.
published: true
featured: true
---

<pre>{{ description }}</pre>

<img alt="test" src="../images/articles/karl-anderson-7zg5bnhm2X0-unsplash.jpg"/>
<div class="padded-top">
[Photo by <a href="https://unsplash.com/@karlkiwi90?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Karl Anderson</a>]
</div>

## Your software is rotting

Recently I cannot shake the feeling that all software for the Internet is rotting from the inside
out like a piece of fruit in a forest when you leave it to the order of the natural world. Forests
are, by the way, a brutal place to be a piece of fruit. I think I keep landing on this metaphor
because most modern web applications are just a model of a problem in constant flux, with entire,
competing ecosystems growing and adapting around them. Any model designed to be adaptable, useful
and sturdy in response to new inputs is itself a type of living thing, surrounded, by other living
things. And, as the saying goes:

<blockquote>All models are wrong, but some models are useful.</blockquote>

Big, online codebases in 2025 are a sort of carefully-constructed exoskeleton wrapped around the
business challenges that they're built to solve. How a codebase _is_, is a direct result of the
regime under which it is born; the domain's messy difficulties, the skills, personalities, and all
of the mission's ugly and lucrative incentives. This order-in-flux is one of the most important
reasons that we must write software systems that are simple for humans (and now, LLMs) to read,
understand and change. In this context, teams who are able to resist the glamour and temptation of
recreational academic indulgence often naturally distinguish themselves as centres of excellence
because they're outliers in their ability to _actually ship valuable things_ - acknowledging equally
that sometimes we just cannot escape the trap of 'being clever'. This is because building great
software quickly is in fact difficult and not just first-order pattern recognition. (This is true
despite some very suspect, recent claims by AI-salesmen and various hopeful business-people
desperate to usher in a simpler, more profitable utopia where LLMs can quietly replace the software
developers they have (sometimes understandably) come to dream of a life without.)

The funny modernist contradiction of this particular flavour of extant decay is that it is
simultaneously easier _and_ more difficult than ever to build Internet software. Each layer of any
non-trivial web application (UI, business logic, storage, distribution, deployment) is now complex
individually - each _themselves_ an ongoing concern. When each slice is built around constantly
changing browsing, computing, security, accessibility and developer experience ecosystems and
standards, your choice to build any software _at all_ automatically guilds you a tricky
inheritance - that like all great injustices, are not your fault but _are_ your responsibility. If
this _your-software-is-rotting_ hypothesis contains any truth, the moment you write a line of your
own code you're by definition choosing a life of pest-control.

This can be trivially demonstrated by leaving a web application online for ~3 months and then
attempting to update its NPM dependencies to their latest versions; an activity that sometimes makes
me wish I worked with literal, real-life hornet's nests for a living rather than just the digital
equivalent.

<hr>

**So**. I think that software begins to decay at conception, in the mind of anyone who has ever been
foolish enough to attempt to instruct any computer to do something useful. And even though the bad
news is that your new codebase began to rot before you laid the first line, the _good_ news is that
you now already know that, and as such, are ahead of an otherwise ruinous problem. As in the
physical world, there are many highly effective things you can do to control its pace and nature. If
you can take care of all of them, you might _even_ slow it to a barely noticeable crawl.

These thoughts came to me in three groups: **Foundations**, **Workflow** and **Maintenance**.

<hr>

### Foundations

<pre>When I say "foundations" - I mean: the first decisions we make, that all other decisions are laid upon. These are the ground upon which all other battles are fought - and here, hours of research and thinking can save months of future engineering work. Mistakes here compound like little else in the game.</pre>

#### Choose 'boring' technology

The term 'boring technology' is commonly misinterpreted because of that
[one excellent presentation](https://mcfunley.com/choose-boring-technology) that somehow left some
engineers thinking that 'stable' means boring and that boring is somehow bad. When we talk about
'boring' technology, it's explicitly _not_ about choosing old or stagnant tools. It's about
intentionally choosing verified technologies that have already proven their value through years of
real-world use - with histories that make them unlikely to shock or surprise you in ways that can
hamstring a business. I don't know about anyone else, but 'excitement' in the software engineering
world is often not the same as excitement anywhere else; and I prefer my production environments
with the smallest number of massive adrenaline dumps possible, for reasons to do with remaining
employed.

With that, it's wise to resist the temptation to choose hyped, brand-new, 'exciting' technologies
that have yet to prove their worth as the tools of a high-performing team. When you're considering
what to use, consider that commercially-ready technology is only as good as its documentation,
community, and track-record. Here, look for:

- Clear, comprehensive, officially-maintained documentation.
- Transparent release pathways, including existing and future LTS commitments.
- Thorough release notes, and versioning conventions that makes sense.
- Active community forums / chat groups / repo issue conversations.
- Endorsement, usage or sponsorship by well-respected companies.
- No vendor lock-in, weird licensing issues or opaque pricing systems.
- The existence of relevant community meet-ups or real-life events is a good indication that a good
  number of people are staking something significant on the future of the technology.

'Boring' technologies also tend towards large talent pools, making it a _lot_ easier to find and
hire people who can work with them. This is a huge competitive and practical advantage when you're
trying to grow a team or replace someone who's leaving - and substantially reduces the risk of
ending up with one or two overworked, load-bearing employees - bad for the employees, team and
business.

#### Automate the tedious or repetitive

There are a lot of pieces of the business of owning software that are repetitive, and so quickly
become tedious. The problem with tedium is that left unsupervised it quickly morphs into shortcuts -
and from there, carelessness, both of which are a waiting disaster for platform stability and
reputation. It's not even anybody's fault. Humans are not well suited to precision repetition. But
computers are. I'm thinking mostly about the following:

1. You absolutely **must** have some meaningful, automated test coverage for your platform's mission
   critical paths. Ideally you want as much test coverage as is reasonable, written in patterns that
   are easy to change. This is especially true when working across distributed locations, and once
   your app's business logic has grown beyond the bounds of being able to keep all of its subtleties
   in one person's working memory. Writing tests should be factored into your estimates as proof
   that the new things you're building work and so that the _newer_ things you build don't break the
   other things that must still continue to work.
2. We as an industry have to stop spending time arguing about code-style and aesthetics. Outside of
   academic or hobby this is valueless indulgence that costs companies money. Find the agreed
   conventions of your chosen languages and technologies, choose them, and then pick pre-commit
   tooling that enforces these standards automatically at the point the code is going to be merged
   into the repository. This is so easy to do and is a massive net gain for the readability,
   consistency and maintainability of your codebase. You want to get this in place and then think
   about this roughly zero times a day.
3. There are some application-level concerns that also fall into this category. One good example -
   if your back-end and front-end share expectations around types, find a way to automate this type
   generation so that humans don't have to do the legwork of something that machines can trivially
   work out. If there are regular tasks that need to happen to keep data in shape, it's time to
   write tested, scheduled management commands that you can leave to fire and forget, so you can
   think about other things. There are a lot of opportunities for this sort of improvement in the
   fundamentals that make the practice of actually building valuable software much more enjoyable.

#### Choose good leadership

One of the only things I remember from Shakespearean English is:

<blockquote>"A prince's court is like a common fountain, whence should flow pure silver drops in general; but if
't chance some cursed example poison't near the head, death and diseases through the whole land
spread."</blockquote>

Poison at the head of fountain quickly contaminates all of its lower layers; and the same is true
for why poor leadership is so deadly for software teams. As such, we must place the right people in
key positions to keep a team productive and focused on the right things because there are few things
worse for the culture and mechanics of the delivery of great work than leaders who cannot steward,
enable and empower correctly.

Leaders take all forms - especially on small teams - but there are interesting ideas around the
topic of
[Directly Responsible Individuals](https://handbook.gitlab.com/handbook/people-group/directly-responsible-individuals/),
even if your hierarchy is small, or flat. The examples leaders set quickly ripple out through
reports as demonstrations of the kind of behaviour that is tolerated, rewarded and expected. The
crux of this line of thinking is: This happens with both good and bad behaviour.

As [Camille Fournier](https://bsky.app/profile/did:plc:i4ezqebero3mewqhu4tkmaet) says:

<blockquote>"Successful leaders write well, they read carefully, and they can get up in
front of a group and speak. They pay attention in meetings and are constantly testing the limits of
their knowledge, and knowledge of the team."</blockquote>

A common misnomer in this area is that your leaders must be the most technically experienced or
capable among the engineering cohort. This is basically wrong; because almost all leaders in every
industry end up having to lead people who do things that they cannot do anyway. Leaders must be
[smart and get things done](https://www.joelonsoftware.com/2007/06/05/smart-and-gets-things-done/).
One without the other creates problems. Being an exceptional technical problem solver is not a
reason make somebody a leader or a manager; which is a completely different set of skills.

<hr/>

### Workflow

<pre>When I say 'Workflow', I mean: The environment in which the codebase has space to grow and be changed, and the digital and human I/O that enables that.</pre>

#### Make it easy to do the right thing

(And by definition, hard to do the wrong thing.)

The most effective way to eliminate preventable mistakes isn't through documents, policy or fear;
it's through thoughtful system and workflow design that makes the right path the easiest path. This
principle applies across several areas:

1: **Access control**: From day one, it's powerful to practice granular permissions that reflect
actual responsibilities. Practising 'The principle of least privilege' means that elevated access is
a manual exception tied to a responsibility, not a default for some future need that doesn't exist
today. Mistakes under elevated privilege can cascade out rapidly; so the best thing we can do is
make this surface area as small as realistic, and track and audit when we _need_ to be in the belly
of the beast.

2: **Known boundaries**: Design systems where sensitive operations require explicit consensus or
verification. Whether it's deploying to production, accessing sensitive data, or modifying
infrastructure, these actions should feel consequential and intentional and teams should look to
support and plus-one one another for verification on major moves, when code or configuration moves
around or between environments.

3: **Workflow automation**: Identify common, error-prone tasks and automate them for speed and
safety. For example:

- Pre-commit hooks that prevent common mistakes, and automatically enforce against linting or style
  violations.
- Automated, scheduled dependency updates with logs of their upgrades, for a historic record of what
  changed and when.
- Deployment pipelines that force human review workflow and passing automated tests.
- Rolling, automated backups that enable a to-the-second restore in case of disaster.

4: **Procedure as code**: Wherever possible, encode procedure directly into your systems. A
well-designed CI/CD pipeline that enforces code review within its workflow is factors more reliable
than a wiki page about code review best practices, which will eventually be disregarded, because
people are people and work is work.

There are lots of others, too. The goal here is to evade bureaucratic paralysis while also building
systems that organically guide engineers toward what is safe and good - while making riskier actions
feel deliberate and intentional. When the right way is _also_ the easy way, the group naturally
leans towards an environment where excellence and professionalism becomes the path of least
resistance.

#### Reward clarity in code and communication

In software development, clarity is sometimes treated as a nice-to-have rather than a fundamental
requirement. This is a mistake borne of clarity requiring difficult, sustained thought. Clear code
and clear communication are the foundation of reliable systems that are run by engineers who
understand and know how to look after them. This is only because the reality of systems is stark.
Systems do not naturally lean towards simplicity. Without strategy and forethought, they evolve into
whatever the result of the short-term incentives of their builders are. It requires a _ruthless_
commitment to simplicity to keep codebases lean, readable and efficient - where unsupervised, they
will become a tightly-bound, labyrinthian snake-pit that gets progressively harder to reason about
and fills even the most fearless of developers with dread. So:

1: **Code for the human, not the computer**: Code should be written with the next developer in mind.
I don't believe that any code is self-documenting. Comment judiciously and with intent; on _why_ the
code is how it is, not the _what_ of what it is doing. The code itself is the record of what it
does. The useful stuff is about the requirements and constraints that forced it into this shape in
the first place. Sometimes you cannot avoid doing arcane gymnastics that look like ancient
incantations. It's fine - but you must explain your spells.

2: **Meaningful naming**: This is 101 - but variables, functions, and classes should have names that
reveal their intent - even if they're verbose. Avoid abbreviations and single-letter variables
unless you're doing mathy stuff that warrants it or writing in languages that expect the convention.
Extra time on naming is saved time in debugging and building.

3: **Regular code reviews**: Consider reviews as an opportunity to improve clarity and logic, not
just catch bugs or missed requirements. Encourage reviewers to ask "Could this be clearer?" rather
than just "Does this work?" with the aim to push each other to create readable, consistent systems
that then come with low-cognitive load for free.

4: **Pair programming**: Regular pair programming sessions help spread knowledge and encourage clear
communication about code decisions. It accelerates reviews and helps build consensus on direction,
as well as providing a natural opportunity to challenge and learn from one another. I like pairing a
lot and I see it really helping quality. Talking to one another is great.

5: **Beef up your PR descriptions**: Pull requests are a document of what was merged into the
codebase and its surrounding context at the time. I cannot describe how beneficial it is to write
clear, verbose pull request descriptions, complete with testing instructions and requirements
context for looking back through the repository's history. Rewarding this is a force-multiplier both
for the contributing developer and anyone that has to work on the codebase into the future and it
makes it _so much_ easier to review asynchronously for remote teams. Soon we'll be able to run LLMs
on a repo's git history too - thoroughness here creates an interface for both a human and machine
future.

Clarity is a multiplier for speed and resilience and it must be fought for, recognised and rewarded.

#### Make it easy to recover from disaster

Disaster recovery is mostly about building systems that fail gracefully and can be restored quickly.
The key is to make recovery a first-class concern, not an afterthought. Essentials:

1: **Observability and monitoring**: Knowing when something's wrong before your users do is the
first step to keeping uptime high and bug consequences low. Good monitoring tools gives developers
the gift of time to respond to something before it becomes critical or widespread, and early warning
is huge in being able to spot, diagnose and eliminate issues that slip through. Wiring up failures
to easy comms channels like Slack is a big step forward in staying on top of things happening under
the hood before customer success / support get it in the ear.

2: **Make rollback easy**: Despite every effort at testing and care, every engineer has still pushed
a bad release that's sent some part of the app to sleep by accident. Encouraging tight, atomic
releases that can be trivially reverted using version control is a really good safety net, and helps
build confidence - and confidence, over time, really helps velocity. This can also include tactical
stuff like releasing database migrations and application logic in separate releases, and splitting
tasks into lots of small, regular deliverables that are easy to review, deploy and roll back if
needed.

3: **Automated backups**: Your data layer should be backed up automatically, frequently, and the
restore process should be tested semi-regularly. This is hard in practice for smaller teams; at the
very least, current, accurate documentation of the process goes a long way. You codebase should be
at the very least version controlled, and in my opinion, use some sort of sensible branching
strategy.

The measure of a system's resilience is both in how often it experiences failure events, and how
quickly it can be recovered. Both work together.

#### Take external dependencies seriously, thoughtfully and defensively

Every external dependency is a commitment and each evolves at its own pace, sometimes faster,
sometimes slower than your software. Like any relationship, dependency management requires ongoing
maintenance and can become a liability if not thoughtfully cared for. Before introducing a new
external dependency, ask:

1. What is the role of this dependency in my codebase? Is this going to become load-bearing, or is
   it just convenient, and easy to pivot away from if needed?
2. Is there prior art for this? What can we learn from others' experiences and mistakes? Are other
   projects of our size handling this use-case in some specific way that we should know about?
3. What happens if we take on this dependency and the maintainers disappear? Could we be exposed to
   dangerous risks or vulnerabilities?
4. Can we build this ourselves? And if so, _should_ we build this ourselves? What would that cost in
   time and maintenance versus the flexibility gained by dropping an existing solution in?
5. _Does this already exist in our codebase_? Are we duplicating functionality or actually solving a
   new problem?

Introducing new dependencies means we also add something new to bring with us and maintain against -
something that we don't have direct control over. This means we should be thoughtful and disciplined
about what we introduce. Getting stuck behinds a dependency's limitations or changes automatically
redirects your team's resources away from more valuable work. Each one should earn its place in a
codebase through known, ongoing value - not exclusively initial convenience.

Audit judiciously and with care.

#### A workflow is also a living thing, and it allowed to evolve

The day-to-day of how a software team builds together is a shared mental model of how The Work gets
done. This model must be both accessible to everyone and flexible enough to evolve. It is
counter-productive to constantly tinker with the meta-process around software engineering, but as
the codebase, team and technicals expand and change, it can be powerful to ask: are we still
collaborating, releasing and delivering in a way reflective of our structure, or can we introduce
enhancements for speed, performance or safety? What new pains are we experiencing, and how might we
go about solving for them?

#### Build a team that feels co-operation is a superpower

In almost all businesses, building software is a team sport. The nature of the personalities
recruited to your engineering teams must favour co-operation so that that team can interface with
one another (and other departments) in a way where it is counterproductive to be adversarial. While
healthy competition can drive innovation, each team member must want to work towards becoming a
force-multiplier wherever possible - because it is extremely rare that anything brilliant is done in
isolation.

All this to say, it's about creating an environment where:

- You don't need a team of mega-experienced, 'rockstar' engineers to get things done. You can rely
  on well-led, smart, journeymen developers who can remain productive as the product grows and
  changes.
- All team members are set up to succeed at taking ownership for the quality of their work, and
  those around them.
- Reviews and meetings are exercises in humility, curiosity and a commitment to collective
  improvement.
- Large technical decisions are made with the team's long-term health, performance and welfare in
  mind.
- It's natural to approach hard challenges with ambition and optimism, calling in support where it's
  needed.
- Credit is shared openly and generously.

<hr/>

### Maintenance

<pre>When I say 'Maintenance', I mean: The energy, time and will that must be reserved for the ongoing care, support and security of the platform.</pre>

All maintenance is deep and true hero-work that will sadly never be celebrated like the work of
building something new. Building features is much more glamorous, easy to quantify, and create
buy-in for. This is modelled in society and political economy too. Building a huge new bridge
somewhere is far more glamorous than patching up old, crumbling roads - but that doesn't mean the
latter isn't essential work that gets people to hospital on time. Consider that:

- Because new feature must integrate with the _existing_ system, the health of the system influences
  how quickly a feature can land, and at what quality. Both are costs and both rack up quickly.
- Performance enhancements stabilise user experience and product reliability. Neither are optional
  to remain competitive.
- Every security patch works to reduce attack surface and vulnerability, and towards preserving
  reputation.
- Thoughtful refactors enable future development speed, agility and innovation.

It is astonishing to me that time to carry out maintenance work is so difficult to agitate for, when
it's so easy to evidence that ignoring it creates severe issues that leak into all corners of
software-powered businesses. The thing about all kinds of pressure (emotional, mechanical, systemic)
is this: you can design safe, controlled outlets for it to be regularly released, or you can ignore
it and it'll blow the doors off when you least expect it. Either way, it's finding it's way out.

Maybe this is a trust thing. Maybe it's a communication problem. Either way - you build _anything_
in this world and you've got to look after it.

Teams that treat maintenance as a first-order priority:

- Build things that age well and that remain clear and easy to reason about.
- Keep and share deep expertise and knowledge of their codebase that becomes a competitive
  advantage.
- Reduce their cognitive load during future development by eliminating patterns and complications
  that the project has grown past and through.
- Enjoy faster, safer and more reliable feature releases and deployment cycles.

The best teams have to recognise that ongoing maintenance is the difference between building on
solid earth rather than quicksand.

#### Technical debt

A codebase's technical debt posture requires regular attention and care. Having technical debt is
_not_ a failing in any meaningful terms. It's a tactical tool that, when managed well, can radically
accelerate progress and purpose.

My view on technical debt stems from the basic idea that when taken on well, it can unlock rapid
response to opportunity, at some acceptable cost of operational agility. Some of this looks like:

- Implementing quick, imperfect solutions to meet critical deadlines or opportunities.
- Deliberately adopting external dependencies to accelerate with limited resources.
- Defer or delay non-critical refactoring to focus on valuable new features that create revenue
  opportunities.
- Accept temporary architectural compromises to validate ideas before they're fully formed.

These decisions aren't inherently bad, are often necessary, and can be good for business. The key is
understanding that, just like financial debt:

- Decisions that land you with technical debt must be strategic, and taken on responsibly.
- It can be a powerful outcome accelerator when used intentionally.
- It requires at least some understanding of how you plan to pay it down.
- The cost of supporting the debt can't be at expense of your ability to operate day-to-day.
- Its impact lingers _long_ after the initial decision - this is with you now, and will be, until
  you sort it out. Make it worth it.

And so, the _real_ dangers of technical debt lie in letting it compound and spiral through neglect,
using it as an excuse to legitimise poor or lazy practices, or treating it as a permanent solution.
Nothing is free in this world.

Regular "debt servicing" should be:

- Scheduled into your development cycles.
- Balanced against new feature development.
- Communicated transparently to all stakeholders.
- Celebrated as valuable work among the team.

In an industry where speed often determines success, the decision to remain completely debt-free can
be unintuitively, a bad one - one that costs you opportunity, and market position. The ambition
isn't to avoid technical debt entirely, but to manage it with the same care and intention as any
other cost you take onboard.

<hr>

Good teams understand something fundamental: their systems must live in a state of perpetual
evolution as a response to the constantly changing ecosystem around them. They don't spend a lot of
time fighting this reality - they expect it, assert influence over it, and build to accommodate it.
As they say, the best way to predict the future is to invent it - and this cycle of continued
reinvention prevents complex systems becoming the victim of their own success.

We are best at achieving speed and innovation by building systems that by their very nature resist
natural deterioration. This inherent acknowledgment is one that knows slow is smooth, and smooth is
fast. This moves through the philosophical and into the practical much faster than you might expect.

Until tomorrow. 🕶 🖤
