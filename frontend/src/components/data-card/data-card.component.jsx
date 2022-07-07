import React from "react";

import "./data-card.styles.css";

const DataCard = ({ item }) => {
  return (
    <div className="card mb-3 data-card">
      <div className="card-body">
        <div class="left-con">
          <h3 className="card-title">
            {item.insight}, {item.country}
          </h3>
          <h4 className="color-s card-text">{item.title}</h4>
          <h5 className="bold">Topic: {item.topic}</h5>
        </div>
        <div class="ar">
          <h6 className="card-text">Source: {item.source}</h6>
          <h5 className="card-title">Sector: {item.sector}</h5>

          <a href={item.url} className="btn btn-dark">
            Read Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
