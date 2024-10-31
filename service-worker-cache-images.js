// this is the service worker which intercepts all http requests
// eslint-disable-next-line
self.addEventListener('fetch', function fetcher(event) {
  const request = event.request;
  // check if request
  if (request.url.indexOf('.jpg') > -1 || request.url.indexOf('.jpeg') > -1 || request.url.indexOf('.png') > -1 || request.url.indexOf('.svg') > -1) {
    // contentful asset detected
    event.respondWith(caches.match(event.request).then(function (response) {
      // return from cache, otherwise fetch from network
      return response || fetch(request);
    }));
  }
  // otherwise: ignore event
});
