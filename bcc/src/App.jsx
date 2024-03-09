import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Scholarship from './Pages/Scholarship';
import ProgramBoothcamp from './Pages/ProgramBoothcamp';
import Help from './Pages/Help';
import Login from './Pages/Login';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/Scholarship' element={<Scholarship/>}/>
        <Route path='/ProgramBoothcamp' element={<ProgramBoothcamp/>}/>
        <Route path='/Help' element={<Help/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </Router>
  )
}