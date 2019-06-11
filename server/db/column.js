const connection = require('./connection')

function getColumns(boardId, db = connection) {
  return //gets all the columns for a specific board
}

function deleteColumn(columnId, db = connection) {
  return //deletes a specific column
}

function editColumnName(columnId, columnName, db = connection) {
  return // edits a column name
}
function editColumnPos(columnId, columnPos, db = connection) {
  return // edits a column position
}
function editColumnHeight(columnId, columnPos, db = connection) {
  return // edits a column height
}
function editColumnWidth(columnId, columnPos, db = connection) {
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