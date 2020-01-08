import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";

describe("renders App component", () => {
  const baseProps = {
    fetchState: "loading",
    tripAction: jest.fn(),
    data: {
      trips: [
        {
          distance: 12,
          duration: 123,
          start_time: "2000-11-22T03:44:55+0000",
          end_time: "2000-11-22T03:55:66+0000",
          trip_id: 10000
        },
        {
          distance: 13,
          duration: 456,
          start_time: "2000-11-22T03:44:55+0000",
          end_time: "2000-11-22T03:55:66+0000",
          trip_id: 1111
        }
      ]
    }
  };

  it("should render properly with loading state", () => {
    expect(shallow(<App {...baseProps} />)).toMatchSnapshot();
  });

  it("should dispatch an action on componentDidMount", () => {
    expect(baseProps.tripAction).toHaveBeenCalledTimes(1);
  });
});
