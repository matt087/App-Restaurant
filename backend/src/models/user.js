const { Schema, model }= require('mongoose');

//nuevo esquema como una tabla los elementos de adentro son los campos
const userSchema = new Schema({
    nombre: String,
    email: String,
    numero: String,
    direccion: String,
    referencia: String,
    password1: String,
    password2: String
},{
        timestamps: true //campo adicional del método: createdup y updatedup
 });

module.exports = model('user', userSchema); //exportar