import React from "react";
import {
  StyledPaginationList,
  StyledPaginationItem
} from "./pagination.styled";
import { connect } from "react-redux";
import { paginationAction } from "../redux/actions/paginationAction";
import { tripAction } from "../redux/actions/tripAction";
import { MAXIMUM_PAGINATION } from "../variables";

class Pagination extends React.Component {
  renderPaginationThumbs() {
    const { data, paginationAction, tripAction, currentPage } = this.props;
    const { totalPages } = data;
    const max_page =
      totalPages < MAXIMUM_PAGINATION ? totalPages : MAXIMUM_PAGINATION;
    const fullPaginationItems = Array.from(Array(totalPages).keys());
    const paginationItemsInit = Array.from(Array(max_page).keys());

    const paginationItems = currentPage
      ? currentPage >= totalPages - max_page
        ? fullPaginationItems.splice(totalPages - max_page, max_page)
        : fullPaginationItems.splice(currentPage, 4)
      : paginationItemsInit;

    const addPaginationItem = (pageItem, label, isCurrent = false) => {
      paginationItems.push({ pageItem, label, isCurrent });
    };

    if (currentPage >= 1 && max_page >= MAXIMUM_PAGINATION) {
      addPaginationItem(0, "<<");
      addPaginationItem(currentPage - 1, "<");
    }

    for (let i = 0; i < paginationItems; i++) {
      if (i === currentPage) {
        addPaginationItem(i, `${i}`, true);
      } else {
        addPaginationItem(i, `${i}`);
      }
    }

    if (currentPage < totalPages - 1 && max_page >= MAXIMUM_PAGINATION) {
      addPaginationItem(currentPage + 1, ">");
      addPaginationItem(totalPages - 1, ">>");
    }

    const handlePagination = page => {
      paginationAction(page);
      if (currentPage !== page) {
        tripAction(page);
      }
    };

    return paginationItems.map((item, idx) => (
      <StyledPaginationItem
        key={idx}
        onClick={() =>
          handlePagination(item.pageItem !== undefined ? item.pageItem : item)
        }
        isCurrentPage={item === currentPage}
        isFirstPage={item.pageItem === 0}
        isLastPage={item.pageItem === totalPages}
        isPrevPage={item.label === "<"}
        totalPages={totalPages}
      >
        {item.label || item + 1}
      </StyledPaginationItem>
    ));
  }

  render() {
    return (
      <StyledPaginationList>
        {this.renderPaginationThumbs()}
      </StyledPaginationList>
    );
  }
}

const mapStateToProps = state => ({
  data: state.tripReducer.data,
  currentPage: state.paginationReducer.currentPage
});

const mapDispatchToProps = {
  paginationAction,
  tripAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
