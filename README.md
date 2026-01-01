# Cargo360 Website

Professional logistics and freight forwarding website for Cargo360 Pakistan.

## 🚀 Deployment Instructions

### cPanel Deployment

1. **Upload Files**
   - Upload all files to your cPanel `public_html` directory (or subdirectory)
   - Maintain the directory structure (css/, js/, img/, lib/)

2. **File Permissions**
   - Set directory permissions to `755`
   - Set file permissions to `644`
   - Ensure `.htaccess` is readable (permission `644`)

3. **SSL Certificate**
   - Enable SSL certificate in cPanel
   - Uncomment HTTPS redirect in `.htaccess` (line 8-10) after SSL is active

4. **Domain Configuration**
   - Update `robots.txt` with your actual domain
   - Update any hardcoded URLs in HTML files if needed
   - Configure DNS settings in cPanel

5. **Testing**
   - Test all pages: index.html, about.html, contact.html, service.html
   - Verify Client Login button redirects to `app.cargo360pk.com`
   - Check mobile responsiveness
   - Test form submissions (if any)
   - Verify WhatsApp button functionality

## 📁 Project Structure

```
cargo360-website/
├── index.html          # Homepage
├── about.html          # About Us page
├── contact.html        # Contact page
├── service.html        # Services page
├── feature.html        # Features page
├── price.html          # Pricing page
├── quote.html          # Quote page
├── team.html           # Team page
├── testimonial.html     # Testimonials page
├── 404.html            # 404 Error page
├── css/                # Stylesheets
├── js/                 # JavaScript files
├── img/                # Images and assets
├── lib/                # Third-party libraries
├── .htaccess          # Apache configuration
├── robots.txt          # SEO robots file
└── README.md           # This file
```

## 🔧 Configuration

### `.htaccess` Settings

- **HTTPS Redirect**: Uncomment lines 8-10 after SSL is configured
- **WWW Redirect**: Uncomment and configure lines 13-15 if needed
- **Caching**: Already configured for optimal performance
- **Compression**: Enabled for faster page loads

### SEO Settings

- All pages include proper meta tags (title, description, keywords)
- `robots.txt` is configured for search engine crawling
- Update sitemap URL in `robots.txt` when sitemap is created

## 📞 Contact Information

- **Address**: Plaza # 146, 5th Floor. Sector C commercial area Bahria Town Lahore
- **Phone**: +92 333 7766609
- **Email**: info@cargo360pk.com
- **Client Portal**: https://app.cargo360pk.com

## 🔒 Security

- Security headers configured in `.htaccess`
- Sensitive files protected
- Directory browsing disabled
- XSS and clickjacking protection enabled

## 📝 Notes

- All template branding has been removed
- Client Login button redirects to `app.cargo360pk.com`
- WhatsApp integration: +92 333 7766609
- All placeholder content replaced with Cargo360 information

## 🛠️ Maintenance

- Regularly update content as needed
- Monitor `.htaccess` error logs
- Keep third-party libraries (lib/) updated
- Backup files regularly before making changes

## 📄 License

This website is proprietary to Cargo360. All rights reserved.

---

**Last Updated**: 2025
**Version**: 1.0.0

