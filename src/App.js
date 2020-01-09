import React from "react";
import { connect } from "react-redux";
import { tripAction } from "./redux/actions/tripAction";
import loadingGif from "./assets/loading.svg";
import { TripItem } from "./tripItem/tripItem";
import Pagination from "./pagination/pagination";
import {
  StyledTripWrapper,
  StyledAppContainer,
  StyledAppTitle
} from "./App.styled";

export class App extends React.Component {
  componentDidMount() {
    const { currentPage } = this.props;
    this.props.tripAction(currentPage);
  }

  render() {
    const { data, fetchState, error } = this.props;

    return (
      <StyledAppContainer>
        <StyledAppTitle>Trips Management</StyledAppTitle>
        {fetchState === "loading" && <img src={loadingGif} alt="loading" />}
        {fetchState === "success" && (
          <StyledTripWrapper>
            <Pagination />
            {data.trips.map(trip => (
              <TripItem key={trip.trip_id} tripData={trip} />
            ))}
          </StyledTripWrapper>
        )}
        {fetchState === "fail" && <div>{error}</div>}
      </StyledAppContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.tripReducer.data,
    fetchState: state.tripReducer.fetchState,
    error: state.tripReducer.error,
    currentPage: state.paginationReducer.currentPage
  };
};

const mapDispatchToProps = {
  tripAction
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
