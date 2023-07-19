import React from "react";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return <div>{cartItems.length === 0 ? <EmptyCart /> : ""}</div>;
};

export default Cart;
