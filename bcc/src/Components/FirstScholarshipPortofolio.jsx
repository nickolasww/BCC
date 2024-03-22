import {Link} from "react-router-dom"
import Logo from "../images/Logo.svg"
import Portofolio from "../images/Portofolio.svg"
import FacebookPurple from "../images/SocialMediaIcon/FacebookPurple.svg"
import InstagramPurple from "../images/SocialMediaIcon/InstagramPurple.svg"
import TiktokPurple from "../images/SocialMediaIcon/TiktokPurple.svg"
import TwitterPurple from "../images/SocialMediaIcon/TwitterPurple.svg"
import WhatsappPurple from "../images/SocialMediaIcon/WhatsappPurple.svg"
import Vector from "../images/Vector.svg"

import Pemateri from "../images/Pemateri.svg"
import W1 from "../images/PopularWorkshop/W1.svg"
import W2 from "../images/PopularWorkshop/W2.svg"
import W3 from "../images/PopularWorkshop/W3.svg"
const FirstScholarshipPortofolio = () => { 
    return(
        <>
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

{/* Header awal */}
<div className="font-Poppins ">
<div className="h-screen w-screen bg-purple-300 font-Poppins">
    <div className="absolute">
        <img className="pt-[200px] pl-[100px]" src={Portofolio}></img>
    </div>
    <div className=" pl-[700px] pt-[250px]">
    <h1 className="absolute w-[500px] text-[54px] font-bold text-white">Study Abroad Mini Bootcamp</h1>
    </div>
    <div className="absolute pl-[700px] pt-[220px] flex space-x-[5px]">
        <h1 className=" border-2 border-purple-100 rounded-full px-7 py-2 text-purple-100 font-bold">Dapatkan Promo</h1>
        <h1 className="border-2 bg-white rounded-full px-7 py-2 font-bold text-purple-300">Daftar Sekarang</h1>
    </div>
</div>

{/* pemateri workshop serupa */}
<div className="h-screen w-screen">
    <div className="absolute">
    <h1 className="font-extrabold text-[32px] pl-[100px] pt-[100px]">Pemateri</h1>
    <div className="flex pl-[100px] pt-[32px] ">
        <img src={Pemateri}></img>
        <div className="pt-[10px] pl-[50px]">
            <h1 className="font-bold text-[20px]" >Nama: Dr. Maria Garcia</h1>
            <h1 className=" font-bold text-[20px]" >Pendidikan: S2 Oxford University</h1>
        </div>
    </div>
    </div>
    
    <div className="absolute pl-[100px] pt-[350px]">
        <h1 className="font-extrabold text-[32px]">Deskripsi</h1>
        <p className="text-justify text-[24px] font-normal w-[550px] pt-[32px]">Mini Bootcamp ini dirancang khusus untuk siswa yang berencana untuk melanjutkan studi di luar negeri. Kami menyediakan pengalaman belajar intensif dan mendalam dalam persiapan esai, wawancara, dan keterampilan bahasa Inggris melalui pendekatan yang interaktif dan terarah. Peserta akan dibimbing oleh instruktur yang berpengalaman dan akan mendapatkan wawasan berharga tentang taktik dan strategi untuk sukses dalam aplikasi mereka.</p>
    </div>


    <div className="absolute pt-[100px] pl-[1000px]">
        <h1 className="font-extrabold text-[32px]">Workshop Serupa</h1>
    </div>

    <div className="absolute pt-[150px] pl-[1000px]">
        <div className="absolute pt-[30px] pl-[10px]">
        <img className="w-[159px] h-[133px] pt-[30px]" src={W2}></img>
        </div>
        <div className="pt-[32px]">
    <div className="border-2 border-purple-300 rounded-[20px] w-[400px] h-[180px] p-[32px] pl-[180px] ">
        <h1 className="text-[18px] font-bold  w-[200px]">Ace Your Scholarship Interview</h1>
        <p className="text-[14px]">21 Maret 2024</p>
    </div>
        </div>
    </div>


    <div className="absolute pt-[350px] pl-[1000px]">
        <div className="absolute pt-[30px] pl-[10px]">
        <img className="w-[159px] h-[133px] pt-[30px]" src={W3}></img>
        </div>
        <div className="pt-[32px]">
    <div className="border-2 border-purple-300 rounded-[20px] w-[400px] h-[190px] p-[32px] pl-[180px] ">
        <h1 className="text-[18px] font-bold  w-[200px]">Winning Strategies for Beating Scholarship Deadlines</h1>
        <p className="text-[14px]">21 Maret 2024</p>
    </div>
        </div>
    </div>

    <div className="absolute pt-[570px] pl-[1000px]">
        <div className="absolute pt-[30px] pl-[10px]">
        <img className="w-[159px] h-[133px] pt-[30px]" src={W1}></img>
        </div>
        <div className="pt-[32px]">
    <div className="border-2 border-purple-300 rounded-[20px] w-[400px] h-[180px] p-[32px] pl-[180px] ">
        <h1 className="text-[18px] font-bold w-[200px]">Strategies for Compelling Writing</h1>
        <p className="text-[14px]">21 Maret 2024</p>
    </div>
        </div>
    </div>
</div>

{/* Detail bootcamp */}
<div className="w-screen h-screen">
    <div className=" pt-[150px] pl-[100px]">
    <h1 className="font-extrabold text-[32px] ">Detail Boothcamp</h1>
    </div>

    <div className="-mt-[32px]">
    <div className="  ml-[100px] mt-[64px] w-[550px] h-[235px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-purple-100 ">
        <h1 className="text-[24px] font-bold ">Durasi dan Jadwal</h1>
        <p className="font-normal text-[24px] pt-[12px] w-[450px] text-justify">Bootcamp ini berlangsung selama 4 minggu. Setiap kelas berlangsung dua kali seminggu, dengan durasi 2 jam setiap pertemuan.</p>
    </div>
    </div>

    <div className="-mt-[32px] text-justify">
    <div className="  ml-[100px] mt-[64px] w-[550px] h-[400px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-purple-100 ">
        <h1  className="text-[24px] font-bold ">Biaya</h1>
        <p className="font-normal text-[24px] pt-[12px]">Rp 2.500.000,-</p>
        <p className="font-normal text-[24px] pt-[22px]">Untuk Seluruh paket bootcamp (termasuk kelas persiapan esai, wawancara, dan TOEFL).</p>
        <p className="font-normal text-[24px]"> Metode Pembayaran: Pembayaran dapat dilakukan melalui transfer bank atau pembayaran tunai di kantor kami</p>
    </div>
    </div>

    <div className="-mt-[32px] text-justify">
    <div className="  ml-[100px] mt-[64px] w-[550px] h-[200px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-purple-100 ">
        <h1  className="text-[24px] font-bold ">Lokasi</h1>
        <p className="font-normal text-[24px] pt-[12px]">Bootcamp ini akan diselenggarakan secara daring (online) melalui <strong>Platform Zoom.</strong></p>
    </div>
    </div>

    <div className="-mt-[32px] text-justify">
    <div className="  ml-[100px] mt-[64px] w-[550px] h-[200px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-purple-100 ">
        <h1  className="text-[24px] font-bold ">Kuota Peserta</h1>
        <p className="font-normal text-[24px] pt-[12px]">Terbatas hingga 20 peserta untuk memastikan pengalaman pembelajaran yang intensif dan interaktif.</p>
    </div>
    </div>

<div className="h-screen w-screen">
    <div className="pl-[100px] pt-[50px]">
        <div className="absolute w-[550px] text-center">
        <h1 className="border-2 bg-purple-300 rounded-full px-7 py-[15px] text-white font-bold">Daftar</h1>
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



</div>
</div>
        </>
    )
}

export default FirstScholarshipPortofolio