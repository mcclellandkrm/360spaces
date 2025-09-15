# 360spaces.co.uk Production Deployment Guide

## 🚀 Ready for Launch!

Your site is now configured for production deployment to **360spaces.co.uk**. Here's what was updated:

### ✅ Changes Made:

- **Removed `/360new/` path prefix** - Site now works from root domain
- **Updated meta tags** - Professional SEO-optimized titles and descriptions
- **Added Open Graph tags** - Better social media sharing
- **Added robots.txt** - Search engine optimization
- **Updated package.json** - Added production build script
- **Added canonical URLs** - SEO best practices

---

## 📁 Files to Upload

Upload the **entire contents** of the `dist/` folder to your web hosting root directory:

```
dist/
├── index.html                    # Homepage
├── robots.txt                    # SEO file
├── style.css                     # Main stylesheet
├── case-studies/                 # Case study pages
│   ├── index.html
│   ├── hastings-hotels/
│   ├── limavady-high-school/
│   └── oneills-retail/
├── use-cases/
│   └── index.html
└── images/                       # All images and assets
    ├── 360spaceslogo.svg
    ├── 360spaceslogo2.svg
    ├── timeline.json
    └── [all other images]
```

---

## 🌐 Deployment Steps

### Option 1: FTP/SFTP Upload

1. **Connect to your hosting** via FTP/SFTP client (FileZilla, WinSCP, etc.)
2. **Navigate to public_html/** (or your domain root folder)
3. **Upload ALL contents** from the `dist/` folder
4. **Verify upload** - Check that `index.html` and `style.css` are in the root

### Option 2: cPanel File Manager

1. **Login to your hosting cPanel**
2. **Open File Manager**
3. **Navigate to public_html/** (or your domain root)
4. **Upload the dist folder contents** (not the dist folder itself)
5. **Extract if needed** and ensure files are in the root

### Option 3: Hosting Provider Tools

- Many hosts have direct upload tools or Git integration
- Check your hosting provider's documentation

---

## ✅ Post-Deployment Checklist

After uploading, verify these work:

- [ ] **Homepage loads**: https://360spaces.co.uk
- [ ] **Logo displays correctly** (both navbar and footer)
- [ ] **Lottie animation works** in "Strategic Planning" card
- [ ] **All images load** correctly
- [ ] **Case studies accessible**: https://360spaces.co.uk/case-studies/
- [ ] **Navigation works** between pages
- [ ] **Mobile responsive** design works
- [ ] **Robots.txt accessible**: https://360spaces.co.uk/robots.txt

---

## 🔧 If Issues Occur

### Common Problems & Solutions:

**❌ Images not loading:**

- Check file paths in the images folder
- Ensure case-sensitive filenames match

**❌ CSS not applied:**

- Verify `style.css` is in the root directory
- Check file permissions (755 for folders, 644 for files)

**❌ Lottie animations not working:**

- Ensure internet connection for CDN
- Check browser console for JavaScript errors

**❌ Pages show 404:**

- Verify folder structure matches the `dist/` output
- Check that `index.html` files exist in subdirectories

---

## 🎯 Performance Tips

- **Enable GZIP compression** on your hosting for faster loading
- **Set up HTTPS** if not already configured
- **Consider CDN** for even faster global loading
- **Monitor Core Web Vitals** using Google PageSpeed Insights

---

## 📞 Next Steps

1. **Upload the files** using your preferred method
2. **Test thoroughly** on different devices and browsers
3. **Submit to Google Search Console** for better SEO
4. **Set up Google Analytics** if needed
5. **Consider SSL certificate** for HTTPS (most hosts provide this free)

Your professional 360spaces website is ready to go live! 🚀

---

_Built with Eleventy • Optimized for Production • Ready for 360spaces.co.uk_
