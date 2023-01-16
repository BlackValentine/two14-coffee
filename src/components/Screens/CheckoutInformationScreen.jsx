import React from 'react';
import './Screen.scss';
import CheckoutCart from '../CheckoutComponents/CheckoutCart';
import CheckoutInformation from '../CheckoutComponents/CheckoutInformation';
import Footer from '../GeneralComponents/Footer';
import Header from '../GeneralComponents/Header';

function CheckoutInformationScreen(props) {
  return (
    <div>
      <Header />
      <div className="bg-primary">
        <div className="container checkout-info__container">
          <CheckoutInformation />
          <CheckoutCart />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CheckoutInformationScreen;
