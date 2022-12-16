import React from 'react';
import "./App.scss";
import HomeScreen from './components/Screens/HomeScreen';
import { Routes, Route } from "react-router-dom"
import WholeSaleScreen from './components/Screens/WholeSaleScreen';
import CoffeeCollectionScreen from './components/Screens/CoffeeCollectionScreen';
import CollectionScreen from './components/Screens/CollectionScreen';
import LogInScreen from './components/Screens/LogInScreen';
import RegisterScreen from './components/Screens/RegisterScreen';
import ResetPasswordScreen from './components/Screens/ResetPasswordScreen';

function App(props) {
  return (
		<Routes>
			<Route path='/' element={<HomeScreen />} />
			<Route path='/wholesale' element={<WholeSaleScreen />} />
			<Route path='/collections' element={<CollectionScreen />} />
			<Route
				path='/collections/coffee-blend'
				element={<CoffeeCollectionScreen />}
			/>
			<Route path='/account/login' element={<LogInScreen />} />
			<Route path='/account/register' element={<RegisterScreen />} />
			<Route path='/account/reset' element={<ResetPasswordScreen />} />
		</Routes>
	);
}

export default App;