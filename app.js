const http = require('http');

http.createServer((req,res)=>{

    res.write("Bienvenido");
    res.end();

})
.listen(8181);


console.log("Escuchando el puerto 8181");