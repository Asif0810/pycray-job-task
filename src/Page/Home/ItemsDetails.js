import React, { useState } from "react";

const ItemsDetails = ({ item }) => {
  const { category, date, description, heading, photo } = item;

  return (
    <div className="card glass">
      <figure>
        <img src={photo} alt="business" />
      </figure>
      <div
        className="pl-8 mt-5 flex justify-between"
        style={{ width: "200px" }}
      >
        <small>{date}</small>
        <small>{category}</small>
      </div>
      <div className="card-body">
        <h2 className="card-title text-start">{heading}</h2>
        <p className="text-start">{description}</p>
      </div>
    </div>
  );
};

export default ItemsDetails;
