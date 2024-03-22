import {Link} from "react-router-dom"
import Logo from "../images/Logo.svg"
import Toa from "../images/NotifIcon/Toa.svg"
import Alert from "../images/NotifIcon/Alert.svg"
import Ring from "../images/NotifIcon/Ring.svg"

import FacebookPurple from "../images/SocialMediaIcon/FacebookPurple.svg"
import InstagramPurple from "../images/SocialMediaIcon/InstagramPurple.svg"
import TiktokPurple from "../images/SocialMediaIcon/TiktokPurple.svg"
import TwitterPurple from "../images/SocialMediaIcon/TwitterPurple.svg"
import WhatsappPurple from "../images/SocialMediaIcon/WhatsappPurple.svg"

const FirstNotification= () => { 
    return(
        <>
{/* NavBar */}
<div className="fixed z-50 top-0 font-Poppins w-[1540px] px-42 py-7  bg-white">
            <div className=" flex pl-20 space-x-1 text-center ">
                <img className="w-12 h-4 mt-4"src={Logo}></img>
                <Link to="/"><h1 className=" font-black h-4 mt-3 text-base">Scofinity</h1></Link>
                <ul className=" mt-3 flex pl-60 space-x-7 cursor-pointer">
                    <Link to="/"><li className="">Home</li></Link>
                    <li className="">About Us</li>
                    <Link to="/Scholarship"><li>Scholarship</li></Link>
                    <Link to="/ProgramBoothcamp"><li>Bootcamp & Program</li></Link>
                        <details className="dropdown ">
                        <summary className=" bg-transparent">Help</summary>
                        <ul className=" p-2 menu dropdown-content   rounded-box w-52 grid grid-cols-1 divide-y">
                        <li className=" btn bg-white rounded-b-[0px]">Contact Us</li>
                        <li className=" btn bg-white rounded-[0px]">Feedback Form</li>
                        <li className=" btn bg-white rounded-[0px] rounded-b-[5px]"><Link to="/DaftarMitra">Daftar Mitra</Link></li>
                        </ul>
                        </details>
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

    <div className="absolute pl-[300px] -mt-[70px] space-y-[20px]" >
        <h1 className="font-bold text-[32px]">Notification</h1>
        <ul className="flex font-bold text-[20px] space-x-[32px] ">
            <li>All</li>
            <li>Beasiswa</li>
            <li>Workshop & Bootcamp</li>
        </ul>
    </div>
{/* notification */}
<div className="pt-[100px] pl-[300px] font-Poppins">
    {/* 1 */}
    <div className="border-[2px] border-black w-[811px] h-[110px] px-[16px] py-[24px] rounded-t-lg">
            <div className="w-[56px] h-[56px] absolute rounded-[100px] border-2 p-[10px] bg-purple-100">
                <img className="absolute " src={Toa}></img>
            </div>
                <p className=" w-[700px] font-normal text-[20px] pl-[100px]">Great news! Beasiswa LPDP telah dibuka untuk pendaftaran. Segera daftar sebelum tanggal tutup pendaftaran</p>
    </div>
    {/* 2 */}
        <div className="border-[2px] border-t-[0px] border-black w-[811px] h-[110px] px-[16px] py-[24px] ">
            <div className="w-[56px] h-[56px] absolute rounded-[100px] border-2 p-[14px] bg-purple-100">
                <img className="absolute " src={Ring}></img>
            </div>
                <p className=" w-[700px] font-normal text-[20px] pl-[100px]">Great news! Beasiswa LPDP telah dibuka untuk pendaftaran. Segera daftar sebelum tanggal tutup pendaftaran</p>
        </div>
        {/* 3 */}
    <div className="h-screen w-screen">
        <div className="border-[2px] border-t-[0px] border-black w-[811px] h-[110px] px-[16px] py-[24px] ">
            <div className="w-[56px] h-[56px] absolute rounded-[100px] border-2 p-[14px] bg-purple-100">
            <img className="absolute" src={Alert}></img>
            </div>
            <p className=" w-[700px] font-normal text-[20px] pl-[100px]">Great news! Beasiswa LPDP telah dibuka untuk pendaftaran. Segera daftar sebelum tanggal tutup pendaftaran</p>
        </div>
        {/* 4 */}
        <div className="border-[2px] border-t-[0px] border-black w-[811px] h-[110px] px-[16px] py-[24px] ">
            <div className="w-[56px] h-[56px] absolute rounded-[100px] border-2 p-[14px] bg-purple-100">
            <img className="absolute" src={Alert}></img>
            </div>
            <p className=" w-[700px] font-normal text-[20px] pl-[100px]">Great news! Beasiswa LPDP telah dibuka untuk pendaftaran. Segera daftar sebelum tanggal tutup pendaftaran</p>
        </div>
        {/* 5 */}
        <div className="border-[2px] border-t-[0px] rounded-b-lg border-black w-[811px] h-[110px] px-[16px] py-[24px] ">
            <div className="w-[56px] h-[56px] absolute rounded-[100px] border-2 p-[10px] bg-purple-100">
            <img className="absolute " src={Toa}></img>
            </div>
            <p className=" w-[700px] font-normal text-[20px] pl-[100px]">Great news! Beasiswa LPDP telah dibuka untuk pendaftaran. Segera daftar sebelum tanggal tutup pendaftaran</p>
            </div>
    </div>
</div>
</div>

<div className="h-screen w-screen"></div>

{/* footer */}
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



</>
)
}

export default FirstNotification