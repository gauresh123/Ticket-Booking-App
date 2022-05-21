
import './App.css';
import Checkout from './Checkout';
import Home from './Home';
import {  Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Tickets from './Tickets';
import Movies from './Movies';
import Booked from './Booked';
import React from 'react'



function App() {
  return (
    <div className="App">
      <Provider store={store}>
          
     <Routes>
       <Route  path="/" element={<Home/>}/>
       <Route path="/ticket" element={<Tickets/>}/>
       <Route path="/movies" element={<Movies/>}/>
     </Routes>
     <Routes>
     <Route  path="/check" element={<Checkout/>}/>
     <Route path='/booked' element={<Booked/>}/>
     </Routes>
     </Provider>
    </div>
  );
}

export default App;
