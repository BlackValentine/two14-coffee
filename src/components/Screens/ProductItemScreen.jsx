import React from 'react';
import Footer from '../GeneralComponents/Footer';
import Header from '../GeneralComponents/Header';
import ProductDetail from '../GeneralComponents/ProductDetail';

function ProductItemScreen(props) {
  return (
    <div>
      <Header />
      <ProductDetail />
      <Footer />
    </div>
  );
}

export default ProductItemScreen;