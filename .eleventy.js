module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style.css");

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["html", "njk", "md"]
  };
};