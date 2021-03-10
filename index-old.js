const http = require('http');

http.createServer((req,res) => {

    
    // res.writeHead(200, {'Content-type': 'application/csv'});
    
    // const user = {
    //     id: 150,
    //     name: 'dario'
    // }
    // res.write(JSON.stringify(user));
    res.setHeader('Content-Disposition', 'attachment; filename=usuarios.csv')
    res.writeHead(200, {'Content-type': 'application/csv'})
    res.write('id,name\n')
    res.write('123,Fernando\n')
    res.write('3232,Mariana')

    res.end();

}).listen(3000)