# Shotiko Beroshvili — Personal Portfolio Website

A modern, bilingual personal portfolio website for Shotiko Beroshvili (შოთიკო ბეროშვილი), built with pure HTML, CSS, and JavaScript. No frameworks, build tools, or backend required.

## Features

- **Bilingual Support**: Georgian (KA) and English (EN) with instant language switching
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile
- **Mint-Green Theme**: Light, pastel spearmint-green color palette
- **SEO Optimized**: Semantic HTML, meta tags, structured data, robots.txt, sitemap.xml
- **Accessibility**: Keyboard navigation, focus states, reduced-motion support
- **No Dependencies**: Pure vanilla JavaScript, no frameworks or build tools
- **GitHub Pages Ready**: Deploy directly as a static website

## Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── style.css               # All styling
├── script.js               # Language switching and interactivity
├── robots.txt              # SEO robots file
├── sitemap.xml             # SEO sitemap
├── README.md               # This file
└── assets/
    ├── favicon.svg         # Site favicon
    ├── images/             # Add your project images here
    └── certificates/       # Add your certificates here
```

## Quick Start

1. **Open the website locally**:
   - Simply open `index.html` in your browser
   - No server or installation required

2. **Add your content**:
   - Upload your Google Ads certificate to `assets/certificates/`
   - Update the certificate link in `index.html` (line ~285)
   - Add project images to `assets/images/`
   - Add your email and LinkedIn links in the Contact section (line ~445)

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon in the top-right corner
3. Select **New repository**
4. Name it: `portfolio` (or your preferred name)
5. Make it **Public** (required for GitHub Pages)
6. Click **Create repository**

### Step 2: Upload Files

**Option A: Using GitHub Web Interface (Easiest)**

1. In your new repository, click **uploading an existing file**
2. Drag and drop all files from your portfolio folder:
   - `index.html`
   - `style.css`
   - `script.js`
   - `robots.txt`
   - `sitemap.xml`
   - `README.md`
   - The entire `assets/` folder
3. Click **Commit changes**

**Option B: Using Git Command Line**

```bash
# Navigate to your portfolio folder
cd c:\Users\infod\OneDrive\Desktop\portfolio

# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio website"

# Add remote repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top navigation)
3. On the left sidebar, click **Pages**
4. Under **Build and deployment**, select **Source**:
   - Choose **Deploy from a branch**
   - Select **main** branch
   - Select **/ (root)** folder
5. Click **Save**

### Step 4: Wait for Deployment

- GitHub will deploy your website in 1-3 minutes
- You'll see a checkmark when deployment is complete
- Your website URL will be: `https://YOUR_USERNAME.github.io/portfolio/`

## SEO Setup

### Update Canonical URL

After deployment, update the canonical URL in `index.html` (line 12):

```html
<link rel="canonical" href="https://YOUR_USERNAME.github.io/portfolio/">
```

Also update in:
- `sitemap.xml` (line 5)
- `robots.txt` (line 3)
- JSON-LD structured data in `index.html` (line 459)

### Add to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **Add a property**
3. Enter your website URL: `https://YOUR_USERNAME.github.io/portfolio/`
4. Choose **URL prefix** property
5. Verify ownership:
   - **Option 1**: Upload HTML file (easiest for GitHub Pages)
   - **Option 2**: Add meta tag to `index.html`
   - **Option 3**: Use Google Analytics (if you add it later)

### Submit Sitemap

1. In Google Search Console, select your property
2. On the left sidebar, click **Sitemaps**
3. Enter: `sitemap.xml`
4. Click **Submit**

### Request Indexing

1. In Google Search Console, go to **URL Inspection**
2. Enter your homepage URL
3. Click **Request indexing**

## Customization

### Add Your Certificate

1. Place your Google Ads certificate PDF/image in `assets/certificates/`
2. In `index.html`, find the certification section (around line 280)
3. Replace the placeholder with:

```html
<img src="assets/certificates/your-certificate.pdf" alt="Google Ads Certificate" class="cert-image">
```

Or add a download link:

```html
<a href="assets/certificates/your-certificate.pdf" target="_blank" class="btn btn-primary">View Certificate</a>
```

### Add Contact Information

In the Contact section (around line 440), replace the placeholder with:

```html
<a href="mailto:your.email@example.com" class="contact-link">
    <svg>...</svg>
    your.email@example.com
</a>
<a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" class="contact-link">
    <svg>...</svg>
    LinkedIn
</a>
```

### Update Project Links

All project links are already configured with the provided GitHub repository. If you add live demos, update the `project-links` section in each project card.

### Modify Colors

Edit CSS variables in `style.css` (line 3):

```css
:root {
    --background: #F7FBF8;
    --surface: #FFFFFF;
    --mint: #BFE8D2;
    --mint-accent: #91D7B5;
    --mint-light: #EAF6EF;
    --green-dark: #356B55;
    --text-primary: #25352E;
    --text-secondary: #68766F;
    --border: #E1ECE5;
    --shadow: 0 8px 28px rgba(37, 53, 46, 0.06);
    --radius: 18px;
}
```

## Language Support

The website supports Georgian (KA) and English (EN). To add or modify translations:

1. Open `script.js`
2. Find the `translations` object (line 2)
3. Add or modify key-value pairs in both `ka` and `en` sections
4. In `index.html`, add `data-i18n="your.key"` to any element you want to translate

## Performance

- No external JavaScript libraries
- Optimized CSS with minimal redundancy
- SVG icons (lightweight vector graphics)
- System fonts (no external font loading)
- Lazy loading ready for images

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features

- Semantic HTML5 structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Reduced-motion preference support
- Screen reader friendly

## License

© 2026 Shotiko Beroshvili. All rights reserved.

## Support

For questions or issues, please contact through the website's contact section once your contact information is added.

---

**Built with pure HTML, CSS, and JavaScript — No frameworks required.**
