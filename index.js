// importamos las dependencias 
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
// creamos una constante para el valor del puerto
const PUERTO = process.env.PORT || 3000;
//utilizar las rutas
let pintoresRouter = require('./routes/pintor');
//sitio web y hbs
const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(__dirname + '/public'));
//especificar a express la ruta que vamos a usar
app.use('/', pintoresRouter);
//conexion con mongo db
mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://israelMelendez:9876543210@cluster0-aoaqv.mongodb.net/pintores?retryWrites=true&w=majority'
//const cadena = 'mongodb+srv://UserPintor:pintores@baezabryan-de5dq.mongodb.net/pintores?retryWrites=true&w=majority'
mongoose.connect(cadena, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('conexion establecida')
})
.catch(err=> console.log(err));
//Arrancamos el servidor web
app.listen(PUERTO, ()=>{
    console.log('Escuchando el puerto...');
});
