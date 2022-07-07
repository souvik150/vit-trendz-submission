/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Data from "./components/data-list/data-list.component";
import Pagination from "./components/pagination/pagination.component";

import "./App.css";

function App() {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(35);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:8080/api/v1/data");
      setData(res.data.results);
      setLoading(false);
    };
    fetchData();
  }, []);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb">My New Fetcher App</h1>
      <Data data={currentData} loading={loading} />
      <Pagination
        dataPerPage={dataPerPage}
        totalData={data.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
