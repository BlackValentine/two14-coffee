import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllApparel, getAllCoffee } from '../../store/api';
import CheckoutPopup from '../CheckoutComponents/CheckoutPopup';
import Footer from '../GeneralComponents/Footer';
import Header from '../GeneralComponents/Header';
import Coffee from '../HomeComponents/Coffee';
import Intro from '../HomeComponents/Intro';
import Story from '../HomeComponents/Story';

function HomeScreen(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCoffee())
    dispatch(getAllApparel())
  }, [])
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
