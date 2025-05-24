---
title: Git aliases for fun and profit
date: 2025-05-26
nowPlaying: It Could Happen To You, by Chet Baker
audioLink: https://open.spotify.com/track/0Ve39xlLUEwJlxEpKR117l?si=16d821fd32604f6e
tags:
  - software
  - workflow
description: Useful aliases / shortcuts in everyone's favourite impenetrable version control system.
published: true
featured: false
---

<pre>
<strong>"Git gets easier - once you grasp the basic idea that branches are homeomorphic endofunctors, mapping submanifolds of a Hilbert space."</strong> - Anonymous
</pre>

<!-- <img alt="test" src=""/>
<div class="padded-top">
  [Photo by <a href="" target="_blank">Compare Fibre</a>]
</div> -->

<!--
TODO

* Sort image
* Write intro
* Check each command / test them
* Add the usage piece / example
* Write closing paragraph

-->

## Intro

### Aliases

<p>So here's what I used to make my work day a little easier.</p>

<div class="alias-card">
  <div>
    <h4>git aa</h4>
    <span class="category">Staging</span>
  </div>
  <p><strong>Task: </strong>Stage all changes, including new and deleted files. Basically a <strong>git add .</strong> shortcut.</p>
  <details>
    <summary>What's the command?</summary>aa = add --all
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git br</h4>
    <span class="category">Branch Management</span>
  </div>
  <p><strong>Task:</strong> List all remote branches at a glance.</p>
  <details>
    <summary>What's the command?</summary>br = branch -r
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git bv</h4>
    <span class="category">Branch Management</span>
  </div>
  <p><strong>Task:</strong> Show local branches with tracking and last commit info.</p>
  <details>
    <summary>What's the command?</summary>bv = branch -vv
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git ca</h4>
    <span class="category">Commit Management</span>
  </div>
  <p><strong>Task:</strong> Instantly amend your last commit.</p>
  <details>
    <summary>What's the command?</summary>ca = commit --amend
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git cb</h4>
    <span class="category">Branch Management</span>
  </div>
  <p><strong>Task:</strong> Create and switch to a new branch in one go.</p>
  <details>
    <summary>What's the command?</summary>cb = checkout -b
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git ci</h4>
    <span class="category">Commit Management</span>
  </div>
  <p><strong>Task:</strong> Commit all staged and tracked changes, with a diff preview.</p>
  <details>
    <summary>What's the command?</summary>ci = commit -a -v
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git cm</h4>
    <span class="category">Commit Management</span>
  </div>
  <p><strong>Task:</strong> Amend last commit with all current changes, keep the message.</p>
  <details>
    <summary>What's the command?</summary>cm = commit -a --amend -C HEAD
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git co</h4>
    <span class="category">Branch Management</span>
  </div>
  <p><strong>Task:</strong> Switch branches or restore files easily.</p>
  <details>
    <summary>What's the command?</summary>co = checkout
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git cp</h4>
    <span class="category">Branch Management</span>
  </div>
  <p><strong>Task:</strong> Cherry-pick a specific commit onto your branch.</p>
  <details>
    <summary>What's the command?</summary>cp = cherry-pick
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git di</h4>
    <span class="category">Review</span>
  </div>
  <p><strong>Task:</strong> Show changes between your workspace and last commit.</p>
  <details>
    <summary>What's the command?</summary>di = diff
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git dm</h4>
    <span class="category">Review</span>
  </div>
  <p><strong>Task:</strong> Colourised summary of files changed vs. main branch.</p>
  <details>
    <summary>What's the command?</summary>dm = "!sh -c 'echo; git diff --name-status --diff-filter=ADM origin/main...$(git rev-parse --abbrev-ref HEAD) | sed -e \"s/^A/\\x1b[32mA\\x1b[0m/\" -e \"s/^M/\\x1b[33mM\\x1b[0m/\" -e \"s/^D/\\x1b[31mD\\x1b[0m/\"; echo; echo -e \"\\x1b[94mPaths changed: $(git diff --name-status --diff-filter=ADM origin/main...$(git rev-parse --abbrev-ref HEAD) | wc -l)\\x1b[0m\"'"
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git last</h4>
    <span class="category">Log/History</span>
  </div>
  <p><strong>Task:</strong> Show details of your latest commit.</p>
  <details>
    <summary>What's the command?</summary>last = log -1 HEAD --stat
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git ld</h4>
    <span class="category">Log/History</span>
  </div>
  <p><strong>Task:</strong> Show commit history with a branch graph and short dates.</p>
  <details>
    <summary>What's the command?</summary>ld = log --pretty=format:"%C(yellow)%h\\ %C(green)%ad%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --date=short --graph
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git lg</h4>
    <span class="category">Log/History</span>
  </div>
  <p><strong>Task:</strong> Colourised, graphical commit log with authors and times.</p>
  <details>
    <summary>What's the command?</summary>lg = log --color --graph --abbrev-commit --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%C(bold blue)<%an>%Creset'
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git ll</h4>
    <span class="category">Log/History</span>
  </div>
  <p><strong>Task:</strong> Detailed commit log with stats and committer info.</p>
  <details>
    <summary>What's the command?</summary>ll = log --pretty=format:"%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --numstat
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git ls</h4>
    <span class="category">Log/History</span>
  </div>
  <p><strong>Task:</strong> Commit log with relative dates for quick activity checks.</p>
  <details>
    <summary>What's the command?</summary>ls = log --pretty=format:"%C(green)%h\\ %C(yellow)[%ad]%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --date=relative
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git mm</h4>
    <span class="category">Branch Management</span>
  </div>
  <p><strong>Task:</strong> Merge with a commit, never fast-forward—preserve history.</p>
  <details>
    <summary>What's the command?</summary>mm = merge --no-ff
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git force-safe</h4>
    <span class="category">Collaboration / Safety</span>
  </div>
  <p><strong>Task:</strong> Safely force-push your branch if no one else has pushed.</p>
  <details>
    <summary>What's the command?</summary>force-safe = push --force-with-lease
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git recent</h4>
    <span class="category">Branch Management</span>
  </div>
  <p><strong>Task:</strong> List your 20 most recently updated branches.</p>
  <details>
    <summary>What's the command?</summary>recent = for-each-ref --sort=-committerdate --count=20 --format='%(refname:short)' refs/heads/
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git st</h4>
    <span class="category">Inspection</span>
  </div>
  <p><strong>Task:</strong> Compact status with branch info for a quick check.</p>
  <details>
    <summary>What's the command?</summary>st = status --short --branch
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git sync</h4>
    <span class="category">Branch Management</span>
  </div>
  <p><strong>Task:</strong> Quickly synchronise a single local branch with its remote counterpart.</p>
  <details>
    <summary>What's the command?</summary>sync = "!git fetch origin $1:$1"
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git type</h4>
    <span class="category">Inspection</span>
  </div>
  <p><strong>Task:</strong> Show the type of any Git object (commit, blob, etc).</p>
  <details>
    <summary>What's the command?</summary>type = cat-file -t
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git uh</h4>
    <span class="category">Cleanup/Reset</span>
  </div>
  <p><strong>Task:</strong> Undo your last commit and all changes—reset to previous commit.</p>
  <details>
    <summary>What's the command?</summary>uh = reset --hard HEAD^
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git un</h4>
    <span class="category">Cleanup/Reset</span>
  </div>
  <p><strong>Task:</strong> Discard all local changes; reset to last commit.</p>
  <details>
    <summary>What's the command?</summary>un = reset --hard HEAD
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git undo</h4>
    <span class="category">Commit Management</span>
  </div>
  <p><strong>Task:</strong> Undo the last commit but keep your changes staged.</p>
  <details>
    <summary>What's the command?</summary>undo = reset --soft HEAD^
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git unstage</h4>
    <span class="category">Staging</span>
  </div>
  <p><strong>Task:</strong> Unstage files without discarding changes.</p>
  <details>
    <summary>What's the command?</summary>unstage = reset HEAD --
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git wip</h4>
    <span class="category">Commit Management</span>
  </div>
  <p><strong>Task:</strong> Quick "Work In Progress" commit for mid-task saves.</p>
  <details>
    <summary>What's the command?</summary>wip = !git add -A && git commit -m "WIP"
  </details>
</div>

<div class="alias-card">
  <div>
    <h4>git graph</h4>
    <span class="category">Log/History</span>
  </div>
  <p><strong>Task:</strong> Show commit graph with all branches in a compact format.</p>
  <details>
    <summary>What's the command?</summary>graph = log --oneline --graph --decorate --all
  </details>
</div>

<hr/>

Until tomorrow. 🕶 🖤
