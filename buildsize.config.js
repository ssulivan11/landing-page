module.exports = {
  files: [
    {
      path: 'public/build/bundle.js',
      maxSize: '9kB',
      compression: 'gzip'
    },
    {
      path: 'public/build/bundle.css',
      maxSize: '1kB',
      compression: 'gzip'
    }
  ]
}
