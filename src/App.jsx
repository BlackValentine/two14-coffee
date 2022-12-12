import React from 'react';
import "./App.scss";
import HomeScreen from './components/Screens/HomeScreen';
import { Routes, Route } from "react-router-dom"
import WholeSaleScreen from './components/Screens/WholeSaleScreen';

function App(props) {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/wholesale" element={<WholeSaleScreen />}/>
    </Routes>
  );
}

export default App;