import React from 'react';
import Footer from '../GeneralComponents/Footer';
import Header from '../GeneralComponents/Header';
import WholeSaleContent from '../WholeSaleComponents/WholeSaleContent';

function WholeSaleScreen(props) {
  return (
    <div>
      <Header />
      <WholeSaleContent />
      <Footer />
    </div>
  );
}

export default WholeSaleScreen;