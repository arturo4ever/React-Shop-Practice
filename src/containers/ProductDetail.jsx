import React from "react";
import '@styles/ProductDetail.scss';
import ProductInfo from "@components/ProductInfo";
import closeIcon from '@icons/icon_close.png';

const ProductDetail = () => {
  return (
    <aside className="product-detail">
      <div className="product-detail-close">
        <img src={closeIcon} alt="close" />
            <ProductInfo />
      </div>
    </aside>
  );
};

export default ProductDetail;
