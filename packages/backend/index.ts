import { createServer } from 'node:http'

const server = createServer((req, res) => {
  if (req.url === '/api/hello') {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ message: 'Hello World' }))
  } else {
    res.statusCode = 404
    res.end()
  }
})

server.listen(3000)
