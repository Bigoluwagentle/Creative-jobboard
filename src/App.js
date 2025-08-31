import './App.css';
import Signup from './Components/Signup';
import Account from './Components/Account';
import Login from './Components/Login.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage.jsx';
import Dashboard from './Components/Dashboard.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Account' element={<Account/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
      
      
  );
}

export default App;
