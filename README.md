# Terminal (Static site, 11ty)

[![Netlify Status](https://api.netlify.com/api/v1/badges/7a307170-2fd5-4a8f-a232-589f8510f668/deploy-status)](https://app.netlify.com/sites/terminal-ahumanfuture/deploys)

This repo is for my personal site at [terminal.ahumanfuture.co](https://ahumanfuture.co). It's a gently modified version
of a minimal theme called [Duo](https://github.com/yinkakun/eleventy-duo), and it's built
using the excellent [11ty](https://www.11ty.dev).

It's designed to look and feel a little bit like another of my websites - [AHF](https://ahumanfuture.co).

(The SSG choice is mostly because I find writing text files into computers almost infinitely
simpler than learning whatever the current cool CMS hotness is; and I want to be able to have a copy of my content because
centralised / private services have a habit of eventually collapsing, taking
your content with them. I also cannot justify the maintenance / ownership overhead of using something Django-based for this case.)

**Using the theme**: There are good instructions on how to get started
with [Duo](https://github.com/yinkakun/eleventy-duo)
as a base theme on the Github repository; I just followed those instructions and made various minor tweaks to colours,
typography, templates, shortcodes, etc.

---

## Deployment

[Netlify](https://netlify.com) is a good way to easily deploy sites. There's no special setup needed for Eleventy as a
static site generator. Alternative vendors solving the same problem also exist.

- Create a new site and upload to Github.
- Create a Netlify account, create a new site and import / link your Github repository.
- Set the build command to `yarn build`.
- Set the publish directory to `public`.

This should be it. Remember, you'll need to point your custom domain at the Netlify host. They make it easy to do
so; you can manage your domains through them too.

## License

This project is licensed under the MIT License, in accordance with the base theme.
