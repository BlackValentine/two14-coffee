import React from 'react';
import Footer from '../GeneralComponents/Footer';
import Header from '../GeneralComponents/Header';
import SearchContent from '../GeneralComponents/SearchContent';

function SearchScreen(props) {
  return (
    <div>
      <Header />
      <SearchContent />
      <Footer />
    </div>
  );
}

export default SearchScreen;