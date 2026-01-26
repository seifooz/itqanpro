
import http.server
import socketserver
import mimetypes
import sys

PORT = 8000
if len(sys.argv) > 1:
    PORT = int(sys.argv[1])

# Fix MIME type for m4a to ensure browser compatibility
mimetypes.add_type('audio/mp4', '.m4a')

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    '.m4a': 'audio/mp4',
})

print(f"🚀 Server started at http://localhost:{PORT}")
print("MIME type for .m4a set to audio/mp4")

try:
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        httpd.serve_forever()
except OSError:
    print(f"❌ Port {PORT} is busy. Try another port.")
