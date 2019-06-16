import axios from "axios";
import { get } from "../../authUtilities/localstorage";
import decode from "jwt-decode";

export function getAllBoardsAction() {
  const token = get("token");
  axios.defaults.headers.common = { Authorization: `bearer ${token}` };
  let userId = decode(token).id;
  return function(dispatch) {
    //dispatch(loading());
    axios.get(`/api/v1/kanban/board/${userId}`).then(res => {
      console.log(res.data);
      if (!res.status == 200) {
        dispatch(errorMessage(res.status));
      } else {
        dispatch(recieveBoards(res.data));
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
function recieveBoards(boards) {
  return {
    type: "SUCCESS",
    isFetching: false,
    boards
  };
}
