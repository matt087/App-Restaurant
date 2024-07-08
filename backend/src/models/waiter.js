const { Schema, model }= require('mongoose');

//nuevo esquema como una tabla los elementos de adentro son los campos
const waiterSchema = new Schema({
    cedula: String,
    nombre: String,
    apellido: String
},{
        timestamps: true //campo adicional del método: createdup y updatedup
 });

module.exports = model('waiter', waiterSchema); //exportar