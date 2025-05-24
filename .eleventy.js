import { DateTime } from "luxon";
import pluginRss from "@11ty/eleventy-plugin-rss";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import readingTime from "reading-time";

// ESM equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isDev = process.env.ELEVENTY_ENV === "development";
const isProduction = process.env.ELEVENTY_ENV === "production";

const manifestPath = path.resolve(__dirname, "public", "assets", "manifest.json");

const manifest = isDev
  ? {
      "main.js": "/assets/main.js",
      "main.css": "/assets/main.css",
    }
  : JSON.parse(fs.readFileSync(manifestPath, { encoding: "utf8" }));

// Define excluded tags once at the top level
const EXCLUDED_TAGS = ["nav", "post", "posts"];
const DISPLAY_EXCLUDED_TAGS = ["all", "featured", ...EXCLUDED_TAGS];

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(readingTime);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["avif", "webp"],
    widths: [960, 1280, 1920],
    urlPath: "/img/",
    outputDir: "./public/img/",
    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
      fetchpriority: "auto",
      sizes:
        "(max-width: 960px) 960px, (max-width: 1280px) 1280px, (max-width: 1920px) 1920px, 2560px",
    },
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);
      return `${name}-${width}w.${format}`;
    },
    // Add compression settings
    sharpWebpOptions: {
      quality: 100,
      effort: 2, // Lower effort = faster encoding with better quality
      nearLossless: true, // Use near-lossless mode for better quality
      alphaQuality: 100, // Maximum alpha channel quality
    },
    sharpAvifOptions: {
      quality: 95,
      effort: 4, // Lower effort = less aggressive compression
      chromaSubsampling: "4:4:4", // Best color reproduction
      lossless: true, // Use lossless mode for maximum quality
    },
  });

  // Pre-compute data for posts during the build process
  eleventyConfig.addTransform("preprocessContent", function (content, outputPath) {
    // Only process content pages when outputPath is a string
    // This handles cases where outputPath might be false (for drafts)
    if (
      this.inputPath?.endsWith(".md") &&
      typeof outputPath === "string" &&
      outputPath.endsWith(".html")
    ) {
      // Skip processing if no page data is available
      if (!this.page) {
        console.log(`[DEBUG] No this.page available for ${outputPath}`);
        return content;
      }

      // Get plain text once
      const plainText = content.replace(/(<([^>]+)>)/gi, "");

      // Extract excerpt cleanly
      const excerpt = plainText.substr(0, plainText.lastIndexOf(" ", 200)) + "...";

      // Pre-compute reading time only once
      const stats = readingTime(plainText);
      const readingMinutes = Math.ceil(stats.minutes) || 1;

      // Pre-process tags for display
      if (this.page.tags) {
        this.page.displayTags = this.page.tags
          .filter((tag) => !DISPLAY_EXCLUDED_TAGS.includes(tag))
          .sort() // Sort tags alphabetically
          .map((tag) => ({
            name: tag,
            url: `/tags/${eleventyConfig.getFilter("slugify")(tag)}/`,
          }));
      }

      // Store pre-computed data
      this.page.excerpt = excerpt;
      this.page.readingTime = readingMinutes;
    }
    return content;
  });

  // Simple accessor for pre-computed data (fallback for backwards compatibility)
  eleventyConfig.addFilter("getProcessedContent", function (page) {
    return {
      excerpt: page.excerpt || "",
      readingTime: page.readingTime || 1,
      displayTags: page.data?.displayTags || [],
    };
  });

  // Property accessor helper
  eleventyConfig.addFilter("get", function (object, property) {
    return object[property];
  });

  // Helper function for sorting posts by featured status then date
  function sortByFeaturedAndDate(a, b) {
    // First sort by featured status (featured posts first)
    if (a.data.featured && !b.data.featured) return -1;
    if (!a.data.featured && b.data.featured) return 1;

    // Then sort by date (newer posts first)
    return b.date - a.date;
  }

  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addPassthroughCopy({ "src/fonts": "fonts" });
  eleventyConfig.setBrowserSyncConfig({ files: [manifestPath] });

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
    },
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addFilter("excerpt", (post) => {
    const content = post.replace(/(<([^>]+)>)/gi, "");
    return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
  });

  eleventyConfig.addFilter("getReadingTime", function (content) {
    const stats = readingTime(content || "");
    return Math.ceil(stats.minutes) || 1;
  });

  eleventyConfig.addFilter("dateToIso", (dateString) => {
    return new Date(dateString).toISOString();
  });

  eleventyConfig.addShortcode("bundledcss", function () {
    return manifest["main.css"] ? `<link href="${manifest["main.css"]}" rel="stylesheet" />` : "";
  });

  eleventyConfig.addShortcode("bundledjs", function () {
    return manifest["main.js"] ? `<script src="${manifest["main.js"]}"></script>` : "";
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

  // Add JSON filter for debugging
  eleventyConfig.addFilter("json", function (value) {
    // Handle circular references
    const seen = new WeakSet();
    return JSON.stringify(
      value,
      (key, value) => {
        if (typeof value === "object" && value !== null) {
          if (seen.has(value)) {
            return "[Circular]";
          }
          seen.add(value);
        }
        return value;
      },
      2
    );
  });

  // Pre-compute posts collection with enhanced metadata
  eleventyConfig.addCollection("sortedPosts", function (collectionApi) {
    // Get all posts and sort them once
    const allPosts = collectionApi.getFilteredByTag("posts").sort(sortByFeaturedAndDate);

    // We can't pre-compute pagination links here as these functions
    // are available as filters, not on the collectionApi
    return allPosts;
  });

  // Pre-generate all tag-filtered collections for performance
  eleventyConfig.addCollection("taggedPosts", function (collectionApi) {
    // Use the already sorted posts collection
    const allPosts = collectionApi.getFilteredByTag("posts").sort(sortByFeaturedAndDate);

    // Create a map for all collections
    const collections = {
      // Add 'all' tag collection
      all: allPosts,
    };

    // Get all tags used in posts
    const allTags = Array.from(
      new Set(
        allPosts
          .flatMap((post) => post.data.tags || [])
          .filter((tag) => !EXCLUDED_TAGS.includes(tag))
      )
    );

    // Create a collection for each tag
    allTags.forEach((tag) => {
      collections[tag] = allPosts.filter((post) => post.data.tags?.includes(tag));
    });

    return collections;
  });

  // Pre-compute tag statistics
  eleventyConfig.addCollection("tagStats", function (collection) {
    const posts = collection.getFilteredByTag("posts");
    const tagCounts = {};

    // Count posts per tag
    posts.forEach((post) => {
      if (Array.isArray(post.data.tags)) {
        post.data.tags.forEach((tag) => {
          if (!EXCLUDED_TAGS.includes(tag)) {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1;
          }
        });
      }
    });

    // Format tag data with counts and URLs, and sort alphabetically by tag name
    const tagStats = Object.entries(tagCounts)
      .map(([tag, count]) => ({
        name: tag,
        count,
        url: `/tags/${eleventyConfig.getFilter("slugify")(tag)}/`,
      }))
      .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

    // Add 'all' tag at the beginning
    tagStats.unshift({
      name: "all",
      count: posts.length,
      url: "/posts/",
    });

    return tagStats;
  });

  // Add filter to filter posts by tag (simplified)
  eleventyConfig.addFilter("filterByTag", function (posts, tag) {
    return tag === "all" ? posts : posts.filter((post) => post.data.tags?.includes(tag));
  });

  eleventyConfig.addCollection("tagList", function (collection) {
    // Create a Set directly to handle uniqueness in one pass
    const tagSet = new Set();
    collection.getAll().forEach((item) => {
      if (Array.isArray(item.data.tags)) {
        for (const tag of item.data.tags) {
          if (!EXCLUDED_TAGS.includes(tag)) {
            tagSet.add(tag);
          }
        }
      }
    });

    // Add 'all' at beginning and return
    return ["all", ...Array.from(tagSet).sort()];
  });

  // Filter tags for display in post listings
  // Uses DISPLAY_EXCLUDED_TAGS to determine which tags to hide
  eleventyConfig.addFilter("filterTagsForDisplay", (tags) => {
    return tags
      .toString()
      .split(",")
      .filter((tag) => !DISPLAY_EXCLUDED_TAGS.includes(tag));
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

    // Performance optimizations
    cacheDuration: "1d",
    dynamicPartials: false,
    eleventyImportMap: {
      collections: {
        posts: "**.md",
      },
    },
  };
}
