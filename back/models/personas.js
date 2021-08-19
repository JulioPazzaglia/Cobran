const S = require("sequelize");
const db = require("../config/db");

class Personas extends S.Model {}

Personas.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
      unique: { msg: "Este nombre ya existe" },
    },
    pagos: {
      type: S.ARRAY(S.JSON),
      defaultValue: [],
    },
  },
  { sequelize: db, modelName: "personas" }
);

module.exports = Personas;
