import React, { useContext } from "react";
import "@styles/MyOrder.scss";
import AppContext from '@context/AppContext';
import closeIcon from '@icons/icon_close.png';


const OrderItem = ( { product } ) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = product => {
    removeFromCart(product);
  }
  return (
    <div className="shopping-cart">
      <figure>
        <img
          src={product.images[0]}
          alt={product.title}
        />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img id="delete" src={closeIcon} onClick={() => handleRemove(product)} alt="close" />
    </div>
  );
};

export default OrderItem;
