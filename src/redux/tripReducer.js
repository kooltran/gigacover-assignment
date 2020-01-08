export const initialState = {
  fetchState: "idle",
  data: {},
  error: null
};

export default function tripReducder(state = initialState, action) {
  switch (action.type) {
    case "FETCH_TRIP_REQUEST":
      return {
        ...state,
        fetchState: "loading"
      };
    case "FETCH_TRIP_SUCCESS":
      return {
        ...state,
        fetchState: "success",
        data: action.res
      };
    case "FETCH_TRIP_FAIL":
      return {
        ...state,
        fetchState: "fail",
        error: action.res
      };
    default:
      return state;
  }
}
