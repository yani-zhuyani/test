const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = '/Users/zhuyani/Downloads/styleguide-gh-pages';
const PORT = 8099;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

http.createServer((req, res) => {
  let filePath = path.join(ROOT, req.url.split('?')[0]);
  if (filePath.endsWith('/')) filePath += 'index.html';
  const ext = path.extname(filePath);
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => console.log('Serving on port ' + PORT));
