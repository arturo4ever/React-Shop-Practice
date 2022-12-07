import React from "react";
import '../styles/ProductDetail.scss';
import ProductInfo from "../components/ProductInfo";

const ProductDetail = () => {
  return (
    <aside className="product-detail">
      <div className="product-detail-close">
        <img src="./icons/icon_close.png" alt="close" />
            <ProductInfo />
      </div>
    </aside>
  );
};

export default ProductDetail;
