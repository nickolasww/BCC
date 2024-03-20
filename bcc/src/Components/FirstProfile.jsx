import {Link} from "react-router-dom"
import Logo from "../images/Logo.svg"
import ProfileIcon from "../images/LoginIcon/ProfileIcon.svg"
import IconEmail from "../images/LoginIcon/IconEmail.svg"
import BolpoinIcon from "../images/LoginIcon/BolpoinIcon.svg"

import FacebookPurple from "../images/SocialMediaIcon/FacebookPurple.svg"
import InstagramPurple from "../images/SocialMediaIcon/InstagramPurple.svg"
import TiktokPurple from "../images/SocialMediaIcon/TiktokPurple.svg"
import TwitterPurple from "../images/SocialMediaIcon/TwitterPurple.svg"
import WhatsappPurple from "../images/SocialMediaIcon/WhatsappPurple.svg"
const FirstProfile= () => { 
    return(
        <>
{/* NavBar */}
<div className=" fixed z-50 top-0 font-Poppins w-[1540px] px-42 py-7  bg-white">
            <div className=" flex pl-20 space-x-1 text-center ">
                <img className="w-12 h-4 mt-4"src={Logo}></img>
                <Link to="/"><h1 className=" font-black h-4 mt-3 text-base">Scofinity</h1></Link>
                <ul className=" mt-3 flex pl-60 space-x-7 cursor-pointer">
                    <Link to="/"><li className="">Home</li></Link>
                    <Link to="/AboutUs"><li>About Us</li></Link>
                    <Link to="/Scholarship"><li>Scholarship</li></Link>
                    <Link to="/ProgramBoothcamp"><li>Bootcamp & Program</li></Link>
                    <Link to="/Help"><li>Help</li></Link>
                </ul>
            <div className=" flex pl-56 space-x-2 cursor-pointer">
                <Link to="/SignUp"><h1 className=" border-2 border-purple-300 rounded-full px-7 py-2 text-purple-300 font-bold">Sign Up</h1></Link>
                <Link to="/Login"><h1 className="border-2 bg-purple-300 rounded-full px-7 py-2 text-white font-bold">Log in</h1></Link>
            </div>
            </div>
</div>



<div className=" font-Poppins ml-[100px] mt-[200px] w-[250px] h-[390px] px-[32px] py-[64px] justify-items-center border-2 border-gray-500 rounded-3xl shadow-sm bg-purple-100">
{/* Navigation profile */}
    <div className="absolute">
    <h1 className="font-bold text-[24px] -mt-[20px]">Navigasi Profile</h1>
    <ul className="space-y-[16px]  text-[18px] pt-[40px] font-bold">
        <li>Profile Saya</li>
        <li>Kalender Beasiswa</li>
        <li>Notifikasi</li>
        <li>Aktivitas Saya</li>
        <li>Riwayat Transaksi</li>
    </ul>
    </div>
{/*  */}
    <div className="pl-[300px] -mt-[60px] absolute">
        <img src={ProfileIcon}></img>
    </div>
{/* name email */}
    <div className="absolute pl-[500px] -mt-[50px]">
        <h1 className="font-bold text-[36px]">Sabrina Kamila</h1>
        <div className="flex space-x-[10px]">
        <img src={IconEmail}></img>
        <p className="font-bold text-[16px]">sabrinakml@gmail.com</p>
        </div>
    </div>
{/* edit */}
<div className=" flex pl-[335px] mt-[100px] absolute">
    <button type="submit"><img src={BolpoinIcon}></img></button>
    <button className="font-bold text-purple-300" type="submit">Edit</button>
</div>

{/* Ubah pass Email */}
<div className="flex absolute pl-[500px] mt-[50px] space-x-[20px]">
    <div className=" border-2 bg-purple-100 rounded-full px-7 py-2 text-purple-300 font-bold">
        <h1>Ubah Email</h1>
    </div>
    <div className=" border-2 bg-purple-100 rounded-full px-7 py-2 text-purple-300 font-bold">
        <h1>Ubah Password</h1>
    </div>
</div>

{/* Nama Lengkap */}
<div className="absolute">
    <h1 className="pl-[300px] pt-[170px] font-bold text-[20px]">Nama Lengkap</h1>
        <div className="pt-[24px]  pl-[290px] " >
            <input className="rounded-full w-[900px] h-[50px] p-[16px] border-[2px] border-gray-300 bg-transparent" type="text" placeholder="Nama Lengkap" ></input>
        </div>
</div>

{/* Tanggal lahir  */}
<div className="absolute">
    <h1 className="pl-[300px] pt-[325px] font-bold text-[20px]">Tanggal Lahir</h1>
        <div className="pt-[24px] pl-[300px] absolute text-center" >
            <input className="rounded-full w-[380px] h-[50px] p-[16px] border-2 bg-tranparent border-gray-300 broder-2" type="text" placeholder="Tanggal lahir "></input>
        </div>
</div>

<div className="absolute">
<h1 className="pl-[700px] pt-[325px] font-bold text-[20px]">Gender</h1>
        <div className="pt-[24px] pl-[700px] absolute " >
            <input className="rounded-full w-[500px] h-[50px] p-[16px] border-2 bg-transparent border-gray-300 broder-2" type="text" placeholder="Gender"></input>
        </div>
</div>

{/*  No hp domisili*/}
<div className="absolute">
    <h1 className="pl-[300px] pt-[480px] font-bold text-[20px]">No. HP</h1>
        <div className="pt-[24px] pl-[300px] absolute text-center" >
            <input className="rounded-full w-[380px] h-[50px] p-[16px] border-2 bg-tranparent border-gray-300 broder-2" type="text" placeholder="No HP "></input>
        </div>
</div>

<div className="absolute">
<h1 className="pl-[700px] pt-[480px] font-bold text-[20px]">Domisili</h1>
        <div className="pt-[24px] pl-[700px] absolute " >
            <input className="rounded-full w-[500px] h-[50px] p-[16px] border-2 bg-transparent border-gray-300 broder-2" type="text" placeholder="Domisili"></input>
        </div>

<div className="pl-[300px] pt-[150px]">
        <label><input Type="CheckBox"/>Saya bersedia menerima update informasi dan Schofinity</label>
    </div>
</div>

<div className="absolute pt-[700px] pl-[300px]">
    <div className=" border-2 bg-purple-300 rounded-full px-10 py-[10px] text-purple-100 font-bold ">
        <button typr="submit"><h1>Daftar Mentor</h1></button>
    </div>
</div>
</div>

<div className="h-screen w-screen"></div>

{/* Footer */}
<div>
<div className=" h-[392px] w-screen  bg-purple-300">
        <div className=" flex space-x-[10px] absolute ">
            <img className=" mt-[80px] ml-[100px] w-[37px] h-[16px]"src={Logo}></img>
            <h1 className="  mt-[75px]  text-white font-black text-base">Scofinity</h1>
        </div>

        {/* PT */}
        <div className="absolute mt-[90px]">
            <h2 className=" ml-[100px] pt-[35px] text-white font-semibold">PT. Infinity Scholarship Indonesia</h2>
            <p className=" ml-[100px] text-white pt-[2px] text-md">Fakultas Ilmu Komputer</p>
            <p className="ml-[100px] text-white w-[400px] text-md">Jl. Veteran, Ketawanggede, Kec. Lowokwaru, Kota Malang, Jawa Timur 65113</p>
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
                <img className="px-[12px] py-[10px] w-[px]" src={TiktokPurple}></img>
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
            <p className="text-white pt-[16px] w-[400px] pr-[30px] ">Get the best new products in your inbox, every day. Get the latest content first</p>

            <div className="pb-[8px] pt-[32px]">
                <input className="px-[32px] py-[16px] w-[360px] h-[45px] border-2 rounded-full bg-purple-100 " type="text" placeholder="Your Full Name"></input>
            </div>

            <div className="">
            <input className="px-[32px] py-[16px] w-[360px] h-[45px] border-2 rounded-full  bg-purple-100 " type="text" placeholder="Your Email"></input>
            </div>

            <div className="mt-[8px]">
            <button className=" px-[64px] py-[7px] w-[360px] h-[45px]  text-center rounded-full bg-warning text-white font-semibold " type="submit">Subscribe</button>
            </div>

        </div>
    </div>
</div>
        </>
    )
}

export default FirstProfile