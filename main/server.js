const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 3000;
const authBackendUrl = process.env.AUTH_BACKEND_URL || 'http://auth-backend:4000';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Proxy /auth/* requests to auth-backend (before static files)
app.use('/auth', createProxyMiddleware({
  target: authBackendUrl,
  changeOrigin: true,
  pathRewrite: (path) => '/auth' + path,  // Keep /auth prefix
}));

app.use(express.static(path.join(__dirname, 'public')));

// Profile widget static files
app.use('/widgets', express.static(
  path.join(__dirname, '../../shared/profile-widget/dist')
));

app.get('/', (req, res) => {
  res.render('index', {
    siteName: 'hstarsp.net',
    appUrl: process.env.APP_URL || 'https://app.hstarsp.net',
    photosUrl: process.env.PHOTOS_URL || 'http://photos.hstarsp.net',
    estateUrl: process.env.ESTATE_URL || 'https://estate.hstarsp.net',
    aiUrl: process.env.AI_URL || 'https://ai.hstarsp.net',
    authApiUrl: ''  // Use same origin (proxied)
  });
});

app.listen(port, () => {
  console.log(`Main Gateway listening on port ${port}`);
});
