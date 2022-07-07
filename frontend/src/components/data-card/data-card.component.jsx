import React from "react";

const DataCard = ({ item }) => {
  return (
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">
          {item.insight}, {item.country}
        </h5>
        <h5 class="card-title"></h5>
        <h6 class="card-text">{item.title}</h6>
        <h6 class="card-text">Source: {item.source}</h6>
        <p class="card-title">
          Sector: {item.sector} &nbsp; &nbsp; &nbsp; Topic: {item.topic}
        </p>

        <a href={item.url} class="btn btn-primary">
          Read Now
        </a>
      </div>
    </div>
  );
};

export default DataCard;
