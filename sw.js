const chrome = self.chrome;

self.addEventListener('activate', (event) => {
  console.log('[SW] activate');
});

self.addEventListener('install', (event) => {
  console.log('[SW] install');
});

self.addEventListener('push', function(event) {
  console.log('[SW] push:', event.data.text());
  let selfKeys = [];
  for (let x in self) selfKeys.push(x);
  console.log('[SW] self: ', selfKeys);
  let globalKeys = [];
  for (let x in global) globalKeys.push(x);
  console.log('[SW] global: ', selfKeys);
  if ('sidekickApp' in chrome) {
    chrome.sidekickApp.sendMessage('medium', {a: 5});
  }
});
