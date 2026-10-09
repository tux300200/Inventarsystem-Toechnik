const http = require('node:http')

http.createServer((req, res) => {
  if (req.url === '/api/hello') {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ message: 'Hello World' }))
  } else {
    res.statusCode = 404
    res.end()
  }
}).listen(3000)