"use strict";
// V14 development cache: only the app shell is mandatory for installation.
const CACHE = 'stewardship-os-v14-0-dev';
const SHELL = ['./','./index.html','./styles.css','./app.js','./backup-core.js','./prayer-library.js','./study.js','./sanctuary-invitations.js','./classic-layout.js','./preparation.js','./manifest.webmanifest','./assets/icon.svg','./assets/good-shepherd-approved.png'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('stewardship-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', event => {
 const request = event.request;
 if(request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
 event.respondWith(fetch(request).then(response => {
   if(response.ok && response.type === 'basic') { const copy=response.clone(); event.waitUntil(caches.open(CACHE).then(cache=>cache.put(request,copy)).catch(()=>{})); }
   return response;
 }).catch(async () => {
   const cached=await caches.match(request);
   if(cached) return cached;
   if(request.mode === 'navigate') return (await caches.match('./index.html')) || Response.error();
   return Response.error();
 }));
});
