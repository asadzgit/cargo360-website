#!/usr/bin/env node

/**
 * Post-build script to uncomment lib script tags
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const htmlFiles = glob.sync('*.html');

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Uncomment lib script tags
  content = content.replace(
    /<!-- (<script src="lib\/[^"]+"><\/script>) -->/g,
    '$1'
  );
  
  fs.writeFileSync(file, content, 'utf8');
  console.log(`Restored ${file}`);
});

