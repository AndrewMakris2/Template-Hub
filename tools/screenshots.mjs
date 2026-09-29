// Screenshots each live template at true desktop and phone sizes using the
// Chrome DevTools Protocol (device emulation avoids Chrome's minimum window width).
// Usage: node tools/screenshots.mjs <outDir> <url> [<url>...]
// Saves t1-desktop.png, t1-mobile.png, … in the order the URLs are given. See README.
import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { setTimeout as sleep } from 'node:timers/promises';

const [outDir, ...urls] = process.argv.slice(2);
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9333;

const chrome = spawn(CHROME, [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', `--remote-debugging-port=${PORT}`,
  '--user-data-dir=' + outDir + '/.profile', 'about:blank',
], { stdio: 'ignore' });

async function getTarget() {
  for (let i = 0; i < 40; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
      const page = list.find((t) => t.type === 'page');
      if (page) return page;
    } catch {}
    await sleep(250);
  }
  throw new Error('Chrome did not start');
}

const target = await getTarget();
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener('open', r, { once: true }));
let id = 0;
const pending = new Map();
const listeners = [];
ws.addEventListener('message', (e) => {
  const msg = JSON.parse(e.data);
  if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg); pending.delete(msg.id); }
  else listeners.forEach((fn) => fn(msg));
});
const send = (method, params = {}) => new Promise((resolve) => { const n = ++id; pending.set(n, resolve); ws.send(JSON.stringify({ id: n, method, params })); });
const waitFor = (method) => new Promise((resolve) => { const fn = (m) => { if (m.method === method) { listeners.splice(listeners.indexOf(fn), 1); resolve(m); } }; listeners.push(fn); });

await send('Page.enable');
const sizes = [
  { name: 'desktop', width: 1440, height: 900, deviceScaleFactor: 1, mobile: false },
  { name: 'mobile', width: 390, height: 844, deviceScaleFactor: 2, mobile: true },
];

for (const [i, url] of urls.entries()) {
  for (const s of sizes) {
    await send('Emulation.setDeviceMetricsOverride', { width: s.width, height: s.height, deviceScaleFactor: s.deviceScaleFactor, mobile: s.mobile });
    const loaded = waitFor('Page.loadEventFired');
    await send('Page.navigate', { url });
    await loaded;
    // Wait for every image to finish, hide the hosting badge, then let fonts settle.
    await send('Runtime.evaluate', {
      awaitPromise: true,
      expression: `(async () => {
        await Promise.all([...document.images].map(img => img.complete ? 0 : new Promise(r => { img.onload = img.onerror = r; setTimeout(r, 15000); })));
        await document.fonts.ready;
        const hide = () => document.querySelectorAll('#nl-badge-frame, iframe[title*="Netlify"]').forEach(el => el.style.setProperty('display', 'none', 'important'));
        hide(); await new Promise(r => setTimeout(r, 1200)); hide();
        window.scrollTo(0, 0);
      })()`,
    });
    await sleep(600);
    const { result } = await send('Page.captureScreenshot', { format: 'png' });
    writeFileSync(`${outDir}/t${i + 1}-${s.name}.png`, Buffer.from(result.data, 'base64'));
    console.log(`saved t${i + 1}-${s.name}`);
  }
}
ws.close();
chrome.kill();
