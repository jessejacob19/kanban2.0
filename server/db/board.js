const db = require("./connection");

function getBoards(userID) {
  //####
  //gets all boards specific to the user
  console.log("yeet");
  return db("boards")
    .where({ accountId: userID })
    .select();
  // where id == id
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
  deleteBoard,
  editBoard
};
