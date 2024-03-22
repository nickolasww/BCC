import FotoHeader from "../../images/FotoHeader.svg";
import Phone from "../../images/Phone.svg";
import Tanoto from "../../images/Tanoto.svg";
import LPDP from "../../images/LPDP.svg";
import Unggulan from "../../images/Unggulan.svg";
import ApplyCard from "../../images/ApplyCard.svg";


import Praktik from "../../images/Praktik.svg";
import Mentoring from "../../images/Mentoring.svg";
import Special from "../../images/Special.svg";


import { Link } from "react-router-dom";
import Footer from "../ReuseAble/Footer";
import NavbarAfterLogin from "../ReuseAble/NavbarAfterLogin";
import Calender from "../../Pages/Calender";
import Scholarship from "../../Pages/Scholarship";
const ScholarshipAfterLogin = () => {
  return (
    <>
    <NavbarAfterLogin/>
    <Scholarship/>
    {/* Footer */}
    <Footer />
    </>
  );
};

export default ScholarshipAfterLogin;
