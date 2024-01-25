const cd = {
  version: '1.0',
  files: [
    'manifest.json',
    'Abekenman.png',
    'Abekenman.webp',
    'Abekenman.svg'
  ]
};
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cd.version).then((cache) => {
      return cache.addAll(cd.files);
    })
  );
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
        return response ? response : fetch(event.request);
    })
  );
});
