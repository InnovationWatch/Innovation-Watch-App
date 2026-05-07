const CACHE_VERSION = 'innovation-watch-v20260507-2';
self.addEventListener('install', event => { self.skipWaiting(); });
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => k !== CACHE_VERSION ? caches.delete(k) : Promise.resolve()));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => { return; });
