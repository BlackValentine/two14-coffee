import React, { useEffect } from 'react';
import './App.scss';
import HomeScreen from './components/Screens/HomeScreen';
import { Routes, Route } from 'react-router-dom';
import WholeSaleScreen from './components/Screens/WholeSaleScreen';
import CoffeeCollectionScreen from './components/Screens/CoffeeCollectionScreen';
import CollectionScreen from './components/Screens/CollectionScreen';
import LogInScreen from './components/Screens/LogInScreen';
import RegisterScreen from './components/Screens/RegisterScreen';
import ResetPasswordScreen from './components/Screens/ResetPasswordScreen';
import ProductItemScreen from './components/Screens/ProductItemScreen';
import NewCoffee from './components/NewProductComponents/NewCoffee';
import ChooseNewProductScreen from './components/Screens/ChooseNewProductScreen';
import ApparelDetailScreen from './components/Screens/ApparelDetailScreen';
import NewApparel from './components/NewProductComponents/New Apparel';
import ApparelCollectionScreen from './components/Screens/ApparelCollectionScreen';
import CheckoutPopup from './components/CheckoutComponents/CheckoutPopup';
import { useDispatch } from 'react-redux';
import { getAllApparel, getAllCoffee } from './store/api';
import CheckoutInformationScreen from './components/Screens/CheckoutInformationScreen';
import MediaScreen from './components/Screens/MediaScreen';
import PartnersScreen from './components/Screens/PartnersScreen';
import SearchScreen from './components/Screens/SearchScreen';

function App(props) {
	const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCoffee())
    dispatch(getAllApparel())
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/wholesale" element={<WholeSaleScreen />} />
        <Route path="/collections" element={<CollectionScreen />} />
        <Route path="/media" element={<MediaScreen />} />
        <Route path="/partners" element={<PartnersScreen />} />
        <Route
          path="/collections/coffee-blend"
          element={<CoffeeCollectionScreen />}
        />
        <Route
          path="/collections/apparel-blend"
          element={<ApparelCollectionScreen />}
        />
        <Route path="/account/login" element={<LogInScreen />} />
        <Route path="/account/register" element={<RegisterScreen />} />
        <Route path="/account/reset" element={<ResetPasswordScreen />} />
        <Route path="/collections/coffee/:id" element={<ProductItemScreen />} />
        <Route
          path="/collections/apparel/:id"
          element={<ApparelDetailScreen />}
        />
        <Route path="/new-product/coffee" element={<NewCoffee />} />
        <Route path="/new-product/apparel" element={<NewApparel />} />
        <Route path="/new-product" element={<ChooseNewProductScreen />} />
        <Route path="/checkout" element={<CheckoutInformationScreen />} />
        <Route path="/search" element={<SearchScreen />} />
      </Routes>

      <CheckoutPopup />
    </div>
  );
}

export default App;
