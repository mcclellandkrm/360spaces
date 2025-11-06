const PurgeCSS = require('purgecss');
const fs = require('fs');

(async () => {
  const result = await new PurgeCSS.PurgeCSS().purge({
  content: ['dist/**/*.html'],
  css: ['dist/style.css']
});

  if (result[0]) {
    fs.writeFileSync('dist/style.css', result[0].css);
    console.log('CSS purged successfully. New file size:', result[0].css.length / 1024, 'KB');
  }
})();