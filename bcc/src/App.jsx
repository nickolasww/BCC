import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Scholarship from './Pages/Scholarship';
import ProgramBoothcamp from './Pages/ProgramBoothcamp';
import Help from './Pages/Help';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Otp from './Pages/Otp';
import Profile from "../src/Pages/Profile"
import Notification from './Pages/Profile/Notification';
import BeasiswaLPDP from './Pages/BeasiswaLPDP';
import StudyAbroad from './Pages/StudyAbroad';
import ScholarshipPortofolio from './Pages/ScholarshipPortofolio';
import ProgramMentoring from "./Pages/ProgramMentoring";
import Aktivitas from './Pages/Aktivitas';
import DaftarMitra from './Pages/DaftarMitra';
import Modal from './Pages/Modal';

const Routing = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },

  {
    path: "/Scholarship",
    element: <Scholarship/>,
  },
  {
    path: "/Scholarship/BeasiswaLPDP",
    element: <BeasiswaLPDP/>,
  },



  {
    path: "/ProgramBoothcamp",
    element: <ProgramBoothcamp/>,
  },
  {
    path: "/ProgramBoothcamp/StudyAbroad",
    element: <StudyAbroad/>,
  },



  {
    path: "/Login",
    element: <Login/>,
  },

  {
    path: "/SignUp",
    element: <SignUp/>,
  },

  {
    path: "/Modal",
    element: <Modal/>,
  },

]);

const Router = () => {
  return <RouterProvider router={Routing} />;
};

export default Router;
//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<Home/>} />
//         <Route path='/AboutUs' element={<AboutUs/>} />
//         <Route path='/Scholarship' element={<Scholarship/>}/>
//         <Route path='/ProgramBoothcamp' element={<ProgramBoothcamp/>}/>
//         <Route path='/Help' element={<Help/>}/>
//         <Route path='/SignUp' element={<SignUp/>}/>
//         <Route path='/Login' element={<Login/>}/>
//         <Route path='/Otp' element={<Otp/>}/>


//         <Route path='/profile' element={<Profile/>}/>
//         <Route path='/Notification' element={<Notification/>}/>
//         <Route path='/StudyAbroad' element={<StudyAbroad/>} />
//         <Route path='/BeasiswaLPDP' element={<BeasiswaLPDP/>}/>
//         <Route path='/ScholarshipPortofolio' element={<ScholarshipPortofolio/>}/>
//         <Route path='/ProgramMentoring' element={<ProgramMentoring/>}/>
//         <Route path='/Aktivitas' element={<Aktivitas/>}/>
//         <Route path='/DaftarMitra' element={<DaftarMitra/>}/>

//       </Routes>
//     </Router>
//   )
// }