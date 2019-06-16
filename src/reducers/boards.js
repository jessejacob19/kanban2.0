const initialState = {
  boardData: [],
  loading: false
};

export default function boards(state = initialState, action) {
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
        boardData: action.boards
      };
  }
  return state;
}
