import { createServer } from 'http';

const port = 5000;
const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Welcome to Node server');
    res.end("Hello World .....");
})

server.listen(port, () => console.log(`listening at port number ${port}`));