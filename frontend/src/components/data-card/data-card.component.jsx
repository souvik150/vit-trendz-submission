import React from "react";

const DataCard = ({ item }) => {
  return (
    <div>
      <li className="list-group-item">{item.title}</li>
    </div>
  );
};

export default DataCard;
