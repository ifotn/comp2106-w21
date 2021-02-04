let http = require('http');

http.createServer((req, res) =>  {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });

    res.write('<ul>');
    let i = 1;
    for (i = 1; i <= 20; i++) {
        res.write('<li>' + i + '</li>');

        console.log(i);
    }
    res.write('</ul>');
    res.end();

}).listen(3000);
