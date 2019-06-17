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
    console.log(34, board);
    // for (let i = 0; i < boards.length; i++) {
    //   columnDB.getColumns(boards[i].id).then(columns => {
    //     for (let j = 0; j < columns.length; j++) {
    //       cardDB.getCards(columns[j].id).then(cards => {
    //         columns[j].cards = cards;
    //       });
    //     }
    //     board[i].columns = columns;
    //   });
    // }
    return res.json(board);
  });
});

module.exports = router;
