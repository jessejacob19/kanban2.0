const initialState = {
  boardData: [],
  loading: false
}

export default function board(state = initialState, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: action.isFetching
      };
    case "SUCCESS":
      return {
        ...state,
        loading: action.isFetching,
        boardData: action.board
      };
  }
  return state;
}