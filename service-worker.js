var files = [
    "index.html",
    "blog.html",
    "style/css/style.css",
    "img/entrada.jpg",
    "images/LogoBC2.png",
    "images/icon/LogoBC2.ico",
    "images/js.jpg",
    "images/logos-redes-sociais/facebook.png",
    "images/logos-redes-sociais/github.png",
    "images/logos-redes-sociais/google+.png",
    "images/logos-redes-sociais/insta.png",
    "images/logos-redes-sociais/linkedin.png",
    "images/logos-redes-sociais/skype.png",
    "images/logos-redes-sociais/twitter.png",
    "js/install.js",
    "manifest.json"
    
  ];
  // dev only
  if (typeof files == 'undefined') {
    var files = [];
  } else {
    files.push('./');
  }
  
  var CACHE_NAME = 'bakery-v2.5';
  
  self.addEventListener('activate', function(event) {
    console.log('[SW] Activate');
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (CACHE_NAME.indexOf(cacheName) == -1) {
              console.log('[SW] Delete cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
  
  self.addEventListener('install', function(event){
    console.log('[SW] Install');
    event.waitUntil(
      caches.open(CACHE_NAME).then(function(cache) {
        return Promise.all(
            files.map(function(file){
                return cache.add(file);
            })
        );
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    console.log('[SW] fetch ' + event.request.url)
    event.respondWith(
      caches.match(event.request).then(function(response){
        return response || fetch(event.request.clone());
      })
    );
  });
  
  self.addEventListener('notificationclick', function(event) {
    console.log('On notification click: ', event);
    clients.openWindow('/bersoncrios.github.io/index.html');
  });