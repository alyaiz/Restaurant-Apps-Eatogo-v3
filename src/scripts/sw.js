import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

const restauranApi = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev'),
  new StaleWhileRevalidate({
    cacheName: 'restaurant-api',
  }),
);

const restaurantImageLarge = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/large/'),
  new StaleWhileRevalidate({
    cacheName: 'restaurant-image-large-api',
  }),
);

const restaurantImageMedium = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/medium/'),
  new StaleWhileRevalidate({
    cacheName: 'restaurant-image-medium-api',
  }),
);

const restaurantImageSmall = new Route(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/large/'),
  new StaleWhileRevalidate({
    cacheName: 'restaurant-image-small-api',
  }),
);

registerRoute(restauranApi);
registerRoute(restaurantImageLarge);
registerRoute(restaurantImageMedium);
registerRoute(restaurantImageSmall);

self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});
