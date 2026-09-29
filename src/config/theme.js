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
 *    onAccent/onInk → text on accent / ink backgrounds
 * ============================================================================
 */

export const theme = {
  // All text/background pairs meet WCAG AA.
  colors: {
    paper: '#FAF8F5',
    cream: '#F1ECE4',
    ink: '#16141A',
    muted: '#5F5A63',
    line: '#E3DDD3',
    accent: '#5B2A86', // plum — TODO: your brand color
    tint: '#EEE6F6',
    onAccent: '#FFFFFF',
    onInk: '#FAF8F5',
  },

  fonts: {
    heading: "'Instrument Serif', Georgia, 'Times New Roman', serif",
    body: "'Geist', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&display=swap',
  },
};
