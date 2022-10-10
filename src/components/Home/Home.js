import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

const Home = () => {
  const tshirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const handelAddToCart = (tshirt) => {
    const exist = cart.find((ts) => ts._id === tshirt._id);
    if (exist) {
      alert("Tshirt already Added");
    } else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
      //   alert("Addedd SUccessFully");
    }
  };

  const handelRemoveItem = (tshirt) => {
    const remaining = cart.filter((ts) => ts._id !== tshirt._id);
    setCart(remaining);
  };
  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tshirts.map((tshirt) => (
          <TShirt
            key={tshirt._id}
            tshirt={tshirt}
            handelAddToCart={handelAddToCart}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handelRemoveItem={handelRemoveItem}></Cart>
      </div>
    </div>
  );
};

export default Home;
