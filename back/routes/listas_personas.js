const router = require("express").Router();
const { Personas, Listas, Lista_personas } = require("../models");

router.put("/", (req, res, next) =>{
    Personas.findByPk(req.body.persona)
    .then((persona)=>{
        Listas.findByPk(req.body.lista)
        .then(lista => {
            lista.addPersonas(persona)
            res.send("Agregado a la lista").status(200)
        })
    })
    .catch((err) => res.send(err));
})

module.exports = router;