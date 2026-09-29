import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, pathToFileURL } from 'node:url';

const renderEntry = fileURLToPath(new URL('./src/render.js', import.meta.url));

/**
 * Renders the page from src/config/content.js + src/config/theme.js at build
 * time (and on every request in dev) and injects it into index.html.
 */
function staticRender() {
  return {
    name: 'static-render',
    transformIndexHtml: {
      order: 'pre',
      async handler(html, ctx) {
        const mod = ctx.server
          ? await ctx.server.ssrLoadModule('/src/render.js') // dev: picks up edits without restarting
          : await import(pathToFileURL(renderEntry).href);
        return html
          .replace('%SITE_LANG%', mod.lang)
          .replace('<!--app-head-->', mod.renderHead())
          .replace('<!--app-body-->', mod.renderBody());
      },
    },
    // Config/component edits change the server-rendered HTML: drop the cached
    // render modules and reload the page.
    configureServer(server) {
      const renderFiles = /[\\/]src[\\/](config|components)[\\/]|[\\/]src[\\/]render\.js$/;
      const onChange = (file) => {
        if (!renderFiles.test(file)) return;
        (server.environments?.ssr?.moduleGraph ?? server.moduleGraph).invalidateAll();
        server.ws.send({ type: 'full-reload' });
      };
      server.watcher.on('change', onChange);
      server.watcher.on('add', onChange);
    },
  };
}

export default defineConfig({
  plugins: [staticRender(), tailwindcss()],
  build: {
    outDir: 'dist',
  },
});
