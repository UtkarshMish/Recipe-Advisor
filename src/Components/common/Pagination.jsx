import React from "react";
import { Link } from "react-router-dom";
const Pagination = () => {
  return (
    <div className="menu__pages">
      <Link to="browse/recipe/" className="page_no">
        1
      </Link>
    </div>
  );
};

export default Pagination;
