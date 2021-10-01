const router = require("express").Router();
const { Personas, Listas} = require("../models");

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

router.delete("/:persona/:lista", (req, res, next) =>{
    Personas.findByPk(req.params.persona)
    .then((persona)=>{
        Listas.findByPk(req.params.lista)
        .then(lista => {
            lista.removePersonas(persona)
            res.send("eliminado de la lista").status(200)
        })
    })
    .catch((err) => res.send(err));
})

module.exports = router;