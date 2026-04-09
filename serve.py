#!/usr/bin/env python3
import os, http.server, socketserver

os.chdir("/Users/zhuyani/Downloads/styleguide-gh-pages")
PORT = 8099
with socketserver.TCPServer(("", PORT), http.server.SimpleHTTPRequestHandler) as httpd:
    httpd.serve_forever()
