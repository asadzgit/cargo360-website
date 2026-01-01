# 🚀 Cargo360 Website - Quick Deployment Guide

## Overview
This is a **static website** (HTML, CSS, JavaScript, Bootstrap) - no server-side processing required. Simple file upload to your hosting.

---

## 📋 Pre-Deployment Checklist

Before uploading, ensure:
- [x] All files are ready
- [x] `.htaccess` file is included
- [x] `robots.txt` is included
- [x] All images are in the `img/` folder
- [x] All CSS files are in the `css/` folder
- [x] All JavaScript files are in the `js/` folder
- [x] All library files are in the `lib/` folder

---

## 🎯 Deployment Methods

> **💡 Tip**: If you're using Parcel bundling (see section below), build your project first with `npm run build`, then deploy the contents of the `dist/` folder instead of the source files.

### **Method 1: cPanel File Manager (Easiest)**

#### Step 1: Access cPanel
1. Log in to your hosting account
2. Open **cPanel**
3. Find and click **File Manager**

#### Step 2: Navigate to Public Directory
1. In File Manager, go to **public_html** (or **www** or your domain's root folder)
2. This is where your website files will be uploaded

#### Step 3: Upload Files

**Option A: Upload ZIP (Recommended for bundling)**
1. After running `npm run build`, compress the `dist/` folder into a ZIP file
2. Click **Upload** button in File Manager
3. Upload the ZIP file (e.g., `cargo360-build.zip`)
4. Right-click the uploaded ZIP file → **Extract**
5. Delete the ZIP file after extraction
6. Done! All files are now in `public_html/`

**Option B: Upload Individual Files**
1. Click **Upload** button at the top
2. Select all files and folders:
   - **If using bundling**: Upload all contents of the `dist/` folder (after running `npm run build`)
   - **If not using bundling**: Upload all source files:
     - All `.html` files (index.html, about.html, contact.html, etc.)
     - `css/` folder (with all CSS files)
     - `js/` folder (with JavaScript files)
     - `img/` folder (with all images)
     - `lib/` folder (with all library files)
   - `.htaccess` file (important!)
   - `robots.txt` file
3. Wait for upload to complete

#### Step 4: Set File Permissions
1. Right-click on `.htaccess` → **Change Permissions**
2. Set to **644** (or check: Read, Write for Owner; Read for Group/Others)
3. Set folder permissions to **755**
4. Set file permissions to **644**

#### Step 5: Verify Upload
1. Check that `index.html` is in the root of `public_html`
2. Verify all folders (`css/`, `js/`, `img/`, `lib/`) are present
3. Ensure `.htaccess` is visible (you may need to enable "Show Hidden Files")

---

### **Method 2: FTP Client (FileZilla, WinSCP, etc.)**

#### Step 1: Get FTP Credentials
1. In cPanel, go to **FTP Accounts**
2. Note your FTP hostname, username, and password
3. Or use your cPanel username/password

#### Step 2: Connect via FTP
1. Open your FTP client (FileZilla, WinSCP, etc.)
2. Enter:
   - **Host**: ftp.yourdomain.com (or IP address)
   - **Username**: your FTP username
   - **Password**: your FTP password
   - **Port**: 21 (or 22 for SFTP)
3. Click **Connect**

#### Step 3: Upload Files
1. Navigate to `/public_html/` on the server
2. Select files from your local computer:
   - **If using bundling**: Select all contents from the `dist/` folder (after running `npm run build`)
   - **If not using bundling**: Select all source files and folders
3. Drag and drop or click **Upload**
4. Wait for transfer to complete

#### Step 4: Set Permissions
- Right-click `.htaccess` → **File Permissions** → Set to **644**
- Folders: **755**
- Files: **644**

---

## ⚡ Optional: Performance Optimization with Bundling

### What is Bundling?

**Bundling** combines multiple CSS and JavaScript files into fewer files to:
- **Reduce HTTP requests** (your site currently loads ~7 CSS files and ~8 JS files)
- **Improve load times** (fewer round trips to the server)
- **Better browser caching** (one file to cache instead of many)
- **Smaller total file size** (after minification and tree-shaking)

### When to Use Bundling?

**Optional but Recommended** for production deployments when you want to optimize performance. The current setup works perfectly fine without bundling - this is purely an optimization step.

### Current Setup (No Bundling Required)
Your current setup with separate files works great for:
- Simple deployments
- Quick updates (edit one file without rebuilding)
- Development and testing

### Using Parcel (Now Configured! ✅)

This project is now set up with **Parcel** for bundling and optimization. Here's how to use it:

#### Prerequisites
- **Node.js** installed (v14 or higher) - Download from [nodejs.org](https://nodejs.org/)

#### Setup & Build Process

1. **Install Dependencies** (first time only):
   ```bash
   npm install
   ```

2. **Build for Production**:
   ```bash
   npm run build
   ```
   This will:
   - Bundle all CSS files into optimized bundles
   - Bundle all JavaScript files into optimized bundles
   - Minify HTML, CSS, and JavaScript
   - Optimize images
   - Generate production-ready files in the `dist/` folder

3. **Development Mode** (optional, for testing):
   ```bash
   npm run dev
   ```
   This starts a local development server with hot reload at `http://localhost:1234`

#### Deployment with Bundling

After running `npm run build`, deploy the contents of the `dist/` folder instead of your source files:

1. **Build the project**:
   ```bash
   npm run build
   ```
   This creates an optimized `dist/` folder with all bundled files, and automatically copies `.htaccess`, `robots.txt`, and the `lib/` folder.

2. **Compress the `dist/` folder**:
   ```bash
   # Linux/Mac:
   cd dist
   zip -r ../cargo360-build.zip .
   cd ..
   
   # Or on Windows, right-click the dist folder → Send to → Compressed (zipped) folder
   ```

3. **Upload and extract on cPanel**:
   - Upload `cargo360-build.zip` to your `public_html/` folder via File Manager
   - Right-click the zip file → **Extract**
   - Delete the zip file after extraction
   - **OR** extract the zip locally and upload the contents directly

4. The bundled files will be optimized and ready for production! ✅

#### What Gets Bundled?

- **CSS Files**: All CSS files (Bootstrap, libraries, custom styles) → Combined and minified
- **JavaScript Files**: All JS files (jQuery, Bootstrap, libraries, custom scripts) → Combined and minified
- **HTML Files**: All HTML files are processed and optimized
- **Assets**: Images and other assets are copied and optimized

#### Benefits

- ✅ Faster page loads (fewer HTTP requests)
- ✅ Smaller file sizes (minification)
- ✅ Better browser caching
- ✅ Production-ready optimized code

---

## ✅ Post-Deployment Steps

### 1. Test Your Website
1. Open your browser
2. Go to: `http://yourdomain.com` or `https://yourdomain.com`
3. Check if the homepage loads correctly

### 2. Test All Pages
Visit each page to ensure they load:
- `http://yourdomain.com/index.html`
- `http://yourdomain.com/about.html`
- `http://yourdomain.com/contact.html`
- `http://yourdomain.com/service.html`

### 3. Enable SSL (HTTPS)
1. In cPanel, go to **SSL/TLS Status**
2. Install a free SSL certificate (Let's Encrypt)
3. Force HTTPS by uncommenting lines 8-10 in `.htaccess`:
   ```apache
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

### 4. Update robots.txt
1. Edit `robots.txt` in File Manager
2. Update the domain on line 3:
   ```
   # https://www.yourdomain.com
   ```

### 5. Test Functionality
- [ ] Homepage loads correctly
- [ ] Navigation links work
- [ ] Client Login button redirects to app.cargo360pk.com
- [ ] "Add Clearance Doc" button works
- [ ] "Request a Booking" button works
- [ ] "Free Quote" button works
- [ ] WhatsApp button works
- [ ] Images load properly
- [ ] Mobile responsive design works

---

## 🔧 Common Issues & Solutions

### Issue 1: Website shows "Index of /" or directory listing
**Solution**: Ensure `index.html` is in the root of `public_html`

### Issue 2: CSS/JS/Images not loading
**Solution**: 
- Check file paths are correct
- Verify all folders are uploaded
- Check file permissions (should be 644 for files, 755 for folders)

### Issue 3: .htaccess not working
**Solution**:
- Ensure `.htaccess` is in the root directory
- Check file permissions (should be 644)
- Verify Apache mod_rewrite is enabled (contact hosting support)

### Issue 4: 404 errors on pages
**Solution**:
- Check file names match exactly (case-sensitive)
- Verify files are in the correct directory
- Check `.htaccess` rewrite rules

### Issue 5: Mixed content warnings (HTTP/HTTPS)
**Solution**:
- Ensure all external resources use HTTPS
- Update any hardcoded HTTP URLs to HTTPS

---

## 📁 File Structure on Server

Your `public_html` should look like this:

```
public_html/
├── index.html
├── about.html
├── contact.html
├── service.html
├── feature.html
├── price.html
├── quote.html
├── team.html
├── testimonial.html
├── 404.html
├── .htaccess          ← Important!
├── robots.txt
├── css/
│   ├── bootstrap.min.css
│   └── style.css
├── js/
│   └── main.js
├── img/
│   ├── cargo-360.png
│   ├── about.jpg
│   └── ... (all other images)
└── lib/
    ├── animate/
    ├── counterup/
    ├── easing/
    ├── owlcarousel/
    ├── waypoints/
    └── wow/
```

---

## 🎯 Quick Upload Checklist

- [ ] All HTML files uploaded
- [ ] `css/` folder uploaded with all files
- [ ] `js/` folder uploaded with all files
- [ ] `img/` folder uploaded with all images
- [ ] `lib/` folder uploaded with all libraries
- [ ] `.htaccess` file uploaded (enable hidden files to see it)
- [ ] `robots.txt` file uploaded
- [ ] File permissions set correctly
- [ ] Website accessible via browser
- [ ] SSL certificate installed (if using HTTPS)

---

## 📞 Need Help?

1. **Check cPanel Error Logs**: cPanel → Metrics → Errors
2. **Contact Hosting Support**: They can help with server-specific issues
3. **Test Locally First**: Open `index.html` in browser to verify files work

---

## 🚀 That's It!

Your static website should now be live! Since it's just HTML/CSS/JS, there's no database or server configuration needed - just upload the files and you're done!

**Estimated Time**: 10-15 minutes for upload + 5 minutes for testing

---

**Last Updated**: 2025
**Status**: Ready for Deployment ✅

