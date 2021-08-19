const router = require("express").Router();
const Listas = require("./listas");
const personas = require("./personas");

router.use("/personas", personas);
router.use("/listas", Listas)

module.exports = router;
