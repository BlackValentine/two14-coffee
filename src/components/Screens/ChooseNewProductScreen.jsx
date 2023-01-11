import React from 'react';
import Footer from '../GeneralComponents/Footer';
import Header from '../GeneralComponents/Header';
import ChooseNewProduct from '../NewProductComponents/ChooseNewProduct';

function ChooseNewProductScreen(props) {
  return (
    <div>
      <Header />
      <ChooseNewProduct />
      <Footer />
    </div>
  );
}

export default ChooseNewProductScreen;