module.exports = {
  files: [
    {
      path: 'public/build/bundle.js',
      maxSize: '20kB',
      compression: 'gzip',
    },
    {
      path: 'public/build/bundle.css',
      maxSize: '2kB',
      compression: 'gzip',
    },
  ],
}
