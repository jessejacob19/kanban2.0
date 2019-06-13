const connection = require("./connection");

function getCards(columnID, db = connection) {
  return db("cards")
  .where({id: columnID})
  .select()
}

function deleteCard(cardID, db = connection) {
  return db("cards")
  .where({id: cardID})
  .delete()
}
function editCardName(cardID, newName, db = connection) {
  return db("cards")
  .where({id: cardID})
  .update({name: newName})
}
function editCardDescription(cardID, newDescription, db = connection) {
  return db("cards")
  .where({id: cardID})
  .update({description: newDescription})
}
function editCardPos(cardID, newPos, db = connection) {
  return db("cards")
  .where({id: cardID})
  .update({position: newPos})
}
function moveCard(cardId, newColumn, db = connection) {
  return; // moves card from one column to another
  // dont know if im gonna move the position aswell
}

module.exports = {
  getCards,
  deleteCard,
  editCardName,
  editCardDescription,
  editCardPos,
  moveCard
};
