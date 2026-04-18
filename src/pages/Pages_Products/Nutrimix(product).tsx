import ProductPageLayout from '../../components/ProductPageLayout';
import React from 'react';

const Nutrimix: React.FC = () => {
  return (
    <ProductPageLayout productId="nutrimix">
    <div className="product-page">
      <h1>Nutrimix Product</h1>
      <p>Details about Nutrimix product will go here.</p>
    </div>
      </ProductPageLayout>
);
};

export default Nutrimix;