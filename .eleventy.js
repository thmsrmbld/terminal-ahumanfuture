const {DateTime} = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const fs = require("fs");
const path = require("path");
const {eleventyImageTransformPlugin} = require("@11ty/eleventy-img");
const readingTime = require("reading-time");

const isDev = process.env.ELEVENTY_ENV === "development";
const isProduction = process.env.ELEVENTY_ENV === "production";

const manifestPath = path.resolve(
    __dirname,
    "public",
    "assets",
    "manifest.json",
);

const manifest = isDev
    ? {
        "main.js": "/assets/main.js",
        "main.css": "/assets/main.css",
    }
    : JSON.parse(fs.readFileSync(manifestPath, {encoding: "utf8"}));

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(readingTime);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);

    eleventyConfig.setDataDeepMerge(true);
    eleventyConfig.addPassthroughCopy({"src/images": "images"});
    eleventyConfig.addPassthroughCopy({"src/fonts": "fonts"});
    eleventyConfig.setBrowserSyncConfig({files: [manifestPath]});

    // Setup Mermaid markdown highlighter
    const highlighter = eleventyConfig.markdownHighlighter;
    eleventyConfig.addMarkdownHighlighter((str, language) => {
        if (language === "mermaid") {
            return `<pre class="mermaid">${str}</pre>`;
        }
        return highlighter(str, language);
    });

    eleventyConfig.addGlobalData("eleventyComputed", {
        permalink: (data) => {
            if (data.published === false) {
                return false;
            }
            return data.permalink;
        },
        eleventyExcludeFromCollections: (data) => {
            return data.published === false;
        }
    });

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    eleventyConfig.addFilter("excerpt", (post) => {
        const content = post.replace(/(<([^>]+)>)/gi, "");
        return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
    });

    eleventyConfig.addFilter("readableDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: "utc"}).toFormat(
            "dd LLL yyyy",
        );
    });

    eleventyConfig.addFilter("getReadingTime", function (content) {
        const stats = readingTime(content || "");
        return Math.ceil(stats.minutes) || 1;
    });

    eleventyConfig.addFilter("htmlDateString", (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: "utc"}).toFormat("yyyy-LL-dd");
    });

    eleventyConfig.addFilter("dateToIso", (dateString) => {
        return new Date(dateString).toISOString();
    });

    eleventyConfig.addShortcode("bundledcss", function () {
        return manifest["main.css"]
            ? `<link href="${manifest["main.css"]}" rel="stylesheet" />`
            : "";
    });

    eleventyConfig.addShortcode("bundledjs", function () {
        return manifest["main.js"]
            ? `<script src="${manifest["main.js"]}"></script>`
            : "";
    });

    eleventyConfig.addFilter("head", (array, n) => {
        if (n < 0) {
            return array.slice(n);
        }
        return array.slice(0, n);
    });

    eleventyConfig.addFilter("dateToFormat", function (date, format) {
        return DateTime.fromJSDate(date).toFormat(format);
    });

    eleventyConfig.addCollection("tagList", function (collection) {
        let tagSet = new Set();
        collection.getAll().forEach(function (item) {
            if ("tags" in item.data) {
                let tags = item.data.tags;

                tags = tags.filter(function (item) {
                    switch (item) {
                        case "all":
                        case "nav":
                        case "post":
                        case "posts":
                            return false;
                    }

                    return true;
                });

                for (const tag of tags) {
                    tagSet.add(tag);
                }
            }
        });

        return [...tagSet];
    });

    eleventyConfig.addFilter("pageTags", (tags) => {
        const generalTags = ["all", "nav", "post", "posts"];

        return tags
            .toString()
            .split(",")
            .filter((tag) => {
                return !generalTags.includes(tag);
            });
    });

    return {
        dir: {
            input: "src",
            output: "public",
            includes: "includes",
            data: "data",
            layouts: "layouts",
        },
        passthroughFileCopy: true,
        templateFormats: ["html", "njk", "md"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
    };
};
