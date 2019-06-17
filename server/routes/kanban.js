const router = require("express").Router();
// const db = require("../db/cats");####
const boardDB = require("../db/board");
const columnDB = require("../db/column");
const cardDB = require("../db/card");

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
//######## kanban routes
router.get("/board/:userId", (req, res) => {
  let userID = req.params.userId;
  boardDB.getBoards(userID).then(boards => res.json(boards));
  //.catch(err => console.err(err));
});

router.get("/data/boards/:boardId", (req, res) => {
  let boardId = req.params.boardId;
  boardDB.getBoard(boardId).then(board => {
    columnDB.getColumns(board[0].id).then(async columns => {
      board[0].columns = columns;
      for (let i = 0; i < columns.length; i++) {
        let cards = await cardDB.getCards(columns[i].id);
        board[0].columns[i].cards = cards;
      }
      return res.json(board);
    });
  });
});

module.exports = router;
