import axios from "axios";
import { get } from "../../authUtilities/localstorage";
import decode from "jwt-decode";

export function getBoardAction() {
  const token = get("token");
  axios.defaults.headers.common = { Authorization: `bearer ${token}` };
  let userId = decode(token).id;
  return function(dispatch) {
    dispatch(loading());
    ///data/boards/:userId
    axios.get(`/api/v1/kanban/data/boards/${userId}`).then(res => {
      if (!res.status == 200) {
        dispatch(errorMessage(res.status));
      } else {
        dispatch(recieveBoard(res.data));
      }
    });
  };
}

function loading() {
  return {
    type: "LOADING",
    isFetching: true
  };
}

function errorMessage(err) {
  return {
    type: "ERROR",
    isFetching: false,
    err
  };
}
function recieveBoard(board) {
  return {
    type: "SUCCESS",
    isFetching: false,
    board
  };
}