const mongoose = require("mongoose");

const NivelSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            maxlength: 30,
        },
    }
);

const Nivel = mongoose.model("Nivel", NivelSchema);

module.exports = Nivel;