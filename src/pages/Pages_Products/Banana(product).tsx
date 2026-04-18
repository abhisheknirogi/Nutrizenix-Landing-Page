import ProductPageLayout from '../../components/ProductPageLayout';
import React from 'react';

const Banana: React.FC = () => {
  return (
    <ProductPageLayout productId="banana">
    <div className="product-page">
      <h1>Banana Product</h1>
      <p>Details about Banana product will go here.</p>
    </div>
      </ProductPageLayout>
);
};

export default Banana;