import React from "react";
import "./Card.scss";

export const Card: React.FC = () => {
  return (
    <div className="card">
      <div>
        <img
          className="card__image"
          src={require("./1024px-Flag_of_the_United_States_(reversed).png")}
          alt="image of flag"
        />
      </div>
      <div className="card__content">
        <h3 className="card__title">United States of America</h3>

        <div className="card__details">
          <div className="card__details--population">
            <p className="detail__title">Population:</p>
            <p className="detail__value">323,947,000</p>
          </div>
          <div className="card__details--region">
            <p className="detail__title">Region:</p>
            <p className="detail__value">America</p>
          </div>
          <div className="card__details--capital">
            <p className="detail__title">Capital:</p>
            <p className="detail__value">Washington</p>
          </div>
        </div>
      </div>
    </div>
  );
};
