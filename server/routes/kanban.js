const router = require("express").Router();
// const db = require("../db/cats");####

// package to verify jwt tokens
const verifyJwt = require("express-jwt");

// check these files out for comments
const auth = require("../auth/auth");

function getSecret(req, payload, done) {
  done(null, process.env.JWT_SECRET);
}

router.use(
  verifyJwt({
    secret: getSecret
  }),
  auth.handleError
);

// router.get("/", (req, res) => {//#####
//   db.getAll().then(cats => res.json(cats));
// });

module.exports = router