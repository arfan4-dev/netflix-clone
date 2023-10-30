import React from 'react';
  import './App.css';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './screens/Login';
import Register from './screens/Register'
import ProfileScreen from './screens/ProfileScreen';
import PaymentScreen from './screens/PayementScreen';
function App() {
  const user=null;

  return (
    <div className="app">
      <BrowserRouter>
       <Routes>
        <Route path='/' exact element={<Login/>} />
        <Route path='/register' element={<Register/>} />
       <Route exact path="/screen" element={<HomeScreen />}/>
    <Route path='/profileScreen' element={<ProfileScreen/>}/>
    {/* <Route path='/paymentScreen' element={<PaymentScreen/>}/> */}
        </Routes>
      
       
      </BrowserRouter>
    </div>
  );
}

export default App;
