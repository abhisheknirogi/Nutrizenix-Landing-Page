import ProductPageLayout from '../../components/ProductPageLayout';
import React from 'react';

const Citron: React.FC = () => {
  return (
    <ProductPageLayout productId="citron">
    <div className="product-page">
      <h1>Citron Product</h1>
      <p>Details about Citron product will go here.</p>
    </div>
      </ProductPageLayout>
);
};

export default Citron;