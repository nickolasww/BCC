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
import FilterBootcamp from "./Pages/FilterBootcamp";
import Calender from "./Pages/Calender";


const Routing = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  // scholarship
  {
    path: "/Scholarship",
    element: <Scholarship/>,
  },
  {
    path: "/Scholarship/BeasiswaLPDP",
    element: <BeasiswaLPDP/>,
  },
// boothcamp
  {
    path: "/ProgramBoothcamp",
    element: <ProgramBoothcamp/>,
  },
  {
    path: "/ProgramBoothcamp/StudyAbroad",
    element: <StudyAbroad/>,
  },
  {
    path: "/ProgramBoothcamp/ScholarshipPortofolio",
    element: <ScholarshipPortofolio/>,
  },
  {
    path: "/ProgramBoothcamp/ProgramMentoring",
    element: <ProgramMentoring/>,
  },
  {
    path: "/ProgramBoothcamp/FilterBootcamp",
    element: <FilterBootcamp/>,
  },


  {
    path: "/Calender",
    element: <Calender/>,
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
    path: "/Otp",
    element: <Otp/>,
  },

  {
    path: "/Modal",
    element: <Modal/>,
  },

  {
    path: "/DaftarMitra",
    element: <DaftarMitra/>,
  },
]);

const Router = () => {
  return <RouterProvider router={Routing} />;
};

export default Router;
//   return (
//     <Router>
//         <Route path='/AboutUs' element={<AboutUs/>} />


//         <Route path='/profile' element={<Profile/>}/>
//         <Route path='/Notification' element={<Notification/>}/>
//         <Route path='/Aktivitas' element={<Aktivitas/>}/>


//       </Routes>
//     </Router>
//   )
// }