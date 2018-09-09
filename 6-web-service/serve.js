
const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helper/helpers')
app.use(express.static( __dirname + '/public'))
hbs.registerPartials(__dirname+'/views/parciales')
app.set('view engine','hbs')



app.get('/',(req, res)=>{

   
    
    res.render('home',{
        nombre: 'javier',
        

    });
    
})
app.get('/about',(req, res)=>{

   
    
    res.render('about',{
        nombre: 'luisa'

    });
    
})



app.listen(3000, ()=>{
    console.log('escuchando peticiones en el puerto 3000')
})
