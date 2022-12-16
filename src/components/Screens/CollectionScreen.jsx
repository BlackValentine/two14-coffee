import React from 'react';
import Header from '../GeneralComponents/Header';
import Footer from '../GeneralComponents/Footer';
import CollectionContent from '../CollectionComponents/CollectionContent';

function CollectionScreen(props) {
  return (
    <div>
      <Header />
      <CollectionContent />
      <Footer />
    </div>
  );
}

export default CollectionScreen;