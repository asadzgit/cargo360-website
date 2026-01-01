#!/usr/bin/env node

/**
 * Pre-build script to comment out lib script tags
 * so Parcel doesn't try to process them
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const htmlFiles = glob.sync('*.html');

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Comment out lib script tags
  content = content.replace(
    /(<script src="lib\/[^"]+"><\/script>)/g,
    '<!-- $1 -->'
  );
  
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Processed ${file}`);
});

