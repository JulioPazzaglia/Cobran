const express = require("express");
const app = express();
const db = require("./config/db");
const PORT = process.env.PORT || 3001;
const cookieParser = require("cookie-parser");

const { listas, personas } = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", require("./routes"));

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err);
});

db.sync({ force: false })
  .then(({ config }) => {
    console.log(`Successful database connection to => ${config.database}`);
    app.listen(PORT, () => console.log(`server listening at port ${PORT}`));
  })
  .catch((err) => {
    console.log("DB sync failed", err);
  });

module.exports = app;
