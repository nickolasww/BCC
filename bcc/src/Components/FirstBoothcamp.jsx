import {Link} from "react-router-dom"
import Logo from "../images/Logo.svg"
import BoothHeader from "../images/HeaderPhoto/BoothHeader.svg"

import Cewe from "../images/BenefitsIcon/Cewe.svg"
import Computer from "../images/BenefitsIcon/Computer.svg"
import Jempol from "../images/BenefitsIcon/Jempol.svg"
import Waktu from "../images/BenefitsIcon/Waktu.svg"

import FacebookPurple from "../images/SocialMediaIcon/FacebookPurple.svg"
import InstagramPurple from "../images/SocialMediaIcon/InstagramPurple.svg"
import TiktokPurple from "../images/SocialMediaIcon/TiktokPurple.svg"
import TwitterPurple from "../images/SocialMediaIcon/TwitterPurple.svg"
import WhatsappPurple from "../images/SocialMediaIcon/WhatsappPurple.svg"

import W1 from "../images/PopularWorkshop/W1.svg"
import W2 from "../images/PopularWorkshop/W2.svg"
import W3 from "../images/PopularWorkshop/W3.svg"
import W4 from "../images/PopularWorkshop/W4.svg"
import W5 from "../images/PopularWorkshop/W5.svg"
import W6 from "../images/PopularWorkshop/W6.svg"
import W7 from "../images/PopularWorkshop/W7.svg"


import B1 from "../images/Popular Bootcamp/B1.svg"
import B2 from "../images/Popular Bootcamp/B2.svg"
import B3 from "../images/Popular Bootcamp/B3.svg"
import B4 from "../images/Popular Bootcamp/B4.svg"

import M1 from "../images/Popular Mentoring/M1.svg"
import M2 from "../images/Popular Mentoring/M2.svg"
import M3 from "../images/Popular Mentoring/M3.svg"
import M4 from "../images/Popular Mentoring/M4.svg"

import Test1 from "../images/Boothtestimoni/Test1.svg"
import axios from 'axios'
import { useEffect, useState } from "react"


const FirstBoothcamp= () => { 

const [classes, setclasses]  = useState([]); 

useEffect(() => {
    axios.get('https://schofinity-c284f28bf9dd.herokuapp.com/v1/classes?subjects=2')
    .then(res => setclasses(res.data.data))
    .catch(err => console.log(err));
  }, []);

    return(
        <>
<div>
    {
         classes.map ((c, i ) => {
             return(
            <div>
              <div className="flex">
                <div className=" mt-[64px] w-[285px] h-[229px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-purple-100 ">
                <div className="bg-purple-300 rounded-xl w-[50px] h-[50px] ">
                    <img className="pt-[10px] pl-[10px]" src={Computer}></img>
                </div>
                    <h1 className="font-bold text-[14px] pt-[16px]">{c.name}</h1>
                    <p className="text-[12px] pt-[16px]">{c.programs}</p>
                </div>
                <p className="pt-[10px] text-[12px]"> {c.description} {c.community}</p>
            </div>
             </div>
         )})

    }
   
</div>


{/* Nav bar */}
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

{/* Header */}
<div className="h-screen w-screen bg-purple-300 font-Poppins">
    <img className="absolute pl-[900px] pt-[150px]" src={BoothHeader}></img>
    <h1 className="pl-[100px] pt-[200px] w-[600px] text-[60px] font-extrabold text-white">Find Your Perfect Mentor</h1>
    <p className=" pl-[100px] text-white text-[18px] w-[520px] pt-[7px]">We help you find perfect mentor for 1-on-1 lessons. It is completely free and private</p>

    <div className="pt-[64px] pl-[100px] " >
        <input className="rounded-full w-[500px] h-[50px] p-[16px] border-2 bg-transparent" type="text" placeholder="Cari Beasiswa"></input>
    </div>
</div>

{/* why choose us  */}
<div className="w-screen h-screen font-Poppins">

        <h1 className=" pl-[690px] pt-[64px] tetx-[18px] font-normal">Why Choose Us </h1>
        <h1 className="w-[1050px] pl-[490px] text-[38px] font-extrabold text-center">Benefits of Online tutoring service with us</h1>

    
        <div className="absolute flex flex-col ">
            <div className="  ml-[100px] mt-[64px] w-[285px] h-[229px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-purple-100 ">
                <div className="bg-purple-300 rounded-xl w-[50px] h-[50px] ">
                    <img className="pt-[10px] pl-[10px]" src={Cewe}></img>
                </div>
                    <h1 className="font-bold text-[14px] pt-[16px]">Tutor Berkualitas Tinggi</h1>
                    <p className="text-[12px] pt-[16px]">Kami menawarkan tim tutor yang terdiri dari para ahli di bidangnya. Setiap tutor telah melewati proses seleksi ketat dan memiliki kualifikasi yang relevan.  </p>
            </div>
        </div>

        <div className="absolute flex flex-col ">
            <div className="  ml-[430px] mt-[64px] w-[285px] h-[229px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-purple-100 ">
                <div className="bg-purple-300 rounded-xl w-[50px] h-[50px] ">
                    <img className="pt-[10px] pl-[10px]" src={Waktu}></img>
                </div>
                    <h1 className="font-bold text-[14px] pt-[16px]">Fleksibilitas Jadwal</h1>
                    <p className="text-[12px] pt-[16px]">Kami memahami bahwa setiap individu memiliki kebutuhan jadwal yang berbeda. Oleh karena itu, kami menyediakan layanan tutor online dengan jadwal yang fleksibel</p>
            </div>
        </div>

        <div className="absolute flex flex-col ">
            <div className="  ml-[760px] mt-[64px] w-[285px] h-[229px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-purple-100 ">
                <div className="bg-purple-300 rounded-xl w-[50px] h-[50px] ">
                    <img className="pt-[10px] pl-[10px]" src={Jempol}></img>
                </div>
                    <h1 className="font-bold text-[14px] pt-[16px]">Pendekatan Personalisasi</h1>
                    <p className="text-[12px] pt-[16px]">Kami mengakui bahwa setiap siswa memiliki gaya belajar yang berbeda.</p>
            </div>
        </div>


        <div className="absolute flex flex-col ">
            <div className="  ml-[1090px] mt-[64px] w-[285px] h-[229px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-purple-100 ">
                <div className="bg-purple-300 rounded-xl w-[50px] h-[50px] ">
                    <img className="pt-[10px] pl-[10px]" src={Computer}></img>
                </div>
                    <h1 className="font-bold text-[14px] pt-[16px]">Teknologi Interaktif</h1>
                    <p className="text-[12px] pt-[16px]">Dengan menggunakan platform online yang canggih, kami menyediakan pengalaman belajar interaktif. </p>
            </div>
        </div>

</div>

{/* popular WorkShop */}
<div className="w-screen h-screen font-Poppins">
    <div className="absolute">
        <h1 className="text-[32px] font-extrabold pl-[100px]">Workshop Terbaru</h1>
        <p className="text-[18px] font-normal pl-[100px]">Enhance your knowledge and skills</p>
    </div>
    <div className=" pl-[1150px] ">
           <button><Link to=""><h1 className="border-[3px] border-purple-300 text-purple-300 font-bold rounded-full h-[50px] px-[32px] py-[12px]">All Workshop</h1></Link></button>
        </div>
    {/* Card */}
    <div className="  pt-[50px] pl-[100px] ">
        <div className="  mt-[64px] w-[270px] h-[380px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
            <img className="-mt-[41px] w-[270px] h-[238px] -ml-[32px] absolute" src={W1}></img>
            <div className="">
                <h1 className="pt-[200px] w-[200px] font-bold text-[14px]">Strategies for Compelling Writing </h1>
                <p className="text-[12px]">21 Maret 2024</p>
                <p className="text-[12px] ">Rp 25.000</p>
            <div className=" pt-[15px] -pl-[100px]">
                <h1 className=" bg-purple-300 rounded-full px-[80px] py-[5px] p-[16px] text-white font-bold">Daftar</h1>
            </div>
            </div>
        </div>

        <div className="  ml-[330px] -mt-[380px] w-[270px] h-[380px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
            <img className="-mt-[41px] w-[270px] h-[238px] -ml-[32px] absolute" src={W2}></img>
            <div className="">
                <h1 className="pt-[200px] w-[200px] font-bold text-[14px]">Ace Your Scholarship Interview </h1>
                <p className="text-[12px]">21 Maret 2024</p>
                <p className="text-[12px] ">Rp 25.000</p>
            <div className=" pt-[15px] -pl-[100px]">
                <h1 className=" bg-purple-300 rounded-full px-[80px] py-[5px] p-[16px] text-white font-bold">Daftar</h1>
            </div>
            </div>
        </div>

        <div className="  ml-[650px] -mt-[380px] w-[270px] h-[380px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
            <img className="-mt-[41px] w-[270px] h-[238px] -ml-[32px] absolute" src={W3}></img>
            <div className="">
                <h1 className="pt-[200px] w-[250px] font-bold text-[14px]">Winning Startegies for Beating Scholarship Deadlines</h1>
                <p className="text-[12px]">21 Maret 2024</p>
                <p className="text-[12px] ">Rp 25.000</p>
            <div className=" pt-[15px] -pl-[100px]">
                <h1 className=" bg-purple-300 rounded-full px-[80px] py-[5px] p-[16px] text-white font-bold">Daftar</h1>
            </div>
            </div>
        </div>

        <div className="  ml-[970px] -mt-[380px] w-[270px] h-[380px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
            <img className="-mt-[41px] w-[270px] h-[238px] -ml-[32px] absolute" src={W4}></img>
            <div className="">
                <h1 className="pt-[200px] w-[200px] font-bold text-[14px]">Effective Communication in Scholarship Interviews</h1>
                <p className="text-[12px]">21 Maret 2024</p>
                <p className="text-[12px] ">Rp 25.000</p>
            <div className=" pt-[15px] -pl-[100px]">
                <h1 className=" bg-purple-300 rounded-full px-[80px] py-[5px] p-[16px] text-white font-bold">Daftar</h1>
            </div>
            </div>
        </div>

        {/* bawah */}
        <div className="  mt-[50px] w-[270px] h-[380px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
            <img className="-mt-[41px] w-[270px] h-[238px] -ml-[32px] absolute" src={W5}></img>
            <div className="">
                <h1 className="pt-[200px] w-[200px] font-bold text-[14px]">UnderStanding Scholarship Application Requirements </h1>
                <p className="text-[12px]">21 Maret 2024</p>
                <p className="text-[12px] ">Rp 25.000</p>
            <div className=" pt-[15px] -pl-[100px]">
                <h1 className=" bg-purple-300 rounded-full px-[80px] py-[5px] p-[16px] text-white font-bold">Daftar</h1>
            </div>
            </div>
        </div>

        <div className="  ml-[330px] -mt-[380px] w-[270px] h-[380px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
            <img className="-mt-[41px] w-[270px] h-[238px] -ml-[32px] absolute" src={W6}></img>
            <div className="">
                <h1 className="pt-[200px] w-[200px] font-bold text-[14px]">Steps to Securing Scholarships </h1>
                <p className="text-[12px]">21 Maret 2024</p>
                <p className="text-[12px] ">Rp 25.000</p>
            <div className=" pt-[15px] -pl-[100px]">
                <h1 className=" bg-purple-300 rounded-full px-[80px] py-[5px] p-[16px] text-white font-bold">Daftar</h1>
            </div>
            </div>
        </div>

        <div className="  ml-[650px] -mt-[380px] w-[270px] h-[380px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
            <img className="-mt-[41px] w-[270px] h-[238px] -ml-[32px] absolute" src={W7}></img>
            <div className="">
                <h1 className="pt-[200px] w-[200px] font-bold text-[14px]">building Your Scholarship Portofolio</h1>
                <p className="text-[12px]">21 Maret 2024</p>
                <p className="text-[12px] ">Rp 25.000</p>
            <div className=" pt-[15px] -pl-[100px] ">
                <button><Link to="/ProgramBoothcamp/ScholarshipPortofolio"><h1 className=" bg-purple-300 rounded-full px-[80px] py-[5px] p-[16px] text-white font-bold">Daftar</h1></Link></button>
            </div>
            </div>
        </div>
    </div>

{/*  Popular BoothCamp*/}
<div className="absolute mt-[100px]">
        <h1 className="text-[32px] font-extrabold pl-[100px]">Boothcamp Terbaru</h1>
        <p className="text-[18px] font-normal pl-[100px] ">Enhance your knowledge and skills</p>
    </div>
    <div className="absolute pl-[1150px] mt-[100px] ">
            <h1 className="border-[3px] border-purple-300 text-purple-300 font-bold rounded-full h-[50px] px-[32px] py-[12px]">All Boothcamp</h1>
        </div>
    {/* Card */}
    <div className=" pt-[200px] pl-[100px] ">
    <div className="  mt-[64px] w-[270px] h-[380px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
            <img className="-mt-[41px] w-[270px] h-[238px] -ml-[32px] absolute" src={B1}></img>
            <div className="">
                <h1 className="pt-[200px] w-[200px] font-bold text-[14px]">Strategies for Compelling Writing </h1>
                <p className="text-[12px]">21 Maret 2024</p>
                <p className="text-[12px] ">Rp 25.000</p>
            <div className=" pt-[15px] -pl-[100px]">
                <button><Link to="/ProgramBoothcamp/StudyAbroad"><h1 className=" bg-purple-300 rounded-full px-[80px] py-[5px] p-[16px] text-white font-bold">Daftar</h1></Link></button>
            </div>
            </div>
        </div>

        <div className=" ml-[330px] -mt-[380px] w-[270px] h-[380px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
            <img className="-mt-[41px] w-[270px] h-[238px] -ml-[32px] absolute" src={B2}></img>
            <div className="">
                <h1 className="pt-[200px] w-[200px] font-bold text-[14px]">Ace Your Scholarship Interview </h1>
                <p className="text-[12px]">21 Maret 2024</p>
                <p className="text-[12px] ">Rp 25.000</p>
            <div className=" pt-[15px] -pl-[100px]">
                <h1 className=" bg-purple-300 rounded-full px-[80px] py-[5px] p-[16px] text-white font-bold">Daftar</h1>
            </div>
            </div>
        </div>

        <div className="  ml-[650px] -mt-[380px] w-[270px] h-[380px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
            <img className="-mt-[41px] w-[270px] h-[238px] -ml-[32px] absolute" src={B3}></img>
            <div className="">
                <h1 className="pt-[200px] w-[250px] font-bold text-[14px]">Winning Startegies for Beating Scholarship Deadlines</h1>
                <p className="text-[12px]">21 Maret 2024</p>
                <p className="text-[12px] ">Rp 25.000</p>
            <div className="pt-[15px] -pl-[100px]">
                <h1 className=" bg-purple-300 rounded-full px-[80px] py-[5px] p-[16px] text-white font-bold">Daftar</h1>
            </div>
            </div>
        </div>

        <div className=" ml-[970px] -mt-[380px] w-[270px] h-[380px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
            <img className="-mt-[41px] w-[270px] h-[238px] -ml-[32px] absolute" src={B4}></img>
            <div className="">
                <h1 className="pt-[200px] w-[200px] font-bold text-[14px]">Effective Communication in Scholarship Interviews</h1>
                <p className="text-[12px]">21 Maret 2024</p>
                <p className="text-[12px] ">Rp 25.000</p>
            <div className=" pt-[15px] -pl-[100px]">
                <h1 className=" bg-purple-300 rounded-full px-[80px] py-[5px] p-[16px] text-white font-bold">Daftar</h1>
            </div>
            </div>
        </div>
    </div>

{/* Mentoring 1 0n 1 */}
    <div className=" absolute pt-[70px]">
        <h1 className="text-[32px] font-extrabold pl-[100px]">mentoring 1-on-1</h1>
        <p className="text-[18px] font-normal pl-[100px] ">Enhance your knowledge and skills</p>
    </div>
    <div className=" pl-[1200px] pt-[70px] absolute">
            <h1 className="border-[3px] border-purple-300 text-purple-300 font-bold rounded-full h-[50px] px-[32px] py-[12px]">All mentor</h1>
        </div>
    {/* Card */}
    <div className="  pt-[1700px] pl-[100px] ">
    <div className="  -mt-[1450px] w-[270px] h-[380px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
            <img className="-mt-[41px] w-[270px] h-[238px] -ml-[32px] absolute" src={M1}></img>
            <div className="">
                <h1 className="pt-[200px] w-[200px] font-bold text-[14px]">Strategies for Compelling Writing </h1>
                <p className="text-[12px]">21 Maret 2024</p>
                <p className="text-[12px] ">Rp 25.000</p>
            <div className=" pt-[15px] -pl-[100px]">
                <h1 className=" bg-purple-300 rounded-full px-[80px] py-[5px] p-[16px] text-white font-bold">Daftar</h1>
            </div>
            </div>
        </div>

        <div className=" ml-[330px] -mt-[380px] w-[270px] h-[380px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
            <img className="-mt-[41px] w-[270px] h-[238px] -ml-[32px] absolute" src={M2}></img>
            <div className="">
                <h1 className="pt-[200px] w-[200px] font-bold text-[14px]">Ace Your Scholarship Interview </h1>
                <p className="text-[12px]">21 Maret 2024</p>
                <p className="text-[12px] ">Rp 25.000</p>
            <div className=" pt-[15px] -pl-[100px]">
                <h1 className=" bg-purple-300 rounded-full px-[80px] py-[5px] p-[16px] text-white font-bold">Daftar</h1>
            </div>
            </div>
        </div>

        <div className="  ml-[650px] -mt-[380px] w-[270px] h-[380px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
            <img className="-mt-[41px] w-[270px] h-[238px] -ml-[32px] absolute" src={M3}></img>
            <div className="">
                <h1 className="pt-[200px] w-[250px] font-bold text-[14px]">Winning Startegies for Beating Scholarship Deadlines</h1>
                <p className="text-[12px]">21 Maret 2024</p>
                <p className="text-[12px] ">Rp 25.000</p>
            <div className=" pt-[15px] -pl-[100px]">
                <h1 className=" bg-purple-300 rounded-full px-[80px] py-[5px] p-[16px] text-white font-bold">Daftar</h1>
            </div>
            </div>
        </div>

        <div className="  ml-[970px] -mt-[380px] w-[270px] h-[380px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
            <img className="-mt-[41px] w-[270px] h-[238px] -ml-[32px] absolute" src={M4}></img>
            <div className="">
                <h1 className="pt-[200px] w-[200px] font-bold text-[14px]">Effective Communication in Scholarship Interviews</h1>
                <p className="text-[12px]">21 Maret 2024</p>
                <p className="text-[12px] ">Rp 25.000</p>
            <div className=" pt-[15px] -pl-[100px]">
                <button><Link to="/ProgramBoothcamp/ProgramMentoring"><h1 className=" bg-purple-300 rounded-full px-[80px] py-[5px] p-[16px] text-white font-bold">Daftar</h1></Link></button>
            </div>
            </div>
        </div>
    </div>

</div>


<div className=" h-screen w-screen"></div>
<div className=" h-[900px] w-screen "></div>

<div className="h-screen w-screen font-Poppins ">
    <div className="pt-[10px]">
    <h1 className="pl-[690px] font-normal text-[18px]">Testimonials</h1>
    <h1 className="pl-[550px] w-[950px] font-extrabold text-[32px] text-center">What Our student say about out program</h1>
    </div>

    <div className="absolute ml-[100px] mt-[100px] w-[390px] h-[340px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
        <img className="absolute -mt-[70px]" src={Test1}></img>
        <p className="text-[14px] pt-[30px] text-justify">Saya sangat beruntung dapat mengikuti bootcamp ini! Instruktur sangat berkompeten dan memberikan materi dengan sangat jelas. Mentoringnya juga luar biasa, saya mendapatkan panduan dan dukungan yang tak ternilai dari mentor saya. Hasilnya, saya sekarang memiliki keterampilan baru dan percaya diri untuk menghadapi proyek-proyek yang lebih kompleks. Terima kasih bootcamp dan mentor!</p>
        <h1 className="pt-[35px] font-bold text-[14px]">Karian Lynn</h1>
        <p className="text-[14px]">Beasiswa Pendidikan Indonesia </p>
    </div>

    <div className="absolute ml-[550px] mt-[100px] w-[390px] h-[340px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
        <img className="absolute -mt-[70px]" src={Test1}></img>
        <p className="text-[14px] pt-[30px] text-justify">Saya sangat beruntung dapat mengikuti bootcamp ini! Instruktur sangat berkompeten dan memberikan materi dengan sangat jelas. Mentoringnya juga luar biasa, saya mendapatkan panduan dan dukungan yang tak ternilai dari mentor saya. Hasilnya, saya sekarang memiliki keterampilan baru dan percaya diri untuk menghadapi proyek-proyek yang lebih kompleks. Terima kasih bootcamp dan mentor!</p>
        <h1 className="pt-[35px] font-bold text-[14px]">Karian Lynn</h1>
        <p className="text-[14px]">Beasiswa Pendidikan Indonesia </p>
    </div>

    <div className="absolute ml-[1000px] mt-[100px] w-[390px] h-[340px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
        <img className="absolute -mt-[70px]" src={Test1}></img>
        <p className="text-[14px] pt-[30px] text-justify">Saya sangat beruntung dapat mengikuti bootcamp ini! Instruktur sangat berkompeten dan memberikan materi dengan sangat jelas. Mentoringnya juga luar biasa, saya mendapatkan panduan dan dukungan yang tak ternilai dari mentor saya. Hasilnya, saya sekarang memiliki keterampilan baru dan percaya diri untuk menghadapi proyek-proyek yang lebih kompleks. Terima kasih bootcamp dan mentor!</p>
        <h1 className="pt-[35px] font-bold text-[14px]">Karian Lynn</h1>
        <p className="text-[14px]">Beasiswa Pendidikan Indonesia </p>
    </div>
</div>

{/* Footer */}
<div className=" h-[392px] w-screen  bg-purple-300 ">
        <div className=" flex space-x-[10px] absolute">
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

export default FirstBoothcamp