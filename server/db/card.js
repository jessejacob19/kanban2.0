const db = require("./connection");

async function getCards(columnID) {
  return db("cards")
    .where({ columnId: columnID })
    .select();
}

function deleteCard(cardID) {
  return db("cards")
    .where({ id: cardID })
    .delete();
}
function editCardName(cardID, newName) {
  return db("cards")
    .where({ id: cardID })
    .update({ name: newName });
}
function editCardDescription(cardID, newDescription) {
  return db("cards")
    .where({ id: cardID })
    .update({ description: newDescription });
}
function editCardPos(cardID, newPos) {
  return db("cards")
    .where({ id: cardID })
    .update({ position: newPos });
}
function moveCard(cardId, newColumn) {
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
