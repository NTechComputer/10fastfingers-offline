self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('10fastfingers-offline').then((cache) => cache.addAll([
      '/10fastfingers-offline/',
      '/10fastfingers-offline/index.html'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});