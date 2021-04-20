const http = require('http');
const fs = require("fs");

const studentsJson = require("./user.json");
let students = studentsJson.students;

const port = 8001;

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/raw-html') {
            res.write('<h1>shir A </h1>');
            res.end();

        }
        else if (req.url === '/users') {
            res.write(JSON.stringify(students));
            res.end();

        }
        else if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile('', null, function (error, students) {
                if (error) {
                    res.writeHead(404);
                    res.write('File not found!');
                    res.end();

                } else {
                    res.write(students);
                    res.end();

                }
            });
        }
    }
    res.end();

})


server.listen(port, () => {
    console.log('server run at: ' + port);
})