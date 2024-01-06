const caches = {
  version: '1.0',
  files: [
    'manifest.json',
    'Abekenman.jpg',
    'Abekenman.png',
    'Abekenman.webp',
    'Abekenman.svg'
  ]
};
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(caches.version)
      .then((cache) => return cache.addAll(caches.files))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => return response ? response : fetch(event.request))
  );
});
