const db = require("./connection");

function getBoards(userID) {
  //####
  //gets all boards specific to the user
  return db("boards")
    .where({ accountId: userID })
    .select();
  // where id == id
}

function getBoard(boardID) {
  return db("boards")
    .where({ id: boardID })
    .select();
}





function addBoard(board) {
  return db("boards")
    .insert({
      name: board.name,
      accountId: board.userId
    })
    .then(() => {
      return db("boards").select();
    });
}

function deleteBoard(boardID) {
  //####
  //deletes a specific board
  return db("boards")
    .where({ id: boardID })
    .delete();
  // where id == id
}
function editBoard(boardID, newName) {
  //#####
  return db("boards")
    .where({ id: boardID })
    .update({ name: newName });

  // edits the boards name
}

module.exports = {
  getBoards,
  getBoard,
  addBoard,
  deleteBoard,
  editBoard
};
