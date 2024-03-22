import Logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="fixed z-50 top-0 font-Poppins w-[1540px] px-42 py-7  bg-white">
        <div className=" flex pl-20 space-x-1 text-center ">
          <img className="w-12 h-4 mt-4" src={Logo}></img>
          <Link to="/">
            <h1 className=" font-black h-4 mt-3 text-base">Scofinity</h1>
          </Link>
          <ul className=" mt-3 flex pl-60 space-x-7 cursor-pointer">
            <Link to="/">
              <li className="">Home</li>
            </Link>
            <li className="">About Us</li>
            <Link to="/Scholarship">
              <li>Scholarship</li>
            </Link>
            <Link to="/ProgramBoothcamp">
              <li>Bootcamp & Program</li>
            </Link>
            <details className="dropdown ">
              <summary className=" bg-transparent">Help</summary>
              <ul className=" p-2 menu dropdown-content   rounded-box w-52 grid grid-cols-1 divide-y">
                <li className=" btn bg-white rounded-b-[0px]">Contact Us</li>
                <li className=" btn bg-white rounded-[0px]">Feedback Form</li>
                <li className=" btn bg-white rounded-[0px] rounded-b-[5px]">
                  <Link to="/DaftarMitra">Daftar Mitra</Link>
                </li>
              </ul>
            </details>
          </ul>
          <div className=" flex pl-56 space-x-2 cursor-pointer">
            <Link to="/SignUp">
              <h1 className=" border-2 border-purple-300 rounded-full px-7 py-2 text-purple-300 font-bold hover:bg-purple-100 hover:border-purple-100">
                Sign Up
              </h1>
            </Link>
            <Link to="/Login">
              <h1 className="border-2 bg-purple-300 rounded-full px-7 py-2 text-white font-bold hover:bg-purple-100 hover:border-purple-100 hover:text-purple-200">
                Log in
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
