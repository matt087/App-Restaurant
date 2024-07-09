const { Schema, model }= require('mongoose');

//nuevo esquema como una tabla los elementos de adentro son los campos
const infoSchema = new Schema({
    telefono: String,
    correo: String,
    ubicacion: String
},{
        timestamps: true //campo adicional del método: createdup y updatedup
 });

module.exports = model('Information', infoSchema); //exportar