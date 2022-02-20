self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('10fastfingers-offline').then((cache) => cache.addAll([
      '/10fastfingers-offline/?v=1',
      '/10fastfingers-offline/index.html?v=1'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
      self.skipWaiting();
  }
});
