import React from "react";
import {
  StyledTripItemGroup,
  StyledTripLabel,
  StyledTripContent,
  StyledTripItem,
  StyledTripInfoWrapper,
  StyledTripTimeStamp,
  StyledTripStartDay,
  StyledTripEndDay,
  StyledTripStatus,
  StyledTripStatusText
} from "./tripItem.styled";
import { convertSecondToHours, convertToLongDate } from "../helpers";

export const TripItem = ({ tripData }) => {
  return (
    <StyledTripItem>
      <StyledTripTimeStamp>
        <StyledTripEndDay>
          {convertToLongDate(tripData.start_time).date}
        </StyledTripEndDay>
        <StyledTripStartDay>
          {convertToLongDate(tripData.start_time).date}
        </StyledTripStartDay>
      </StyledTripTimeStamp>
      <StyledTripInfoWrapper>
        <StyledTripItemGroup>
          <StyledTripLabel>Duration</StyledTripLabel>
          <StyledTripContent>
            {convertSecondToHours(tripData.duration)}
          </StyledTripContent>
        </StyledTripItemGroup>
        <StyledTripItemGroup>
          <StyledTripLabel>Distance</StyledTripLabel>
          <StyledTripContent>{tripData.distance} km</StyledTripContent>
        </StyledTripItemGroup>
        <StyledTripItemGroup>
          <StyledTripLabel>Start Time</StyledTripLabel>
          <StyledTripContent>
            <div>{convertToLongDate(tripData.start_time).time}</div>
          </StyledTripContent>
        </StyledTripItemGroup>
        <StyledTripItemGroup>
          <StyledTripLabel>End Time</StyledTripLabel>
          <StyledTripContent>
            <div>{convertToLongDate(tripData.start_time).time}</div>
          </StyledTripContent>
        </StyledTripItemGroup>
      </StyledTripInfoWrapper>
      <StyledTripStatus>
        <StyledTripStatusText>Status</StyledTripStatusText>
      </StyledTripStatus>
    </StyledTripItem>
  );
};
