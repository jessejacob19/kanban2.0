const db = require('./connection')

function getColumns(boardID) {
  return db("columns")
    .where({boardId: boardID})
    .select()
}

function deleteColumn(columnId) {
  return //deletes a specific column
}

function editColumnName(columnId, columnName) {
  return // edits a column name
}
function editColumnPos(columnId, columnPos) {
  return // edits a column position
}
function editColumnHeight(columnId, columnPos) {
  return // edits a column height
}
function editColumnWidth(columnId, columnPos) {
  return // edits a column width
}


module.exports = {
  getColumns,
  deleteColumn,
  editColumnName,
  editColumnPos,
  editColumnHeight,
  editColumnWidth
}