import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import SendMoney from './pages/SendMoney'
import Landing from './pages/Landing';
import User from './pages/User';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/landing' element={<Landing/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/send' element={<SendMoney/>}/>
          <Route path='/user' element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
