import ProfileIcon from "../images/LoginIcon/ProfileIcon.svg";
import IconEmail from "../images/LoginIcon/IconEmail.svg";
import BolpoinIcon from "../images/LoginIcon/BolpoinIcon.svg";

import NavBar from "./ReuseAble/NavBar";
import Footer from "./ReuseAble/Footer";
import NavBarAfterLogin from "./ReuseAble/NavbarAfterLogin";
import { Link } from "react-router-dom";


const FirstProfile = () => {
  return (
    <>
      {/* NavBar */}
      <NavBarAfterLogin />

      <div className=" font-Poppins ml-[100px] mt-[200px] w-[250px] h-[390px] px-[32px] py-[64px] justify-items-center border-2 border-gray-500 rounded-3xl shadow-sm bg-purple-100">
        {/* Navigation profile */}
        <div className="">
          <h1 className="font-bold text-[24px] -mt-[20px]">Navigasi Profile</h1>
          <ul className="space-y-[16px]  text-[18px] pt-[40px] font-bold">
            <li>Profile Saya</li>
            <button><Link to="./calender"><li>Kalender Beasiswa</li></Link></button>
            <button><Link to ="/notification"> <li>Notifikasi</li></Link></button>
            <button><Link to="/aktivitas"><li>Aktivitas Saya</li></Link></button>
            <li>Riwayat Transaksi</li>
          </ul>
        </div>
        {/*  */}
        <div className="pl-[300px] -mt-[300px] absolute">
          <img src={ProfileIcon}></img>
        </div>
        {/* name email */}
        <div className="absolute pl-[500px] -mt-[300px]">
          <h1 className="font-bold text-[36px]">Nickolas Quinn</h1>
          <div className="flex space-x-[10px]">
            <img src={IconEmail}></img>
            <p className="font-bold text-[16px]">Nickolaswewe@gmail.com</p>
          </div>
        </div>
        {/* edit */}
        <div className=" flex pl-[335px] -mt-[130px] absolute">
          <button type="submit">
            <img src={BolpoinIcon}></img>
          </button>
          <button className="font-bold text-purple-300" type="submit">
            Edit
          </button>
        </div>

        {/* Ubah pass Email */}
        <div className="flex absolute pl-[500px] -mt-[200px] space-x-[20px]">
          <div className=" border-2 bg-purple-100 rounded-full px-7 py-2 text-purple-300 font-bold">
            <h1>Ubah Email</h1>
          </div>
          <div className=" border-2 bg-purple-100 rounded-full px-7 py-2 text-purple-300 font-bold">
            <h1>Ubah Password</h1>
          </div>
        </div>

        {/* Nama Lengkap */}
        <div className="">
          <h1 className="pl-[300px] w-[500px] pt-[px] font-bold text-[20px]">
            Nama Lengkap
          </h1>
          <div className="pt-[24px]  pl-[290px] ">
            <input
              className="rounded-full w-[900px] h-[50px] p-[16px] border-[2px] border-gray-300 bg-transparent"
              type="text"
              placeholder="Nama Lengkap"
            ></input>
          </div>
        </div>

        {/* Tanggal lahir  */}
        <div className="">
          <h1 className="pl-[300px] w-[500px] pt-[32px] font-bold text-[20px]">
            Tanggal Lahir
          </h1>
          <div className="pt-[24px] pl-[300px] text-center">
            <input
              className="rounded-full w-[380px] h-[50px] p-[16px] border-2 bg-tranparent border-gray-300 broder-2"
              type="text"
              placeholder="Tanggal lahir "
            ></input>
          </div>
        </div>

        <div className="">
          <h1 className="pl-[700px]  w-[500px] -mt-[110px] font-bold text-[20px]">
            Gender
          </h1>
          <div className="pt-[24px] pl-[700px] absolute ">
            <input
              className="rounded-full w-[500px] h-[50px] p-[16px] border-2 bg-transparent border-gray-300 broder-2"
              type="text"
              placeholder="Gender"
            ></input>
          </div>
        </div>

        {/*  No hp domisili*/}
        <div className="">
          <h1 className="pl-[300px] w-[500px] mt-[120px] font-bold text-[20px]">
            No. HP
          </h1>
          <div className="pt-[px] pl-[300px]  text-center">
            <input
              className="rounded-full w-[380px] h-[50px] p-[16px] border-2 bg-tranparent border-gray-300 broder-2"
              type="text"
              placeholder="No HP "
            ></input>
          </div>
        </div>

        <div className="">
          <h1 className="pl-[700px] w-[500px] -mt-[100px] font-bold text-[20px]">
            Domisili
          </h1>
          <div className="pt-[24px] pl-[700px] absolute ">
            <input
              className="rounded-full w-[500px] h-[50px] p-[16px] border-2 bg-transparent border-gray-300 broder-2"
              type="text"
              placeholder="Domisili"
            ></input>
          </div>

          <div className="pl-[300px] pt-[150px] w-[1000px]">
            <label>
              <input Type="CheckBox" />
              Saya bersedia menerima update informasi dan Schofinity
            </label>
          </div>
        </div>

        <div className=" w-[500px] pt-[32px] pl-[300px]">
          <div className=" border-2 bg-purple-300 rounded-full px-10 py-[10px] text-purple-100 font-bold ">
            <button typr="submit">
              <h1>Daftar Mentor</h1>
            </button>
          </div>
        </div>
      </div>

      <div className="h-screen w-screen"></div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default FirstProfile;
