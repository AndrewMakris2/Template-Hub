/**
 * ============================================================================
 *  THEME — colors and fonts for the sales site / design hub
 * ============================================================================
 *  Every color and font family on the site comes from this file.
 *    paper / cream  → light backgrounds
 *    ink            → text and the dark "designs" section
 *    muted          → secondary text
 *    line           → hairlines
 *    accent         → brand color (buttons, highlights)
 *    tint           → soft accent background (labels, icon circles)
 *    navy           → deep blue surfaces (designs section, footer)
 *    onAccent/onInk → text on accent / ink backgrounds
 * ============================================================================
 */

export const theme = {
  // Minimal: white, cool greys and navy. All text/background pairs meet WCAG AA.
  colors: {
    paper: '#FFFFFF',
    cream: '#F2F4F8', // cool grey
    ink: '#111827', // blue-black
    muted: '#5B6575', // slate grey
    line: '#DFE6F0',
    accent: '#1E3A8A', // navy — the brand color
    tint: '#E7ECF6', // pale navy tint
    navy: '#0F1F44', // deepest navy surfaces (designs section, footer)
    onAccent: '#FFFFFF',
    onInk: '#F8FAFC',
  },

  fonts: {
    heading: "'Geist', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
    body: "'Geist', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&display=swap',
  },
};
