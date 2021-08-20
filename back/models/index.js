const Listas = require("./listas");
const Personas = require("./personas");

Personas.belongsToMany(Listas, { through: "listas_personas" });
Listas.belongsToMany(Personas, { through: "listas_personas" });

module.exports = { Listas, Personas };
