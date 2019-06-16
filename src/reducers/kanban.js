const initialState = {
  kanbanData: [],
  loading: false
}

export default function kanban(state = initialState, action) {
  switch(action.type) {
    case "LOADING":
      return {
        ...state,
        loading: action.isFetching,

      }
    case "SUCCESS":
      return {
        ...state,
        loading: action.isFetching,
        kanbanData: action.kanban
      }
  }
  return state;
}