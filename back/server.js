const express = require("express");
const app = express();
const db = require("./config/db");
const PORT = process.env.PORT || 3001;
const cookieParser = require("cookie-parser");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

const { listas, personas } = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

passport.use(
  new localStrategy(
    { usernameField: "email", passwordField: "password" },
    function (email, password, done) {
      User.findOne({
        where: {
          email,
        },
      })
      .then((user) => {
        if (!user) {
          return done(null, false);
        }
        user.hash(password, user.salt).then((hash) => {
          if (hash !== user.password) {
            return done(null, false);
          }
          done(null, user);
        });
      })
      .catch(done);
    }
    )
    );
    
    passport.serializeUser(function (user, done) {
      done(null, user.id);
    });
    
    passport.deserializeUser(function (id, done) {
      User.findByPk(id).then((user) => done(null, user));
    });
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
