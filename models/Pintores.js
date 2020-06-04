const mongoose = require('mongoose');
//vamos a crear un schema (nuestra base de datos)
let Schema = mongoose.Schema;
//crear la conexion
let PintoresSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Requerimos el nombre']
    },
    corriente:{
        type: String,
        required: [true, 'Requerimos la corriente del pintor']
    },
    nombre:{
        type: String
    },
    nacionalidad:{
        type: String
    },
    pintura:{
        type: String
    }
});
module.exports= mongoose.model('Pintores', PintoresSchema);
