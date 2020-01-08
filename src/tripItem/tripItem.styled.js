import styled from "styled-components";
import { COLORS } from "../variables";

export const StyledTripStatus = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  color: ${COLORS.WHITE};
  width: 50px;
  height: 100%;
  background: ${COLORS.GREEN};
  opacity: 0.5;

  @media (max-width: 480px) {
    width: 35px;
  }
`;

export const StyledTripItem = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 49%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  padding: 20px 30px 0 5px;
  background: ${COLORS.GRAY};
  color: #777;
  box-sizing: border-box;
  margin-bottom: 20px;
  margin-right: 15px;
  cursor: pointer;
  transition: ease-in-out opacity 0.5s;

  &:nth-child(2n + 1) {
    margin-right: 0;
  }

  &:hover ${StyledTripStatus} {
    opacity: 1;
  }

  @media (max-width: 992px) {
    width: 100%;
    margin-bottom: 10px;
  }
  @media (max-width: 480px) {
    margin-right: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const StyledTripItemGroup = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    margin: 0;
  }
`;

export const StyledTripLabel = styled.div`
  font-weight: 600;
  color: #222;
`;

export const StyledTripContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledTripImg = styled.img`
  width: 80px;
  height: 80px;
`;

export const StyledTripTimeStamp = styled.div`
  width: 150px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &:after {
    content: "";
    width: 5px;
    height: 75%;
    top: 25px;
    position: absolute;
    background: ${COLORS.GREEN};
  }

  @media (max-width: 480px) {
    width: 85px;
  }
`;

export const StyledTripInfoWrapper = styled.div`
  padding: 10px 30px 10px;
  background: ${COLORS.WHITE};
  width: calc(100% - 230px);

  @media (max-width: 480px) {
    width: calc(100% - 145px);
  }
`;

export const StyledTripStartDay = styled.div`
  color: ${COLORS.GREEN};
`;

export const StyledTripEndDay = styled.div`
  color: ${COLORS.GREEN};
`;

export const StyledTripStatusText = styled.div`
  transform: translate(-50%, -50%) rotate(270deg);
  position: absolute;
  top: 50%;
  left: 50%;
`;
