import React from 'react';
import ApparelDetail from '../GeneralComponents/ApparelDetail';
import Footer from '../GeneralComponents/Footer';
import Header from '../GeneralComponents/Header';

function ApparelDetailScreen(props) {
  return (
    <div>
      <Header />
      <ApparelDetail />
      <Footer />
    </div>
  );
}

export default ApparelDetailScreen;