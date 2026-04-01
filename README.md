# benceauer.at — Personal Portfolio

Personal portfolio website of Bence Auer, Frontend Developer & UX Designer based in Fürstenfeld, Austria.

🔗 [benceauer.at](https://benceauer.at)

---

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, flexbox, grid, keyframe animations
- **JavaScript** — vanilla, no frameworks or build tools
- **Syne** & **DM Mono** — Google Fonts
- **Plausible Analytics** — privacy-friendly, no cookies, no consent banner required

## Features

- **Bilingual (DE/EN)** — language toggle with `localStorage` persistence, German as default
- **Hero entrance animations** — staggered CSS keyframe fade-up on page load
- **Scroll reveal** — IntersectionObserver-based reveal for all sections
- **Responsive** — mobile-first layout, tested across screen sizes
- **Dark minimal design** — custom dark color scheme with amber accent
- **Legal pages** — GDPR-compliant Impressum and Datenschutzerklärung in both languages
- **Custom 404 page** — styled to match the site, with `.htaccess` routing
- **Zero dependencies** — no npm, no bundler, no framework

## Project Structure

```
benceauer.at/
├── index.html
├── impressum.html
├── datenschutz.html
├── 404.html
├── favicon.ico
├── .htaccess
├── css/
│   ├── style.css
│   └── legal.css
├── js/
│   └── main.js
└── images/
```

## Running Locally

No build step needed. Just open `index.html` in your browser, or use a local server:

```bash
npx serve .
```