import './App.css';
import Signup from './Components/Signup';
import Account from './Components/Account';
import Login from './Components/Login.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/hi' element={<Account/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
      
      
  );
}

export default App;
