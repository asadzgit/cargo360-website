#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const mode = process.argv[2]; // 'comment', 'restore', or 'add-to-dist'
const targetDir = process.argv[3] || '.'; // Directory to process (default: current dir)

// List of HTML files to process
const htmlFiles = [
  'index.html', 'about.html', 'contact.html', 'service.html',
  'feature.html', 'price.html', 'quote.html', 'team.html',
  'testimonial.html', '404.html'
].filter(file => fs.existsSync(path.join(targetDir, file)))
 .map(file => path.join(targetDir, file));

// Lib script tags that need to be added to dist
const libScriptTags = `
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
`;

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  if (mode === 'comment') {
    // Comment out lib script tags
    content = content.replace(/(<script src="lib\/[^"]+"><\/script>)/g, '<!-- $1 -->');
    console.log(`Commented lib scripts in ${file}`);
  } else if (mode === 'restore') {
    // Restore lib script tags
    content = content.replace(/<!-- (<script src="lib\/[^"]+"><\/script>) -->/g, '$1');
    console.log(`Restored lib scripts in ${file}`);
  } else if (mode === 'add-to-dist') {
    // Add lib script tags before the bundled JS file in dist HTML
    // Find the bundled JS script tag (with or without quotes) and insert lib scripts before it
    const bundledJSPattern = /(<script src=["']?[^"'\s]+\.js["']?><\/script>)/;
    const match = content.match(bundledJSPattern);
    if (match && !content.includes('lib/wow')) {
      content = content.replace(bundledJSPattern, libScriptTags.trim() + '\n\n    $1');
      console.log(`Added lib scripts to ${file}`);
    } else if (content.includes('lib/wow')) {
      console.log(`Lib scripts already present in ${file}`);
    }
  }
  
  fs.writeFileSync(file, content, 'utf8');
});

