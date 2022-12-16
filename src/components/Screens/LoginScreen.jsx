import React from 'react';
import LoginForm from '../AccountComponents/LoginForm';
import Footer from '../GeneralComponents/Footer';
import Header from '../GeneralComponents/Header';

function LogInScreen(props) {
  return (
    <div>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default LogInScreen;