import React from 'react';
import CheckoutPopup from '../CheckoutComponents/CheckoutPopup';
import Footer from '../GeneralComponents/Footer';
import Header from '../GeneralComponents/Header';
import Coffee from '../HomeComponents/Coffee';
import Intro from '../HomeComponents/Intro';
import Story from '../HomeComponents/Story';

function HomeScreen(props) {
  return (
    <div>
      <CheckoutPopup />
      <Header />
      <Intro />
      <Coffee />
      <Story />
      <Footer />
    </div>
  );
}

export default HomeScreen;