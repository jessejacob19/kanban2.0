const connection = require('./connection')

function getBoards(userId, db = connection) {//####
  //gets all boards specific to the user
  return db("boards")
  .select()
  // where id == id
}
function deleteBoard(userId, db = connection) {//####
  //deletes a specific board
  return db("boards")
  .delete()
  // where id == id
}
function editBoard(id, db = connection) {//#####
  return // edits the boards name
}

module.exports = {
  getBoards,
  deleteBoard,
  editBoard

}