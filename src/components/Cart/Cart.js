import React from "react";
import "./Cart.css";

const Cart = ({ cart, handelRemoveItem }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please Buy minimum one item</p>;
  } else if (cart.length === 1) {
    message = (
      <div>
        <h3>Give me One for Me</h3>
        <p>Take one for you</p>
        <p>
          <small>Take one for my Friend</small>
        </p>
      </div>
    );
  } else {
    message = <p>Thsnks for Buying</p>;
  }
  return (
    <div>
      <h2 className={cart.length === 2 ? `orange` : "blue"}>Order Summary</h2>
      <h5 className={`bold ${cart.length == 2 ? "tomato" : "green"}`}>
        Order Quantity: {cart.length}
      </h5>
      {cart.map((thisrt) => (
        <p key={thisrt._id}>
          {thisrt.name}{" "}
          <button onClick={() => handelRemoveItem(thisrt)}>X</button>
        </p>
      ))}
      {message}
      {cart.length === 3 ? (
        <p>Can you give me for Three</p>
      ) : (
        <p>Please buy minimum Three</p>
      )}
      <p>and operator</p>
      {cart.length === 2 && <h2>Double Item</h2>}
      <p>Or Operstor</p>
      {cart.length === 4 || <p>This is not 4 Item</p>}
    </div>
  );
};

export default Cart;
/**
 Conditional Rendaring
 1. us eelement in a variable and then use if-else to set value
 2. Ternary operating Condition
 3. && (And) Operator (if condition is true, i want to Display Something)
 4. || (Or) Operator(is condition is false, i want to display something)
 */
