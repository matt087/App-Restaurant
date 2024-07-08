const { Schema, model }= require('mongoose');

//nuevo esquema como una tabla los elementos de adentro son los campos
const dishSchema = new Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    imagen: String,
    alt: String
},{
        timestamps: true //campo adicional del método: createdup y updatedup
 });

module.exports = model('Dish', dishSchema); //exportar