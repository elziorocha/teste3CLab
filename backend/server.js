const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json())

const Dev = require('./models/dev.model.js')
const Nivel = require('./models/nivel.model.js');

app.get("/", (req, res) => {
    res.send("TESTE123");
});

app.post("/api/dev", async (req, res) => {
    try {
        
        const desenvolvedor = await Dev.create(req.body);
        res.status(200).json(desenvolvedor);

    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

app.post("/api/nivel", async (req, res) => {
    try {
        
        const nivel = await Nivel.create(req.body);
        res.status(200).json(nivel);

    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

mongoose.connect("mongodb+srv://elziorocha:3CLAB123@teste3c.ovlfq.mongodb.net/Node-API?retryWrites=true&w=majority&appName=teste3C")
.then(() => {
    console.log("Database conectado!");
    
    app.listen(PORT, () => {
        console.log(`Servidor na porta: http:localhost:${PORT} `);
    });
})
.catch(() => {
    console.log("Conexão do Database falhou");
});