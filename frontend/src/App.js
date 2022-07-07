/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import Data from "./components/Data.components";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:8080/api/v1/data");
      setData(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  const { results } = data;

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = results.slice(indexOfFirstData, indexOfLastData);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb">My New Fetcher App</h1>
      <Data data={currentData} loading={loading} />
    </div>
  );
}

export default App;
