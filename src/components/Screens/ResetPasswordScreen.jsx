import React from 'react';
import ResetForm from '../AccountComponents/ResetForm';
import Footer from '../GeneralComponents/Footer';
import Header from '../GeneralComponents/Header';

function ResetPasswordScreen(props) {
  return (
    <div>
      <Header />
      <ResetForm />
      <Footer />
    </div>
  );
}

export default ResetPasswordScreen;