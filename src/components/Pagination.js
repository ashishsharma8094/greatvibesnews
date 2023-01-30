import React from "react";
import { useGlobalContext } from "./Context";

const Pagination = () => {
  const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext();
  return (
    <>
      <div className="pagination-btn">
        <nav aria-label="Page navigation example">
          <ul
            className="pagination justify-content-center"
            style={{ margin: 0 }}
          >
            <li className={"page-item " + (page === 0 ? "disabled" : "")}>
              <button
                onClick={() => getPrevPage()}
                className="page-link"
                href="#"
              >
                Previous
              </button>
            </li>
            <li className="page-item">
              <p style={{ margin: 0 }} className="page-link">
                {page + 1} of {nbPages}
              </p>
            </li>
            <li className="page-item">
              <button onClick={() => getNextPage()} className="page-link">
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Pagination;
