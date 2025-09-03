import './App.css';
import Signup from './Components/Signup';
import Account from './Components/Account';
import Login from './Components/Login.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage.jsx';
import Dashboard from './Components/Dashboard.jsx';
import Profile from './Components/Profile.jsx';
import About from './Components/About.jsx';
import Pricing from './Components/Pricing.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Account' element={<Account/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/About us' element={<About/>}/>
        <Route path='/Pricing' element={<Pricing/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
