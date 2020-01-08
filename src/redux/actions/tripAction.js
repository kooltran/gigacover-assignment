import { tripsApi } from "../../api/tripsApi";

export const tripAction = page => {
  return dispatch => {
    dispatch({ type: "FETCH_TRIP_REQUEST" });
    return tripsApi(page)
      .then(res => dispatch({ type: "FETCH_TRIP_SUCCESS", res }))
      .catch(error => dispatch({ type: "FETCH_TRIP_FAIL", error }));
  };
};
