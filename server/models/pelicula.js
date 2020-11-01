const mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Datos que pide el formulario de la web
let peliculaSchema = new Schema({
    Titulo: String,
    Genero: String,
    Descripcion: String,
    Calificacion: String,
    imdbID: String,
});

module.exports = mongoose.model("Pelicula", peliculaSchema);
