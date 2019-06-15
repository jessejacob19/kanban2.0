import axios from 'axios';
import { get } from "../../authUtilities/localstorage";

export function getAllBoardsAction() {
  const token = get('token')

  axios.defaults.headers.common = { Authorization: `bearer ${token}` };

  return function(dispatch) {
    dispatch(loading());
    axios.get('/api/v1/kanban/board')
    .then(res => {
      if(!res.status == 200) {
        dispatch(errorMessage(res.status));
      } else {
        dispatch(recieveBoards(res.data))
      }
    })
  }
}

function loading() {
  return {
    type: "LOADING",
    isFetching: true
  }
}

function errorMessage(err) {
  return {
    type: "ERROR",
    isFetching: false,
    err
  }
}
function recieveBoards(boards) {
  return {
    type:"SUCCESS",
    isFetching: false,
    boards
  }
}