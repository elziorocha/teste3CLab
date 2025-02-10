const mongoose = require("mongoose");

const DevSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            maxlength: 50,
        },
        sexo: {
            type: String,
            maxlength: 1,
        },
        data_nascimento: {
            type: Date,
            maxlength: 12,
        },
        hobby: {
            type: String,
            maxlength: 40,
        },
        nivel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Nivel',
        }
    },
);

const Dev = mongoose.model("Dev", DevSchema);

module.exports = Dev;