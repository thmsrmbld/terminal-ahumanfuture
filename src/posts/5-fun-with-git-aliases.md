---
title: Git aliases for fun and profit
date: 2025-05-28
nowPlaying: Ekranoplan, by Uamee
audioLink: https://open.spotify.com/track/3ew4iDqMknbStcXhbX4mdd?si=4ee193ec76b147d0
tags:
  - software
  - workflow
  - tooling
  - ekranoplan
description:
  Some little aliases / shortcuts in everyone's favourite version control system. Also, the
  Lun-class Ekranoplan.
published: true
featured: false
---

<pre>
<strong>"Git gets easier once you grasp the basic idea that branches are homeomorphic 
endofunctors, mapping submanifolds of a Hilbert space."</strong> - Anonymous
</pre>

<figure>
<img alt="The interior of the lun-class Ekranoplan. Dials upon dials on turquoise metal, very complicated." src="../images/articles/caspian.jpg"/>
<figcaption class="padded-top">
  [The interior of the Lun-class Ekranoplan.]
</figcaption>
</figure>

## The Lun-class Ekranoplan was a 280,000-kilogram Soviet-era, cruise-missile mounted seaplane

Sometimes working with
<a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" aria-label="Git official website (opens in new tab)">Git</a>
feels like what I imagine being a solo captain of the 280,000 kilogram
<a href="https://en.wikipedia.org/wiki/Lun-class_ekranoplan" target="_blank" rel="noopener noreferrer" aria-label="Wikipedia article about Lun-class Ekranoplan (opens in new tab)">Lun-class
ekranoplan</a> would feel like, which incidentally is the only
<a href="https://en.wikipedia.org/wiki/Ground-effect_vehicle" target="_blank" rel="noopener noreferrer" aria-label="Wikipedia article about ground-effect vehicles (opens in new tab)">ground-effect
vehicle</a> to ever be operationally mobilised as a warship, deploying in the Caspian Flotilla. It
was designed in 1975 by Rostislav Alexeyev of what later became the _Alekseyev Central Hydrofoil
Design Bureau_, and it was used by the Soviet (and later, Russian) navies from 1987 until the late
1990s. It required a crew of 15 career naval officers to operate.

I occasionally think that personally stealing and attempting to commandeer the largest piece of
Soviet-era marine aeronautics machinery of all time would deliver a less ergonomically hostile
experience than Git; a computer tool that most software developers need only 4 commands from in
order to save their work to the Internet.

I know what you're going to say:

<blockquote>"You just don't know how to use Git." - Git Enjoyers</blockquote>

<strong>False</strong>. I do know how to use Git. The problem is that I am a person that both knows
how to use Git _and_ believes that a better world is possible; a complex psychological position that
requires two separate and orthogonal systems of thought to exist in harmony with one another.
Anyway. I do also sometimes quite like Git, so my thoughts on this issue are mixed and many, and
influenced strongly by whether or not I am enjoying programming computers that day. Plus, I'm being
deliberately facetious because I want to write about the Ekranoplan. Git _is_ absurdly powerful, and
as a result, is sometimes hard. It solves a nasty problem that is deceptively complicated in a way
that I suspect is still the best of all of the big version control systems. The fact that it
dominates in spite of its DX is a testament to it's utility.

## Arcane computer incantations

This article is less about my personal vendetta against arcane computer incantations and more about
some of the small ways I've found to improve that experience for myself and as such, remain
employed. Some part of that is writing aliases. Hilariously, even the
<a href="https://git-scm.com/book/ms/v2/Git-Basics-Git-Aliases" target="_blank" rel="noopener noreferrer" aria-label="Git documentation on aliases (opens in new tab)">aliases</a>
web page in some way reads like an ancient scroll, and the documentation in general is in some
places sufficiently obscure that
<a href="https://git-man-page-generator.lokaltog.net/" target="_blank" rel="noopener noreferrer" aria-label="Git man page generator parody (opens in new tab)">it
spawned it's own excellent parody</a> - indistinguishable from some of the actual documentation.

Simply put, Git aliases are custom shortcuts that you create to replace longer Git commands with
shorter, easier-to-remember alternatives. They're essentially abbreviations you define in your
<strong>.gitconfig</strong> file that let you type something brief like <code>git st</code> instead
of <code>git status --short --branch</code>. Considering that the vast majority of software
engineers never use more than about 15 git commands in their career, and _my_ personal memory in the
category of 'insane computer syntax' is a disaster, with enough of these aliases, I've been able to
build a small collection of utilities that let me do almost everything I regularly need to, without
having to read the documentation very often.

This collection is really for developers who've moved beyond the basics of pulling, branching,
committing and pushing, and want to streamline their general Git workflow. They cover fairly common
cases that save me both keystrokes and mental overhead. I'm sharing them here with you in case
they're also useful for you!

<p>If you want to, you can copy any (or all) of them in one go, later in the article.</p>

### The collection

<div class="alias-card">
  <div>
    <h4>git aa</h4>
    <span class="category">Staging</span>
  </div>
  <p><strong>Purpose: </strong>Stage all changes, including new and deleted files. Basically a <strong>git add .</strong> shortcut.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">aa = add --all</p>
    <p>Use it like this: <strong>git aa</strong></p>
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git big-mad</h4>
    <span class="category">Cleanup | ⚠️</span>
  </div>
  <p><strong>Purpose:</strong> Completely undo your last commit and discard all changes. This resets your branch to the previous commit.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">big-mad = reset --hard HEAD^</p>
        <p>(This is useful when you want to pretend a commit never
         happened, not just clear your working directory. Important: Only use uh on 
         branches that haven't been pushed or shared with others, as it deliberately 
         rewrites history.)
         </p>
      <p>Use it like this: <strong>git big-mad</strong></p>
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git br</h4>
    <span class="category">Branch Management</span>
  </div>
  <p><strong>Purpose:</strong> List all remote branches at once. Good for seeing what's on the upstream.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">br = branch -r</p>
    <p>Use it like this: <strong>git br</strong></p>
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git bv</h4>
    <span class="category">Branch Management</span>
  </div>
  <p><strong>Purpose:</strong> Show local branches with some useful tracking and last commit info.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">bv = branch -vv</p>
    <p>Use it like this: <strong>git bv</strong></p>
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git ca</h4>
    <span class="category">Commit Management</span>
  </div>
  <p><strong>Purpose:</strong> Instantly amend your last commit.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">ca = commit --amend</p>
    <p>(This will open your default editor with the previous commit message, allowing you to modify it if needed. When you save and close the editor, your previous commit will be replaced with a new one containing both the original changes and your new changes, along with the new commit message.)</p>
    <p>Use it like this: <strong>git ca</strong></p>
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git ci</h4>
    <span class="category">Commit Management</span>
  </div>
  <p><strong>Purpose:</strong> Commit all staged and tracked changes, with a diff preview.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">ci = commit -a -v</p>
    <p>Use it like this: <strong>git ci -m "Add new feature"</strong></p>
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git cm</h4>
    <span class="category">Commit Management | ⚠️</span>
  </div>
  <p><strong>Purpose:</strong> Amend the last commit with all current changes while keeping the original commit message.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">cm = commit -a --amend -C HEAD</p>
    <p>Use it like this: <strong>git cm</strong></p>
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git cp</h4>
    <span class="category">Branch Management</span>
  </div>
  <p><strong>Purpose:</strong> Cherry-pick a specific commit onto your current branch.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">cp = cherry-pick</p>
    <p>Use it like this: <strong>git cp a1b2c3d</strong></p>
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git dm</h4>
    <span class="category">Review</span>
  </div>
  <p><strong>Purpose:</strong> See a colorized summary of files changed on your current branch, compared to the main branch.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">dm = "!sh -c 'echo; git diff --name-status --diff-filter=ADM origin/main...$(git rev-parse --abbrev-ref HEAD) | sed -e \"s/^A/\\x1b[32mA\\x1b[0m/\" -e \"s/^M/\\x1b[33mM\\x1b[0m/\" -e \"s/^D/\\x1b[31mD\\x1b[0m/\"; echo; echo -e \"\\x1b[94mPaths changed: $(git diff --name-status --diff-filter=ADM origin/main...$(git rev-parse --abbrev-ref HEAD) | wc -l)\\x1b[0m\"'"</p>
    <p>(Cool for working out exactly in what way your local branch is different to that of main.)</p>
    <p>Use it like this: <strong>git dm</strong></p>
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git force-safe</h4>
    <span class="category">Collaboration | ⚠️</span>
  </div>
  <p><strong>Purpose:</strong> Safely force-push your branch, provided no one else has pushed to the branch since your last pull.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">force-safe = push --force-with-lease</p>
    <p>Use it like this: <strong>git force-safe origin feature/branch</strong></p>
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git graph</h4>
    <span class="category">Log/History</span>
  </div>
  <p><strong>Purpose:</strong> View a compact, visual commit graph showing all branches and their relationships.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">graph = log --oneline --graph --decorate --all</p>
    <p>Use it like this: <strong>git graph</strong></p>
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git last</h4>
    <span class="category">Log/History</span>
  </div>
  <p><strong>Purpose:</strong> Show details of your latest commit including changed files.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">last = log -1 HEAD --stat</p>
    <p>Use it like this: <strong>git last</strong></p>
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git ld</h4>
    <span class="category">Log/History</span>
  </div>
  <p><strong>Purpose:</strong> View commit history with a branch graph and short dates for easy scanning.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">ld = log --pretty=format:"%C(yellow)%h\\ %C(green)%ad%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --date=short --graph</p>
    <p>Use it like this: <strong>git ld</strong></p>
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git lg</h4>
    <span class="category">Log/History</span>
  </div>
  <p><strong>Purpose:</strong> See a colorized, graphical commit log with authors and relative times.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">lg = log --color --graph --abbrev-commit --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%C(bold blue)<%an>%Creset'</p>
    <p>Use it like this: <strong>git lg</strong></p>
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git ll</h4>
    <span class="category">Log/History</span>
  </div>
  <p><strong>Purpose:</strong> View a detailed commit log with stats and committer information.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">ll = log --pretty=format:"%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --numstat</p>
    <p>Use it like this: <strong>git ll</strong></p>
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git ls</h4>
    <span class="category">Log/History</span>
  </div>
  <p><strong>Purpose:</strong> View commit log with relative dates for a quick activity overview.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">ls = log --pretty=format:"%C(green)%h\\ %C(yellow)[%ad]%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --date=relative</p>
    <p>Use it like this: <strong>git ls</strong></p>
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git mad</h4>
    <span class="category">Cleanup | ⚠️</span>
  </div>
  <p><strong>Purpose:</strong> Harness the fury: discard all local changes and reset to the current HEAD.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">mad = reset --hard HEAD</p>
    <p>Use it like this: <strong>git mad</strong></p>
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git mm</h4>
    <span class="category">Branch Management</span>
  </div>
  <p><strong>Purpose:</strong> Merge with a commit message but don't fast-forward. This preserves branch history in the commit graph, which is sometimes good if you want that for posterity.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">mm = merge --no-ff</p>
    <p>Use it like this: <strong>git mm feature/branch</strong></p>
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git recent</h4>
    <span class="category">Branch Management</span>
  </div>
  <p><strong>Purpose:</strong> List your 20 most recently updated local branches for easy reference.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">recent = for-each-ref --sort=-committerdate --count=20 --format='%(refname:short)' refs/heads/</p>
    <p>Use it like this: <strong>git recent</strong></p>
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git st</h4>
    <span class="category">Inspection</span>
  </div>
  <p><strong>Purpose:</strong> See a compact status with branch info for a quick overview of changes.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">st = status --short --branch</p>
    <p>Use it like this: <strong>git st</strong></p>
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git sw</h4>
    <span class="category">Branch Management</span>
  </div>
  <p><strong>Purpose:</strong> Create and switch to a new branch in one go.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">sw = switch -c</p>
    <p>Use it like this: <strong>git sw feature/new-design</strong></p>
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git sync</h4>
    <span class="category">Branch Management</span>
  </div>
  <p><strong>Purpose:</strong> Quickly update a local branch with its remote counterpart without checking it out.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">sync = "!git fetch origin $1:$1"</p>
    <p>Use it like this: <strong>git sync branch-name</strong></p>
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git undo</h4>
    <span class="category">Commit Management | ⚠️</span>
  </div>
  <p><strong>Purpose:</strong> Undo the last commit while keeping your changes staged and ready for a new commit.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">undo = reset --soft HEAD^</p>
    <p>Use it like this: <strong>git undo</strong></p>
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git unstage</h4>
    <span class="category">Staging</span>
  </div>
  <p><strong>Purpose:</strong> Remove files from the staging area without discarding your changes.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">unstage = reset HEAD --</p>
    <p>Use it like this: <strong>git unstage file.txt</strong> or <strong>git unstage .</strong> for all files.</p>
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git wip</h4>
    <span class="category">Commit Management</span>
  </div>
  <p><strong>Purpose:</strong> Save a quick "Work In Progress" commit to temporarily save your changes.</p>
  <details>
    <summary>What do I put in [alias]?</summary>
    <p class="strong">wip = !git add -A && git commit -m "WIP"</p>
    <p>Use it like this: <strong>git wip</strong></p>
  </details>
</div>

<hr>

<figure>
<img style="margin-bottom: 0.5rem;" alt="A picture of the Lun Class Ekranoplan, abandoned on the Dagestan shore." src="../images/articles/lun-class-ekranoplan.jpg"/>
<figcaption class="padded-top">[Abandoned off of the Dagestan coast; too weird to live. Too rare to die.]</figcaption>
</figure>
<p>
<details>
  <summary>Grab the whole alias snippet.</summary>

```
[alias]
    aa = add --all
    big-mad = reset --hard HEAD^
    br = branch -r
    bv = branch -vv
    ca = commit --amend
    ci = commit -a -v
    cm = commit -a --amend -C HEAD
    co = checkout
    cp = cherry-pick
    dm = !sh -c 'echo; git diff --name-status --diff-filter=ADM origin/main...$(git rev-parse --abbrev-ref HEAD) | sed -e "s/^A/\\x1b[32mA\\x1b[0m/" -e "s/^M/\\x1b[33mM\\x1b[0m/" -e "s/^D/\\x1b[31mD\\x1b[0m/"; echo; echo -e "\\x1b[94mPaths changed: $(git diff --name-status --diff-filter=ADM origin/main...$(git rev-parse --abbrev-ref HEAD) | wc -l)\\x1b[0m"'
    force-safe = push --force-with-lease
    graph = log --oneline --graph --decorate --all
    last = log -1 HEAD --stat
    ld = log --pretty=format:"%C(yellow)%h\\ %C(green)%ad%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --date=short --graph
    lg = log --color --graph --abbrev-commit --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%C(bold blue)<%an>%Creset'
    ll = log --pretty=format:"%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --numstat
    ls = log --pretty=format:"%C(green)%h\\ %C(yellow)[%ad]%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --date=relative
    mad = reset --hard HEAD
    mm = merge --no-ff
    recent = for-each-ref --sort=-committerdate --count=20 --format='%(refname:short)' refs/heads/
    st = status --short --branch
    sw = switch -c
    sync = !git fetch origin $1:$1
    undo = reset --soft HEAD^
    unstage = reset HEAD --
    wip = !git add -A && git commit -m "WIP"
```

</details>
</p>
<p>
Good luck with Git. Learn more, and 
<a href="https://wildlyinaccurate.com/a-hackers-guide-to-git/" target="_blank" rel="noopener noreferrer" aria-label="A Hacker's Guide to Git (opens in new tab)">learn excellently, here</a>. As always, I am wishing you a kinder sea.  
</p>
<p>
<em>(Metaphorically and literally; a kind sea was crucial for
the Lun-class Ekranoplan, a 280,000kg vehicle that could only fly a maximum of 10ft above the water's surface due to its short wingspan, so could not be mobilised if seas were even mildly choppy.)</em>
</p>
<p> 🕶 🖤</p>
