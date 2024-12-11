// offline config passed to workbox-build.
module.exports = {
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/hutu\.aimtao\.net\/.*/,
        handler: "CacheFirst"
      },
      {
        urlPattern: /^https:\/\/hutu0\.aimtao\.net\/.*/,
        handler: "CacheFirst"
      },
      {
        urlPattern: /^https:\/\/hu2\.aimtao\.net\/.*/,
        handler: "CacheFirst"
      }
    ]
  }