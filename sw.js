// Bump this string at each deploy — it's what the "Vérifier les mises à jour"
// button in index.html compares against to know a new version exists.
const APP_VERSION = '1.0.0';

const CACHE_ALLOWLIST = []; // no caches kept on purpose

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => !CACHE_ALLOWLIST.includes(key))
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'GET_VERSION' && event.ports && event.ports[0]) {
    event.ports[0].postMessage({ type: 'VERSION', version: APP_VERSION });
  }
});

// Always go to the network for our own files. Never touch cross-origin
// requests (e.g. the Google Apps Script sync) — let those pass through untouched.
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) {
    return;
  }
  event.respondWith(
    fetch(event.request, { cache: 'no-store' }).catch(() => caches.match(event.request))
  );
});
