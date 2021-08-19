const S = require("sequelize");
const db = require("../config/db");

class Listas extends S.Model {}

Listas.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    gastosTotales: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "listas" }
);

module.exports = Listas;
