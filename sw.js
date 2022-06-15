self.addEventListener('activate', (event) => {
  console.log('[SW] activate');
});

self.addEventListener('install', (event) => {
  console.log('[SW] install');
});

self.addEventListener('push', function(event) {
  console.log('[SW] push:', event.data.text());
  for (let x in self.chrome) console.log(x);
  if ('sidekickApp' in self.chrome) {
    chrome.sidekickApp.sendMessage('medium', {a: 5});
  }
});
