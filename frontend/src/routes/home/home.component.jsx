import { useNavigate } from "react-router-dom";
import React from "react";
import "./home.styles.css";
import pic from "./../../assets/Bign.png";

const Home = () => {
  const navigate = useNavigate();

  const navigateToJournals = () => {
    navigate("/journal");
  };

  return (
    <div className="section-hero ">
      <div className="hero">
        <div className="hero-description">
          <h1 className="heading-primary">
            Stay upto date with our vast collection of journals
          </h1>
          <h6 className="heading-secondary">Trusted by over 5000+ customers</h6>
          <button
            onClick={navigateToJournals}
            type="button"
            class="btn btn-dark "
          >
            Read now
          </button>
        </div>
        <div className="hero-img">
          <img src={pic} alt="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
