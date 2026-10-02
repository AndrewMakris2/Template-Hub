/**
 * Build-time renderer for the sales site / design hub.
 * Reads src/config/content.js + theme.js and injects static HTML into index.html
 * (so Netlify can detect the enquiry form and link previews see real content).
 */
import { content } from './config/content.js';
import { theme } from './config/theme.js';
import { esc } from './components/utils.js';
import { Nav } from './components/Nav.js';
import { Hero } from './components/Hero.js';
import { Platforms } from './components/Platforms.js';
import { Designs } from './components/Designs.js';
import { Included } from './components/Included.js';
import { Process } from './components/Process.js';
import { Pricing } from './components/Pricing.js';
import { About } from './components/About.js';
import { Faq } from './components/Faq.js';
import { Contact } from './components/Contact.js';
import { Footer } from './components/Footer.js';
import { Checklist } from './components/Checklist.js';

const kebab = (s) => s.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);

function themeStyles() {
  const colors = Object.entries(theme.colors).map(([k, v]) => `--theme-${kebab(k)}:${v};`);
  const fonts = [`--theme-font-heading:${theme.fonts.heading};`, `--theme-font-body:${theme.fonts.body};`];
  return `<style>:root{${[...colors, ...fonts].join('')}}</style>`;
}

function favicon() {
  const letter = esc(content.brand.name.trim().charAt(0).toUpperCase());
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="${theme.colors.accent}"/><text x="16" y="23" font-family="Georgia,serif" font-style="italic" font-size="20" fill="${theme.colors.onAccent}" text-anchor="middle">${letter}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export function renderHead() {
  const { site, brand } = content;
  const canonical = `${site.url.replace(/\/$/, '')}/`;
  return [
    `<title>${esc(site.title)}</title>`,
    `<meta name="description" content="${esc(site.description)}" />`,
    `<link rel="icon" href="${favicon()}" type="image/svg+xml" />`,
    `<meta name="theme-color" content="${esc(theme.colors.paper)}" />`,
    `<link rel="canonical" href="${esc(canonical)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(brand.name)}" />`,
    `<meta property="og:title" content="${esc(site.title)}" />`,
    `<meta property="og:description" content="${esc(site.description)}" />`,
    `<meta property="og:url" content="${esc(canonical)}" />`,
    `<meta property="og:image" content="${esc(site.ogImage)}" />`,
    `<meta property="og:image:alt" content="${esc(site.ogImageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(site.title)}" />`,
    `<meta name="twitter:description" content="${esc(site.description)}" />`,
    `<meta name="twitter:image" content="${esc(site.ogImage)}" />`,
    `<link rel="preconnect" href="https://fonts.googleapis.com" />`,
    `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />`,
    `<link rel="stylesheet" href="${esc(theme.fonts.googleFontsUrl)}" />`,
    themeStyles(),
  ].join('\n    ');
}

export function renderBody() {
  return [
    Nav(content),
    `<main id="main">`,
    // Navy top zone: hero, booking apps and designs flow as one surface.
    `<div class="rounded-b-[2rem] bg-navy text-on-ink md:rounded-b-[3rem]">`,
    Hero(content),
    Platforms(content),
    Designs(content),
    `</div>`,
    // White middle.
    Included(content),
    Process(content),
    Pricing(content),
    About(content),
    Faq(content),
    // Navy bottom zone: contact runs straight into the footer.
    `<div class="rounded-t-[2rem] bg-navy text-on-ink md:rounded-t-[3rem]">`,
    Contact(content),
    `</div>`,
    `</main>`,
    Footer(content),
  ].join('\n');
}

/** Head for the /checklist/ page: kept out of search results. */
export function renderChecklistHead() {
  const { checklist } = content;
  return [
    `<title>${esc(checklist.title)}</title>`,
    `<meta name="description" content="${esc(checklist.description)}" />`,
    `<meta name="robots" content="noindex" />`,
    `<link rel="icon" href="${favicon()}" type="image/svg+xml" />`,
    `<meta name="theme-color" content="${esc(theme.colors.navy)}" />`,
    `<link rel="preconnect" href="https://fonts.googleapis.com" />`,
    `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />`,
    `<link rel="stylesheet" href="${esc(theme.fonts.googleFontsUrl)}" />`,
    themeStyles(),
  ].join('\n    ');
}

export function renderChecklistBody() {
  return Checklist(content);
}

export const lang = content.site.lang || 'en';
