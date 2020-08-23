const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });
        let out = {
            name: 'Josniel',
            age: 22,
            url: req.url
        }

        res.write(JSON.stringify(out));
        res.end();
    })
    .listen(8080);
console.log('Escuchando el puerto 8080');