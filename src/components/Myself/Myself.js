import React from "react";
import Special from "../Special/Special";

const Myself = ({ house }) => {
  return (
    <div>
      <h2>My Self</h2>
      <p>
        <small>House {house}</small>
        <section>
          <Special></Special>
        </section>
      </p>
    </div>
  );
};

export default Myself;
