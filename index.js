

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const fileName = `files/${new Date().toLocaleString().replace(/[/: ,]/g, "_")}.txt`;
    const fileContent = `Now This Time is - ${new Date().toLocaleString()}`;

    fs.writeFile(fileName, fileContent, 'utf-8', (error) => {
        if (error) {
            console.log(error);
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('An error occurred');
        } else {
            fs.readFile(fileName, 'utf-8', (error, data) => {
                if (error) {
                    console.log(error);
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    res.end('An error occurred');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data);
                }
            });
        }
    });
});

server.listen(21000, () => console.log("Server listening on port 21000"));
