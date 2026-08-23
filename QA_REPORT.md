# Technical QA Report

## Scope

The recruiter-focused portfolio was checked as a static HTML/CSS/JavaScript site across the homepage and all three flagship project-detail pages.

## Responsive QA

Browser-rendered layout checks were performed at:

- 320 px
- 375 px
- 390 px
- 768 px
- 1024 px
- 1440 px

Pages checked at every listed width:

- `index.html`
- `projects/eacm-selection-bot.html`
- `projects/buddycheck.html`
- `projects/eacm-guide-assistant.html`

Result: **24/24 viewport-page checks passed with no horizontal page overflow.** Wide synthetic evidence tables are intentionally contained within their own horizontally scrollable wrappers on small screens.

## Navigation and JavaScript

- Mobile navigation opens from the keyboard-operable button.
- `aria-expanded` changes correctly when the menu opens.
- Escape closes the mobile menu and returns focus to the toggle.
- Clicking outside the open mobile menu closes it.
- Light/dark theme toggle changes the document theme and accessible label.
- Reduced-motion preference is respected.
- No browser console errors were detected in the automated render checks.

## Accessibility

- One `<h1>` per page: **Pass**
- Duplicate IDs: **None detected**
- `lang="en"` present on all pages: **Pass**
- Skip-to-main-content link present on all pages: **Pass**
- Visible `:focus-visible` treatment for links, buttons, and summaries: **Pass**
- Mobile navigation button has `aria-controls` and `aria-expanded`: **Pass**
- Status examples use visible text such as `Pass`, `Difference`, `Missing in XML`, and `Extra in XML`; color is not the only status signal: **Pass**
- Portfolio evidence uses semantic HTML/CSS demonstrations rather than unlabeled screenshot images, so screenshot alt-text is not currently required.

### Contrast spot-checks

Approximate WCAG contrast ratios for core text pairs:

- Main text / light background: **13.74:1**
- Muted text / light background: **4.85:1**
- Muted text / white surface: **5.22:1**
- Accent text / light background: **5.60:1**
- Input-required warning / white surface: **7.41:1**
- Main text / dark background: **16.71:1**
- Muted text / dark background: **9.62:1**
- Accent text / dark background: **10.55:1**

These checked pairs meet WCAG AA for normal text.

## SEO

All four public HTML pages include:

- Unique page title
- Meta description
- Canonical URL
- Open Graph title / description / URL / image
- Twitter summary-large-image metadata
- Person JSON-LD structured data
- Viewport metadata
- Favicon

Additional files included:

- `sitemap.xml`
- `robots.txt`
- `assets/og-card.png` (1200 x 630)
- `assets/favicon.svg`

## Link QA

- Internal relative links checked: **No broken internal file targets detected**
- Resume PDF link target exists: **Pass**
- Resume DOCX link target exists: **Pass**
- All project case-study links resolve to files in the package: **Pass**
- No public `github.com` profile/repository links exist in the public HTML pages: **Pass**
- LinkedIn and email are external/user-provided destinations; external service availability was not part of offline file QA.

## Resume QA

`assets/Vinod_Kumar_N_Resume.pdf` was generated from the supplied DOCX and visually inspected after rendering.

- Pages: **2**
- Page size: **612 x 792 pt**
- Encrypted: **No**
- Fonts embedded: **Yes**
- Visible clipping/overlap in rendered pages: **None observed**

The original DOCX remains available as a secondary download.

## Performance / maintainability

- No front-end framework
- No npm/runtime build dependency
- No external font request
- No JavaScript library dependency
- One shared CSS file
- One small shared JavaScript file
- Static HTML project pages
- Social image optimized as a single PNG asset
- Synthetic evidence is implemented in HTML/CSS, avoiding heavy screenshot/GIF assets at launch

## Launch content status

All previously outstanding public content fields have been populated from candidate-provided information. No unresolved public-page placeholders remain.

## Content QA — production update

- Removed all unresolved public content placeholders from HTML pages.
- Standardized the public project name as BuddyCheck across homepage, project page, and metadata.
- Updated employment dates/titles with candidate-provided details.
- Replaced placeholder project impact with candidate-provided operational metrics.
- Guide Assistant ownership now distinguishes the candidate's direct contributions from the contributions of two team members.
