import styled from "styled-components";
import { COLORS } from "../variables";

export const StyledPaginationList = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  width: 100%;
`;

export const StyledPaginationItem = styled.span`
  width: 20px;
  height: 20px;
  display: block;
  background: ${props => (props.isCurrentPage ? COLORS.WHITE : COLORS.GREEN)};
  color: ${props => (props.isCurrentPage ? COLORS.GREEN : COLORS.WHITE)};
  padding: 5px;
  border: 1px solid ${COLORS.WHITE};
  text-align: center;
  line-height: 20px;
  ${props => (props.isFirstPage || props.isPrevPage) && "order: -1"}
  ${props => props.isNextPage && `order: ${props.totalPages - 1}`}
  ${props => props.isLastPage && `order: ${props.totalPages - 1}`}
  cursor: pointer;
`;
