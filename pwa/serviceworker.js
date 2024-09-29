const CACHE_NAME = 'kiosk-cache-v1';
const urlsToCache = [
  '/',
  '/nahc/kioskdemo/demo2',  // Add other relevant paths to cache
  '/icon-192.png',
  '/icon-512.png',
  '/demo.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
