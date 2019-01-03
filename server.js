const express = require('express')
const app = express()
//hbs tamplates
//Los helpers funcionan para almacenar variables que hbs va a buscar
const hbs = require('hbs'); 
            require('./hbs/helper');


//Esto es para ver las variables globales de heroku para saber el puerto correspondiente
const port = process.env.PORT || 3000;

 
//De esta manera se hace publico un directorio
app.use(express.static(__dirname+'/public'))

//Esta es la manera 
hbs.registerPartials(__dirname + '/views/Partials');
// asi se configura hbs
app.set('view engine', 'hbs');




app.get('/', function (req, res) {
//   let objeto = {
//     nombre: 'Prueba',
//     apellido:'Prueba2',
//     edad: 55

//   }
//   res.send(objeto);

res.render('home',{
    nombre: "Johan"
    
})
})


app.get('/about', function (req, res) {
   
    res.render('about')
    })
 
app.listen(port)