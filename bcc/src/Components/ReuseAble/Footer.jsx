import Logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";

import FacebookPurple from "../../images/SocialMediaIcon/FacebookPurple.svg";
import InstagramPurple from "../../images/SocialMediaIcon/InstagramPurple.svg";
import TiktokPurple from "../../images/SocialMediaIcon/TiktokPurple.svg";
import TwitterPurple from "../../images/SocialMediaIcon/TwitterPurple.svg";
import WhatsappPurple from "../../images/SocialMediaIcon/WhatsappPurple.svg";
const Footer = () => {
  return (
    <>
      <div className=" h-[392px] w-screen  bg-purple-300">
        <div className=" flex space-x-[10px] absolute ">
          <img
            className=" mt-[80px] ml-[100px] w-[37px] h-[16px]"
            src={Logo}
          ></img>
          <h1 className="  mt-[75px]  text-white font-black text-base">
            Scofinity
          </h1>
        </div>

        {/* PT */}
        <div className="absolute mt-[90px]">
          <h2 className=" ml-[100px] pt-[35px] text-white font-semibold">
            PT. Infinity Scholarship Indonesia
          </h2>
          <p className=" ml-[100px] text-white pt-[2px] text-md">
            Fakultas Ilmu Komputer
          </p>
          <p className="ml-[100px] text-white w-[400px] text-md">
            Jl. Veteran, Ketawanggede, Kec. Lowokwaru, Kota Malang, Jawa Timur
            65113
          </p>
        </div>

        {/* icon */}
        <div className="absolute ml-[100px] pt-[250px] flex space-x-[18px]">
          <div className="bg-white rounded-full w-[43px] h-[43px]">
            <img className="px-[15px] py-[10px]" src={FacebookPurple}></img>
          </div>

          <div className="bg-white rounded-full w-[43px] h-[43px]">
            <img className="px-[10px] py-[10px]" src={InstagramPurple}></img>
          </div>

          <div className="bg-white rounded-full w-[43px] h-[43px]">
            <img className="px-[10px] py-[13px]" src={TwitterPurple}></img>
          </div>

          <div className="bg-white rounded-full w-[43px] h-[43px]">
            <img
              className="px-[12px] py-[10px] w-[px]"
              src={TiktokPurple}
            ></img>
          </div>

          <img src={WhatsappPurple}></img>
        </div>

        {/* Service */}
        <div className="absolute ml-[550px] space-y-[18px] text-white  mt-[80px]">
          <h1 className="font-bold">Service</h1>
          <p>Bootcamp</p>
          <p className="w-[150px]">Workshop Berbasis praktik</p>
          <p>Mentoring 1-on-1</p>
        </div>

        {/* Pages */}
        <div className="absolute ml-[850px] space-y-[20px]  text-white  mt-[60px]">
          <h1 className="pt-[20px] font-bold">Pages</h1>
          <p>Home</p>
          <p>About US</p>
          <p>Scholarship</p>
          <p className="w-[150px]">Bootcamp & Program</p>
          <p>Help</p>
        </div>
        {/* Subscribe */}
        <div className="absolute ml-[1050px] mt-[80px]">
          <h1 className="text-white font-bold text-xl">Subscribe Email</h1>
          <p className="text-white pt-[16px] w-[400px] pr-[30px] ">
            Get the best new products in your inbox, every day. Get the latest
            content first
          </p>

          <div className="pb-[8px] pt-[32px]">
            <input
              className="px-[32px] py-[16px] w-[360px] h-[45px] border-2 rounded-full bg-purple-100 "
              type="text"
              placeholder="Your Full Name"
            ></input>
          </div>

          <div className="">
            <input
              className="px-[32px] py-[16px] w-[360px] h-[45px] border-2 rounded-full  bg-purple-100 "
              type="text"
              placeholder="Your Email"
            ></input>
          </div>

          <div className="mt-[8px]">
            <button
              className=" px-[64px] py-[7px] w-[360px] h-[45px]  text-center rounded-full bg-warning text-white font-semibold "
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
