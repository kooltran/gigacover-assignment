import React from "react";

class PaginationItem extends React.Component {
  render() {
    const { pageItem } = this.props;
    return <div>{pageItem}</div>;
  }
}

export default PaginationItem;
