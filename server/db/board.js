const connection = require('./connection')

function getBoards(userID, db = connection) {//####
  //gets all boards specific to the user
  return db("boards")
  .where({id: userID})
  .select()
  // where id == id
}
function deleteBoard(boardID, db = connection) {//####
  //deletes a specific board
  return db("boards")
  .where({id: boardID})
  .delete()
  // where id == id
}
function editBoard(boardID, newName, db = connection) {//#####
  return db("boards")
  .where({id: boardID})
  .update({name: newName})
  
  // edits the boards name
}

module.exports = {
  getBoards,
  deleteBoard,
  editBoard

}