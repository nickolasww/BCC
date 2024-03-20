import {Link} from "react-router-dom"
import Logo from "../images/Logo.svg"
import Abroad from "../images/Abroad.svg"
import FacebookPurple from "../images/SocialMediaIcon/FacebookPurple.svg"
import InstagramPurple from "../images/SocialMediaIcon/InstagramPurple.svg"
import TiktokPurple from "../images/SocialMediaIcon/TiktokPurple.svg"
import TwitterPurple from "../images/SocialMediaIcon/TwitterPurple.svg"
import WhatsappPurple from "../images/SocialMediaIcon/WhatsappPurple.svg"
import Mentor from "../images/Mentor.svg"


import Link1 from "../images/ContactIcon/Link1.svg"
import Message from "../images/ContactIcon/Message.svg"
import Phone from "../images/ContactIcon/Phone.svg"
const FirstProgramMentoring = () => {
    return(
        <>
        {/* Nav bar */}
<div className="fixed z-50 top-0 font-Poppins w-[1540px] px-42 py-7  bg-white">
    <div className=" flex pl-20 space-x-1 text-center ">
        <img className="w-12 h-4 mt-4"src={Logo}></img>
        <Link to="/"><h1 className=" font-black h-4 mt-3 text-base">Scofinity</h1></Link>
            <ul className=" mt-3 flex pl-60 space-x-7 cursor-pointer">
                <Link to="/"><li>Home</li></Link>
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

<div className="font-Poppins ">
<div className="h-screen w-screen bg-purple-300 font-Poppins">
    <div className="absolute">
        <img className="pt-[200px] pl-[100px]" src={Mentor}></img>
    </div>
    <div className=" pl-[700px] pt-[250px]">
    <h1 className="absolute w-[500px] text-[54px] font-bold text-white">Study Abroad Mini Bootcamp</h1>
    </div>
    <div className="absolute pl-[700px] pt-[220px] flex space-x-[5px]">
        <h1 className=" border-2 border-purple-100 rounded-full px-7 py-2 text-purple-100 font-bold">Dapatkan Promo</h1>
        <h1 className="border-2 bg-white rounded-full px-7 py-2 font-bold text-purple-300">Daftar Sekarang</h1>
    </div>
</div>

{/* About Mentor */}
<div className="h-screen w-screen">
<div className="absolute pl-[100px] pt-[100px]">
        <h1 className="font-extrabold text-[32px]">About Mentor</h1>
        <p className="text-justify text-[24px] font-normal w-[550px] pt-[32px]">Mini Bootcamp ini dirancang khusus untuk siswa yang berencana untuk melanjutkan studi di luar negeri. Kami menyediakan pengalaman belajar intensif dan mendalam dalam persiapan esai, wawancara, dan keterampilan bahasa Inggris melalui pendekatan yang interaktif dan terarah. Peserta akan dibimbing oleh instruktur yang berpengalaman dan akan mendapatkan wawasan berharga tentang taktik dan strategi untuk sukses dalam aplikasi mereka.</p>
    </div>

    {/* Contact inforamtion */}
    <div className="absolute pl-[800px] pt-[100px] font-Poppins ">
    <div className="w-[456px] h-[400px] border-2 bg-purple-100 rounded-[20px]">
        <div className="pt-[30px] pl-[30px]">
        <h1 className="font-extrabold text-[24px]">Contact Information</h1>
        <p className="pt-[32px] w-[340px] text-[20px]">Feel free to contact us any time. We will get back to you as soon as we can!</p>
        <div className="pt-[32px] flex space-x-[8px]">
            <img src={Message}></img>
            <h1 className="font-bold text-[18px]">wa.me/MentoringBySchofinity</h1>
        </div>

        <div className="flex space-x-[8px] pt-[16px]">
            <img src={Phone}></img>
            <h1 className="font-bold text-[18px]">+62 812-3456-789</h1>
        </div>

        <div className="flex space-x-[8px] pt-[16px]">
            <img src={Link1}></img>
            <h1 className="font-bold text-[18px]">https://us06web.zoom.us</h1>
        </div>
        

        </div>
        
    </div>
    </div>

</div>
</div>

{/* Select Date */}
<div className=" h-screen w-screen ">
<div className=" -mt-[100px] pl-[100px]">
    <h1 className="font-extrabold text-[32px]" >Select Date</h1>

<div className="flex space-x-[16px] pt-[32px]">
    <div className="border-2 w-[92px] h-[120px] px-[8px] py-[22px] rounded-[15px] text-center border-gray-400">
        <h1 className="text-gray-500 font-bold text-[24px]">Mon</h1>
        <h1  className="text-gray-500 font-bold  text-[24px]">12</h1>
    </div>

    <div className="border-2 w-[92px] h-[120px] px-[8px] py-[22px] rounded-[15px] text-center border-gray-400">
        <h1 className="text-gray-500 font-bold text-[24px]">Tue</h1>
        <h1  className="text-gray-500 font-bold  text-[24px]">13</h1>
    </div>

    <div className="border-2 w-[92px] h-[120px] px-[8px] py-[22px] rounded-[15px] text-center border-gray-400">
        <h1 className="text-gray-500 font-bold text-[24px]">Wed</h1>
        <h1  className="text-gray-500 font-bold  text-[24px]">14</h1>
    </div>

    <div className="border-2 w-[92px] h-[120px] px-[8px] py-[22px] rounded-[15px] text-center border-gray-400">
        <h1 className="text-gray-500 font-bold text-[24px]">Fri</h1>
        <h1  className="text-gray-500 font-bold  text-[24px]">15</h1>
    </div>

    <div className="border-2 w-[92px] h-[120px] px-[8px] py-[22px] rounded-[15px] text-center border-gray-400">
        <h1 className="text-gray-500 font-bold text-[24px]">Sat</h1>
        <h1  className="text-gray-500 font-bold  text-[24px]">16</h1>
    </div>

    <div className="border-2 w-[92px] h-[120px] px-[8px] py-[22px] rounded-[15px] text-center border-gray-400">
        <h1 className="text-gray-500 font-bold text-[24px]">Sun</h1>
        <h1  className="text-gray-500 font-bold  text-[24px]">17</h1>
    </div>
</div>

<div>
    <div className="pt-[50px]">
    <h1 className="font-extrabold text-[32px]" >Select Schedule Time</h1>
    </div>

    <div className="flex space-x-[16px] pt-[32px]">
    <div className="border-2 w-[155px] h-[65px] px-[32px] py-[14px] rounded-[15px] text-center border-gray-400">
        <h1 className="font-bold text-[20px] text-purple-300">9.30 AM</h1>
    </div>

    <div className="border-2 w-[155px] h-[65px] px-[22px] py-[14px] rounded-[15px] text-center border-gray-400">
        <h1 className="font-bold text-[20px] text-purple-300">10.00 AM</h1>
    </div>

    <div className="border-2 w-[155px] h-[65px] px-[22px] py-[14px] rounded-[15px] text-center border-gray-400">
        <h1 className="font-bold text-[20px] text-purple-300">11.30 AM</h1>
    </div>

    <div className="border-2 w-[155px] h-[65px] px-[22px] py-[14px] rounded-[15px] text-center border-gray-400">
        <h1 className="font-bold text-[20px] text-purple-300">12.00 AM</h1>
    </div>
    </div>

    {/* Bawah */}
    <div className="flex space-x-[16px] pt-[32px]">
    <div className="border-2 w-[155px] h-[65px] px-[32px] py-[14px] rounded-[15px] text-center border-gray-400">
        <h1 className="font-bold text-[20px] text-purple-300">9.30 AM</h1>
    </div>

    <div className="border-2 w-[155px] h-[65px] px-[22px] py-[14px] rounded-[15px] text-center border-gray-400">
        <h1 className="font-bold text-[20px] text-purple-300">10.00 AM</h1>
    </div>

    <div className="border-2 w-[155px] h-[65px] px-[22px] py-[14px] rounded-[15px] text-center border-gray-400">
        <h1 className="font-bold text-[20px] text-purple-300">11.30 AM</h1>
    </div>

    <div className="border-2 w-[155px] h-[65px] px-[22px] py-[14px] rounded-[15px] text-center border-gray-400">
        <h1 className="font-bold text-[20px] text-purple-300">12.00 AM</h1>
    </div>
    </div>

    <div className="pt-[50px]">
        <div className="w-[650px]  h-[70px] border-2 bg-purple-300 rounded-[100px] px-7 py-2 text-white font-bold">
            <h1 className="font-bold text-[20px] text-center py-[12px]">Book Appointment</h1>
        </div>
    </div>
</div>
</div>
</div>
{/* Footer */}
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

export default FirstProgramMentoring