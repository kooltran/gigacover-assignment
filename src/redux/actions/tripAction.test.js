import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import expect from "expect";
import { tripAction } from "./tripAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("trips actions", () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it("creates FETCH_TRIP_SUCCESS after successfuly fetching trips", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { trips: [] }
      });
    });

    const expectedActions = [
      { type: "FETCH_TRIP_REQUEST" },
      { type: "FETCH_TRIP_SUCCESS", res: { trips: [] } }
    ];

    const store = mockStore();

    return store.dispatch(tripAction()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates FETCH_TRIP_FAIL after failure fetching trips", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 404,
        response: { message: "Fetch was fail" }
      });
    });

    const expectedActions = [
      { type: "FETCH_TRIP_REQUEST" },
      { type: "FETCH_TRIP_FAIL", res: { error: "Fetch was fail" } }
    ];

    const store = mockStore({ res: { error: "Fetch was fail" } });

    return store.dispatch(tripAction()).catch(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
