/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Data from "./components/data-list/data-list.component";
// import Pagination from "./components/pagination/pagination.component";
import { Pagination } from "antd";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([{}]);
  const [total, setTotal] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:8080/api/v1/data");
      setData(res.data.results);
      setTotal(res.data.results.length);
      setLoading(false);
    };
    fetchData();
  }, []);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  const onShowSizeChange = (current, pageSize) => {
    setDataPerPage(pageSize);
    setCurrentPage(1);
  };

  const itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb">The Journal Manager</h1>
      <Data data={currentData} loading={loading} />
      <div class="pb-5">
        <Pagination
          onChange={(pageNumber) => setCurrentPage(pageNumber)}
          pageSize={dataPerPage}
          total={total}
          currentPage={currentPage}
          showSizeChanger
          showQuickJumper
          onShowSizeChange={onShowSizeChange}
          itemRender={itemRender}
        />
      </div>
    </div>
  );
}

export default App;
