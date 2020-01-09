export const initialState = {
  currentPage: 0
};

export default function paginationReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_PAGE":
      return {
        ...state,
        currentPage: action.currentPage
      };
    default:
      return state;
  }
}
