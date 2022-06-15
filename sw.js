const chrome = self.chrome;

self.addEventListener('activate', (event) => {
  console.log('[SW] activate');
});

self.addEventListener('install', (event) => {
  console.log('[SW] install');
});

self.addEventListener('push', function(event) {
  console.log('[SW] push:', event.data.text());
  event.waitUntil(async function() {
    const allClients = await clients.matchAll({
      includeUncontrolled: true
    });
    for (const client of allClients) {
      console.log('[SW] client:', client.url);
    }
  }());
  /*
  if ('sidekickApp' in chrome) {
    chrome.sidekickApp.sendMessage('medium', {a: 5});
  }
  */
});
