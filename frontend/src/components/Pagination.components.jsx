import React from "react";

const Pagination = ({ dataPerPage, totalData }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return <div></div>;
};

export default Pagination;
