const router = require("express").Router();
const { Personas } = require("../models");
const { Op } = require("sequelize");

router.get("/", (req, res, next) => {
  Personas.findAll()
    .then((personas) => res.send(personas).status(200))
    .catch((err) => res.send(err));
});

router.get("/find/:id", (req, res, next) => {
  Personas.findByPk(req.params.id)
    .then((persona) => res.send(persona).status(200))
    .catch((err) => res.send(err));
});

router.get("/search/:name", (req, res, next) => {
  Personas.findAll({
    where: {
      name: {
        [Op.like]: `%${req.params.name}%`,
      },
    },
  })
    .then((personas) => {
      res.send(personas).status(200);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/", (req, res, next) => {
  Personas.create(req.body)
    .then((persona) => res.send(persona).status(201))
    .catch((err) => res.send(err));
});

router.put("/edit/:id", (req, res, next) => {
  Personas.findByPk(req.params.id)
    .then((persona) => {
      persona.update(req.body).then((updated) => res.send(updated));
    })
    .catch((err) => res.send(err));
});

router.put("/pago/:id", (req, res, next) => {
  const listId = req.body.listId;
  Personas.findByPk(req.params.id)
    .then((persona) => {
      if (persona.pagos.includes(listId)) {
        var lista = persona.pagos.filter((value) => value != listId);
        persona.update({ pagos: lista }).then((updated) => res.send(updated));
      } else {
        persona
          .update({ pagos: [...persona.pagos, req.body.listId] })
          .then((updated) => res.send(updated));
      }
    })
    .catch((err) => res.send(err));
});

router.delete("/delete/:id", (req, res, next) => {
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
