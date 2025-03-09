# Terminal (Personal website / static site)

This repo is for my personal site at [terminal.ahumanfuture.co](https://ahumanfuture.co). It's a gently modified version
of a minimal theme called [Duo](https://github.com/yinkakun/eleventy-duo), and it's built
on [11ty](https://www.11ty.dev).

It's designed to look and feel a little bit like another of my websites, [AHF](https://ahumanfuture.co) but run on
11ty, so I can write content using Markdown and publish/deploy with almost no effort using an SSG-compatible host
through Github deployment hooks.

(The SSG choice is mostly because I find writing text files into computers almost infinitely
simpler than learning whatever the new cool CMS stuff is; and I want to be able to have a copy of my content because
centralised / private services have a habit of eventually collapsing into something you've got no control over, taking
your content with them. I also cannot justify the ownership overhead of using something Django-based for this case.)

**Using the theme**: There are good instructions on how to get started
with [Duo](https://github.com/yinkakun/eleventy-duo)
as a base theme on the github repository; I just followed those instructions and made various minor tweaks to colours,
typography, etc.

---

## Deployment

[Netlify](https://netlify.com) is a good way to easily deploy sites. There's no special setup needed for Eleventy as a
static site generator.

- Create a new site in Netlify and import your repository.
- Set the build command to `yarn build`
- Set the publish directory to `public`

## License

This project is licensed under the MIT License, in accordance with the base theme.
