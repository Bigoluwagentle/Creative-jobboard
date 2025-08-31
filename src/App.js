import './App.css';
import Signup from './Components/Signup';
import Account from './Components/Account';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Account/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
      
      
  );
}

export default App;
