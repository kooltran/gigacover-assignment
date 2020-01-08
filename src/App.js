import React from "react";
import { connect } from "react-redux";
import { tripAction } from "./redux/actions/tripAction";
import loadingGif from "./assets/loading.svg";
import { TripItem } from "./tripItem/tripItem";
import {
  StyledTripWrapper,
  StyledAppContainer,
  StyledAppTitle
} from "./App.styled";

export class App extends React.Component {
  componentDidMount() {
    this.props.tripAction(1);
  }

  render() {
    const { data, fetchState } = this.props;

    return (
      <StyledAppContainer>
        {fetchState === "loading" && <img src={loadingGif} alt="loading" />}
        {fetchState === "success" && (
          <StyledTripWrapper>
            <StyledAppTitle>Trips Management</StyledAppTitle>
            {data.trips.map(trip => (
              <TripItem key={trip.trip_id} tripData={trip} />
            ))}
          </StyledTripWrapper>
        )}
      </StyledAppContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.tripReducer.data,
    fetchState: state.tripReducer.fetchState
  };
};

const mapDispatchToProps = {
  tripAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
