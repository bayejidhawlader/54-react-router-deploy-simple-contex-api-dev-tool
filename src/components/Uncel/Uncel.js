import React, { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Uncel = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Uncel</h2>
      <p>Money: {money}</p>
    </div>
  );
};

export default Uncel;
