import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Friend = () => {
  const [house, setHouse] = useContext(RingContext);
  return (
    <div>
      <h4>Friend</h4>
      <p>
        <small>House : {house}</small>
        <button onClick={() => setHouse(house - 2)}>Decrease</button>
      </p>
    </div>
  );
};

export default Friend;
