self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('fanfan-cache').then(function(cache) {
      return cache.addAll([
        './今天吃了什么.html',
        './manifest.json',
        './icon-192.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});