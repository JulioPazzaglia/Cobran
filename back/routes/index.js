const router = require("express").Router();
const listas = require("./listas");
const personas = require("./personas");
const users = require("./users");
const listas_personas = require("./listas_personas")

router.use("/personas", personas);
router.use("/listas", listas);
router.use("/users", users);
router.use("/link", listas_personas);

module.exports = router;
