// 引っこし用：古い版の一時保存を片づけて、この仕組み自体も外す
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => /^taishoku-note-/.test(k)).map(k => caches.delete(k))))
      .then(() => self.registration.unregister())
  );
});
