import React from "react";
import DataCard from "../data-card/data-card.component";

const Data = ({ data, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4 ">
      {data.map((item) => (
        <div>
          <DataCard key={item._id} item={item} />
        </div>
      ))}
    </ul>
  );
};

export default Data;
