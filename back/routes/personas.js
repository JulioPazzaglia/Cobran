const router = require("express").Router();
const { Personas } = require("../models");

router.get("/", (req, res, next) => {
  Personas.findAll()
    .then((personas) => res.send(personas).status(200))
    .catch((err) => res.send(err));
});

router.get("/:id", (req, res, next) => {
  Personas.findByPk(req.params.id)
    .then((persona) => res.send(persona).status(200))
    .catch((err) => res.send(err));
});

router.post("/", (req, res, next) => {
  Personas.create(req.body)
    .then((persona) => res.send(persona).status(201))
    .catch((err) => res.send(err));
});

router.put("/:id", (req, res, next) => {
  Personas.findByPk(req.params.id)
    .then((persona) => {
      persona.update(req.body).then((updated) => res.send(updated));
    })
    .catch((err) => res.send(err));
});

router.delete("/:id", (req, res, next) => {
  Personas.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.status(200).send("eliminado correctamente");
    })
    .catch((err) => res.send(err));
});

module.exports = router;
