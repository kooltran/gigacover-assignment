import tripReducder, { initialState } from "./tripReducer";

describe("trip reducer", () => {
  it("should have a initial state", () => {
    expect(tripReducder(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_TRIP_REQUEST action", () => {
    expect(
      tripReducder(undefined, {
        type: "FETCH_TRIP_REQUEST"
      })
    ).toEqual({
      ...initialState,
      fetchState: "loading"
    });
  });

  it("should handle FETCH_TRIP_SUCCESS action", () => {
    expect(
      tripReducder(undefined, {
        type: "FETCH_TRIP_SUCCESS",
        res: "A"
      })
    ).toEqual({
      ...initialState,
      fetchState: "success",
      data: "A"
    });
  });

  it("should handle FETCH_TRIP_FAIL action", () => {
    expect(
      tripReducder(undefined, {
        type: "FETCH_TRIP_FAIL",
        error: {
          message: "B"
        }
      })
    ).toEqual({
      ...initialState,
      fetchState: "fail",
      error: "B"
    });
  });
});
