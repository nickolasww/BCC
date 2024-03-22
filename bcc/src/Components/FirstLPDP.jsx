import {Link} from "react-router-dom"
import Logo from "../images/Logo.svg"
import LPDP from "../images/LPDP.svg"
import Bookmark from "../images/SocialMediaIcon/Bookmark.svg"
import Company from "../images/SocialMediaIcon/Company.svg"

import Date from "../images/InfoIcon/Date.svg"
import Wisuda from "../images/InfoIcon/Wisuda.svg"
import BookMark from "../images/InfoIcon/BookMark.svg"

import FacebookPurple from "../images/SocialMediaIcon/FacebookPurple.svg"
import InstagramPurple from "../images/SocialMediaIcon/InstagramPurple.svg"
import TiktokPurple from "../images/SocialMediaIcon/TiktokPurple.svg"
import TwitterPurple from "../images/SocialMediaIcon/TwitterPurple.svg"
import WhatsappPurple from "../images/SocialMediaIcon/WhatsappPurple.svg"
const FirstLPDP = () => {
    
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


<div className="h-screen w-screen bg-purple-300 font-Poppins">
    <div className="absolute">
        <img className="pt-[200px] pl-[100px] w-[600px]" src={LPDP}></img>
    </div>
    <div className=" pl-[700px] pt-[250px]">
    <h1 className="absolute w-[650px] text-[54px] font-bold text-white">Beasiswa Reguler LPDP (Lembaga Pengelola Dana Pendidikan)</h1>
    <div className="absolute pt-[250px] flex space-x-[10px]">
        <img src={Company}></img>
        <p className="text-white text-[20px] font-normal">Kementerian Keuangan Republik Indonesia</p>
    </div>
    </div>
    <div className="absolute pl-[700px] pt-[300px] flex space-x-[5px]">
        <div className="flex border-2 bg-purple-100 rounded-full px-7 py-2">
        <h1 className=" text-purple-300 font-bold">Simpan</h1>
        <img className="w-[20px] h-[15px] mt-[5px] " src={Bookmark}></img>
        </div>
        <h1 className="border-2 bg-purple-100 rounded-full px-7 py-2 font-bold text-purple-300">Pelajari Beasiswa</h1>
    </div>
</div>


<div className="h-screen w-screen font-Poppins" >
    <div className=" absolute flex-col ml-[90px] w-[350px] h-[500px] py-[32px] px-[24px] mt-[64px] items-start rounded-3xl border-2 border-gray-500 bg-orange-100 shadow-md">
        <ul className="">
            <li>Deskripsi</li>
            <li>Benefit</li>
            <li>Persyaratan</li>
            <li>Timeline Pendaftaran</li>
            <li>Tingakat Beasiswa</li>
            <li>Semester</li>
            <li>Kategori Beasiswa</li>
        </ul>
        <h1>Daftar Sekarang</h1>
    </div>


    <div className="pl-[600px] pt-[70px]">
        <h1 className="text-[32px] font-extrabold ">Deskripsi</h1>
        <p className="text-[24px] w-[650px] text-justify pt-[32px]">Beasiswa Reguler LPDP merupakan program beasiswa yang didanai oleh Lembaga Pengelola Dana Pendidikan (LPDP) Kementerian Keuangan Republik Indonesia untuk jenjang <strong>magister</strong> dan <strong>doktor. </strong>Beasiswa ini terbuka bagi WNI yang ingin melanjutkan pendidikan di perguruan tinggi terkemuka <strong>di dalam dan luar negeri.</strong></p>
    </div>
</div>
{/* beneift dan persyaratan */}
<div className="h-screen w-screen">
<div className="pl-[600px] -mt-[250px]">
        <h1 className="text-[32px] font-extrabold ">Benefit</h1>
        <ol className="text-[20px]">
            <li>Biaya Pendidikan</li>
            <li>Biaya Hidup</li>
            <li>Tunjangan Buku</li>
            <li>Tunjangan Penelitian (untuk S3)</li>
            <li>Biaya praktik/Kuliah Kerja Lapangan</li>
            <li>Biaya Seminar/Konferensi</li>
            <li>Biaya Perjalanan</li>
            <li>Asuransi Kesehatan</li>
        </ol>
    </div>
<div className="pl-[600px] pt-[64px]">
    <h1 className="text-[32px] font-extrabold ">Persyaratan</h1>
    <ul className="text-[20px]">
        <li>Asuransi KesehatanWarga Negara Indonesia (WNI) </li>
        <li>Lulus S1/D4 dari Perguruan Tinggi Negeri atau Swasta yang terakreditasi A</li>
        <li>IPK minimal 3.00</li>
        <li>Memiliki skor TOEFL minimal 500 (untuk program S2) atau 550 (untuk program S3)</li>
        <li>Memiliki surat rekomendasi dari dua orang dosen</li>
        <li>Memiliki surat izin atasan (bagi yang sudah bekerja)</li>
        <li>Sehat jasmani dan rohani</li>
        <li>Bebas dari narkoba</li>
        <li>Berkomitmen</li>
    </ul>
</div>
</div>

{/* Infromasi time line dan tingkat beasiswa */}
<div className="h-screen w-screen"> 
    <div className="pl-[600px] pt-[64px]">
        <h1 className="text-[32px] font-extrabold ">Informasi</h1>
    </div>

    <div className="pl-[500px] -mt-[40px]">
    <div className=" ml-[100px] mt-[64px] w-[600px] h-[235px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-purple-100 ">
        <h1 className="text-[24px] font-bold">Timeline Pendaftaran</h1>
        <div className="flex pt-[12px] space-x-[10px]">
            <img  src={Date}></img>
            <p className="text-[24px]">Waktu Dibuka</p>
            <div className="pl-[70px]">
                <p className="text-[24px]">Februari-April</p>
            </div>
        </div>
        <div className="flex space-x-[10px]">
            <img  src={Date}></img>
            <p className="text-[24px]">Waktu Ditutup</p>
            <div className="pl-[60px]">
                <p className="text-[24px]">April-Mei</p>
            </div>
        </div>
    </div>
    </div>

    <div className="pl-[500px] -mt-[40px]">
    <div className=" ml-[100px] mt-[64px] w-[600px] h-[235px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-purple-100 ">
        <h1 className="text-[24px] font-bold">Tingkat Beasiswa</h1>
        <div className="flex pt-[12px] space-x-[10px]">
            <img  src={Wisuda}></img>
            <p className="text-[24px]">Magister (S2)</p>
        </div>
        <div className="flex space-x-[10px]">
            <img  src={Wisuda}></img>
            <p className="text-[24px]">Doktor (S3)</p>
        </div>
    </div>
    </div>
</div>

{/*  Semester dan Kategori*/}
<div className="h-screen w-screen"> 
    <div className="pl-[500px] -mt-[100px]">
        <div className=" ml-[100px] mt-[64px] w-[600px] h-[235px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-purple-100 ">
            <h1 className="text-[24px] font-bold">Semester</h1>
        <div className="flex pt-[12px] space-x-[10px]">
            <img  src={BookMark}></img>
            <p className="text-[24px]">Semua Semester</p>
        </div>
    </div>
    </div>

    <div className="pl-[500px] -mt-[20px]">
        <div className=" ml-[100px] mt-[64px] w-[600px] h-[235px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-purple-100 ">
            <h1 className="text-[24px] font-bold">kategori</h1>
        <div className=" pt-[12px] pl-[20px] space-x-[10px]">
            <ul className="text-[20px]">
                <li>Pemerintah</li>
                <li>Beasiswa Unggulan Luar Negeri (BULN)</li>
                <li>Beasiswa Unggulan Dalam Negeri</li>
                <li>Beasiswa Akademik</li>
            </ul>
        </div>
    </div>
    </div>
</div>

{/* Informasi lebih lanjut daftar sekarang  */}
<div className="h-screen w-screen">
    <div className="pl-[500px] -mt-[200px]">
        <div className=" ml-[100px] mt-[64px] w-[600px] h-[150px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-purple-100 ">
            <h1 className="text-[24px] font-bold">Informasi lebih Lanjut</h1>
            <a className="text-purple-300 text-[24px] font-semibold" href="https://lpdp.kemenkeu.go.id/">https://lpdp.kemenkeu.go.id/"</a>
        </div>
    
    <h1 className="pl-[100px] pt-[50px] text-[24px] font-bold ">Ayo, persiapkan dirimu dan raih <span className="text-purple-300">Beasiswa Impianmu!</span></h1>
{/* button */}
    <button className="btn  ml-[100px] mt-[30px] w-[620px] h-[70px] p-[16px] justify-items-center rounded-[100px] shadow-sm bg-purple-300 font-bold text-[24px] text-center text-white " onClick={()=>document.getElementById('my_modal_1').showModal()}>Daftar</button>
        <dialog id="my_modal_1" className="modal" >
            <div className="modal-box bg-purple-100 h-[437px] p-[32px]">

            <div className="ml-[400px]">
                <form method="dialog">
                <button className="btn bg-purple-100 border-purple-100" >X</button>
                </form>
            </div>

            <h3 className="font-bold text-[24px] text-center">Pilih Program Unggulan</h3>
        <form method="dialog">
        <Link to="/ProgramBoothcamp"><button><div className=" mt-[20px] absolute w-[400px] ml-[20px] bg-purple-200 rounded-full p-[16px] text-white font-bold">
            <p className="text-[24px] font-semibold">Specialized Bootcamp</p>
            </div></button></Link>
        </form>

        <form method="dialog">
        <Link to="/ProgramBoothcamp"><button><div className=" absolute w-[400px] mt-[80px] ml-[20px] bg-purple-200 rounded-full p-[16px] text-white font-bold">
            <p className="text-[24px] font-semibold">Workshop Berbasis Praktik</p>
            </div></button></Link>
        </form>

        <form method="dialog">
            <Link to="/ProgramBoothcamp"><button><div className=" absolute w-[400px] mt-[140px] ml-[20px] bg-purple-200 rounded-full p-[18px] text-white font-bold">
        <p className="text-[24px] font-semibold text-center">Mentoring 1-on-1</p>
            </div></button></Link>
        </form>
        </div>
        </dialog>

    </div>
</div>

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
    export default FirstLPDP