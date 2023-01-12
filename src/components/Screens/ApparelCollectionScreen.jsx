import React from 'react';
import ApparelCollectionContent from '../CollectionComponents/ApparelCollectionContent';
import Footer from '../GeneralComponents/Footer';
import Header from '../GeneralComponents/Header';

function ApparelCollectionScreen(props) {
  return (
    <div>
      <Header />
      <ApparelCollectionContent />
      <Footer />
    </div>
  );
}

export default ApparelCollectionScreen;