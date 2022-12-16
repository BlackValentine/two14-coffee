import React from 'react';
import RegisterForm from '../AccountComponents/RegisterForm';
import Footer from '../GeneralComponents/Footer';
import Header from '../GeneralComponents/Header';

function RegisterScreen(props) {
  return (
    <div>
      <Header />
      <RegisterForm />
      <Footer />
    </div>
  );
}

export default RegisterScreen;