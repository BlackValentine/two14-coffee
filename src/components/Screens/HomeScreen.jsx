import React from 'react';
import Footer from '../GeneralComponents/Footer';
import Header from '../GeneralComponents/Header';
import Intro from '../HomeComponents/Intro';
import Story from '../HomeComponents/Story';

function HomeScreen(props) {
  return (
    <div>
      <Header />
      <Intro />
      <Story />
      <Footer />
    </div>
  );
}

export default HomeScreen;