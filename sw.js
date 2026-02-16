// اسم الكاش
const CACHE_NAME = "countdown-cache-v1";

// الملفات اللي بدنا نخزنها
const urlsToCache = [
  "index.html",
  "style.css",
  "program.html",
  "tips.html",
  "goals.html",
  "imgs/sci.jpg",
  "imgs/lit.jpg",
  "imgs/shr.jpg",
  "imgs/icon-192.png",
  "imgs/icon-512.png"
];

// التثبيت — caching
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// الجلب — load from cache first
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return (
        response ||
        fetch(event.request).catch(() => caches.match("index.html"))
      );
    })
  );
});