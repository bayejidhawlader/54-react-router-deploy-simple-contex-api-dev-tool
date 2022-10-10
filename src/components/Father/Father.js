import React from "react";
import "./Father.css";
import Myself from "../Myself/Myself";
import Brother from "../Brother/Brother";
import Sister from "../Sister/Sister";

const Father = ({ house }) => {
  return (
    <div>
      <h1>Father</h1>
      <p>
        <small>House: {house}</small>
      </p>
      <section className="flex">
        <Myself house={house}></Myself>
        <Brother house={house}></Brother>
        <Sister house={house}></Sister>
      </section>
    </div>
  );
};

export default Father;
