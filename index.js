import http from 'http'
import controller from './function/controller.js'

const server = http.createServer((req, res) => {
    if(req.url == '/send') {
        controller(req, res)
    }
})

server.listen(3000, 'localhost')