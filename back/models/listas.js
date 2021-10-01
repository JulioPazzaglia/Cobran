const S = require("sequelize");
const db = require("../config/db");

class Listas extends S.Model {}

Listas.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
      unique: { msg: "Este lista ya existe" },
    },
    gastosTotales: {
      type: S.INTEGER,
      allowNull: false,
    },
    fecha: {
      type: S.STRING
    },
  },
  { sequelize: db, modelName: "listas" }
);

module.exports = Listas;
