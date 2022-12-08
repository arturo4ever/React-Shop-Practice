import React from "react";
import OrderItem from "@components/OrderItem";
import '@styles/Orders.scss';

const Orders = () => {
  return (
    <div className="my-order">
      <div className="my-order-container">
        <h1 className="title">My orders</h1>
        <div className="my-order-content">
          <OrderItem />
        </div>
      </div>
    </div>
  );
};

export default Orders;
