"use strict";var precacheConfig=[["/index.html","47a0c5b46a3e0c400a47ac735065e390"],["/static/css/main.b6410c2e.css","de88ebac98db78db1b2c9be6e6fd5917"],["/static/js/main.a5f821d0.js","d070f6dfd1e73aa8cfc4b9c24cad71a0"],["/static/media/CircularStd-BlackItalic.0cda47fe.otf","0cda47fe41243fb61f2ffd71f3a811b8"],["/static/media/NeoSans-Bold.421eb5f8.otf","421eb5f85c6b193c0b6222b9a1b5bf1d"],["/static/media/NeoSans-Light.8d632071.otf","8d632071c886fdbe87936b773ea5615f"],["/static/media/NeoSans-Medium.5a107ec0.otf","5a107ec0c2b581dfb723c3f70cd17b17"],["/static/media/NeoSans.c74edeaf.otf","c74edeaf658e851e2c71f78b2a28d352"],["/static/media/commingsoon@2x.a404596d.png","a404596d9a6eb1b62548e42d871c2e44"],["/static/media/cutdown@2x.b97272fb.png","b97272fb6c35701eb4e6b415bb6cb3f2"],["/static/media/mainnetSwitch@2x.942c0a12.png","942c0a1278a2135afbe198b85b48a4b8"],["/static/media/subscribe@2x.872ed792.png","872ed79258530fa5ad2f360175a8c33c"],["/static/media/subscribe_click@2x.e804c133.png","e804c133eec66e4f555abef0995ac5f1"],["/static/media/subscribe_email_bg@2x.8836be51.png","8836be51f3b835d7a54989d2f0e9109b"],["/static/media/subscribe_hover@2x.b9a05505.png","b9a05505cea8a78cbf83ccf65b6954d6"],["/static/media/testnetSwitch@2x.5a852b41.png","5a852b4192494f9e99618f9978f897a6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});