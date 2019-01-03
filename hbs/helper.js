const hbs = require('hbs'); 

//Los helpers funcionan para almacenar variables que hbs va a buscar


    hbs.registerHelper('getAnio',()=>{

        return  new Date().getFullYear();
    })







