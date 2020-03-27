import React from "react";
import { Link } from "react-router-dom";
import { paginate } from "../utils/Pagination";
const Pagination = props => {
  const { items, onPageChange, pageSize, currentPage, startValue } = props;
  const pages = paginate(startValue, items, pageSize, currentPage);
  return (
    <div className="menu__pages">
      {pages.map(page => {
        const mystyle =
          page === currentPage
            ? { backgroundColor: "White", color: "#ff0000" }
            : { color: "#ff0000" };
        return page === "..." ? (
          <div key={page} className="page_no">
            {page}
          </div>
        ) : (
          <Link
            key={page}
            to={`/browse/${page}`}
            onClick={() => onPageChange(page)}
            style={mystyle}
            className={page === currentPage ? "active page_no" : "page_no"}
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
};

export default Pagination;
