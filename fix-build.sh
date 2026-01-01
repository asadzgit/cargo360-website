#!/bin/bash

# Comment out lib script tags before build (in source files)
node scripts/build-helper.js comment

# Build with Parcel
npm run build:parcel

# Restore lib script tags in source files
node scripts/build-helper.js restore

# Add lib script tags to dist HTML files (Parcel removed the commented ones)
node scripts/build-helper.js add-to-dist dist
