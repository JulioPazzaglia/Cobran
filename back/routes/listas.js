const router = require("express").Router();
const { Listas } = require("../models");

router.get("/", (req, res, next) => {
  Listas.findAll()
    .then((listas) => res.send(listas).status(200))
    .catch((err) => res.send(err));
});

router.get("/:id", (req, res, next) => {
    Listas.findByPk(req.params.id)
      .then((lista) => res.send(lista).status(200))
      .catch((err) => res.send(err));
});

router.post("/", (req, res, next) => {
    Listas.create(req.body)
      .then((lista) => res.send(lista).status(201))
      .catch((err) => res.send(err));
});

router.put("/:id", (req, res, next) => {
    Listas.findByPk(req.params.id)
      .then((lista) => {
          lista.update(req.body)
          .then(update => res.send(update).status(200))
      })
      .catch((err) => res.send(err));
});

router.delete("/:id", (req, res, next) => {
    Listas.destroy({
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