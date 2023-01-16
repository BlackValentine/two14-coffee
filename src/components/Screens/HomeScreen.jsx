import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllApparel, getAllCoffee } from '../../store/api';
import Footer from '../GeneralComponents/Footer';
import Header from '../GeneralComponents/Header';
import Coffee from '../HomeComponents/Coffee';
import Intro from '../HomeComponents/Intro';
import Story from '../HomeComponents/Story';

function HomeScreen(props) {
  return (
    <div>
      <Header />
      <Intro />
      <Coffee/>
      <Story />
      <Footer />
    </div>
  );
}

export default HomeScreen;
