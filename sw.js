// var CACHE_NAME = 'static-v1';

// self.addEventListener('install', function (event) {
//     event.waitUntil(
//         caches.open(CACHE_NAME).then(function (cache) {
//             return cache.addAll([
//                 '/',
//                 '/index.html',
//                 './css/style.css',
//                 './css/styleSecI.css',
//                 './css/styleSec1.css',
//                 './css/styleSec2.css',
//                 './css/styleMenu.css',
//                 './js/script.js',
//                 './js/scriptMenu.js',
//                 './js/scriptSec1.js',
//                 './js/scriptSec2.js',
//                 '/manifest.js',
//             ]);
//         })
//     )
// });

// self.addEventListener('activate', function activator(event) {
//     event.waitUntil(
//         caches.keys().then(function (keys) {
//             return Promise.all(keys
//                 .filter(function (key) {
//                     return key.indexOf(CACHE_NAME) !== 0;
//                 })
//                 .map(function (key) {
//                     return caches.delete(key);
//                 })
//             );
//         })
//     );
// });

// self.addEventListener('fetch', function (event) {
//     event.respondWith(
//         caches.match(event.request).then(function (cachedResponse) {
//             return cachedResponse || fetch(event.request);
//         })
//     );
// });