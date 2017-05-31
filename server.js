(function(){
    let net = require('net');

    

    let server = net.createServer(function(connection){
        console.log('client connected');

        connection.on('data', function(data){
            console.log(data.toString());
        })

        connection.write('HTTP/1.1 200 OK\n');
        connection.end();  

        connection.on('error', function(d){
            console.log("error", d);
        })        

    
    });


    server.listen(8080, function(){
        console.log("server is listening on port 8080");
    })
}());