const { Schema, model }= require('mongoose');

//nuevo esquema como una tabla los elementos de adentro son los campos
const userSchema = new Schema({
    nombre: String,
    cedula: String,
    email: String,
    password: String,
    ingreso: Number,
    egreso: Number 
},{
        timestamps: true //campo adicional del método: createdup y updatedup
 });

module.exports = model('user', userSchema); //exportar