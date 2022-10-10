import React from "react";
import "./TShirt.css";

const TShirt = ({ tshirt, handelAddToCart }) => {
  const { picture, name, price } = tshirt;
  return (
    <div className="tshirt">
      <img src={picture} alt=""></img>
      <h2>{name}</h2>
      <h4>{price}</h4>
      <button onClick={() => handelAddToCart(tshirt)}>Add To Cart</button>
    </div>
  );
};

export default TShirt;
