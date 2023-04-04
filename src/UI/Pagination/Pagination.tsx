import React from "react";
import "./Pagination.css";

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (currentPage: number) => void;
}

const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="Pagination">
      <div
        className="Pagination__leftButton Pagination__button"
        onClick={() => {
          if (currentPage !== 1) {
            onPageChange(currentPage - 1);
          }
        }}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <ul className="Pagination__list">
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`Pagination__item ${
              pageNumber === currentPage ? "Pagination__item--active" : ""
            }
            ${pageNumber === currentPage - 1 ? "Pagination__item--preActive" : ""}
            `}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        ))}
      </ul>
      <div
        className="Pagination__rightButton Pagination__button"
        onClick={() => {
          onPageChange(currentPage + 1);
        }}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
};

export default Pagination;
