

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const fileName = `files/${new Date().toLocaleString().replace(/[/: ,]/g, "_")}.txt`;
//     const fileContent = `Now This Time is - ${new Date().toLocaleString()}`;

//     fs.writeFile(fileName, fileContent, 'utf-8', (error) => {
//         if (error) {
//             console.log(error);
//             res.writeHead(500, { 'Content-Type': 'text/html' });
//             res.end('An error occurred');
//         } else {
//             fs.readFile(fileName, 'utf-8', (error, data) => {
//                 if (error) {
//                     console.log(error);
//                     res.writeHead(500, { 'Content-Type': 'text/html' });
//                     res.end('An error occurred');
//                 } else {
//                     res.writeHead(200, { 'Content-Type': 'text/html' });
//                     res.end(data);
//                 }
//             });
//         }
//     });
// });

// server.listen(21000, () => console.log("Server listening on port 21000"));

const express = require('express');
const fs = require('fs');
const app = express();
const port = 21000;

app.get('/', (req, res) => {
    const fileName = `files/${new Date().toLocaleString().replace(/[/: ,]/g, "_")}.txt`;
    const fileContent = `Now This Time is - ${new Date().toLocaleString()}`;

    fs.writeFile(fileName, fileContent, 'utf-8', (error) => {
        if (error) {
            console.log(error);
            res.status(500).send('An error occurred');
        } else {
            fs.readFile(fileName, 'utf-8', (error, data) => {
                if (error) {
                    console.log(error);
                    res.status(500).send('An error occurred');
                } else {
                    res.status(200).send(data);
                }
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
