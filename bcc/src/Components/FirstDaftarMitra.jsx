import {Link} from "react-router-dom"
import Logo from "../images/Logo.svg"


import FacebookPurple from "../images/SocialMediaIcon/FacebookPurple.svg"
import InstagramPurple from "../images/SocialMediaIcon/InstagramPurple.svg"
import TiktokPurple from "../images/SocialMediaIcon/TiktokPurple.svg"
import TwitterPurple from "../images/SocialMediaIcon/TwitterPurple.svg"
import WhatsappPurple from "../images/SocialMediaIcon/WhatsappPurple.svg"
const FirstDaftarMitra= () => { 
    return(
        <>
{/* Nav Bar */}
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
<div className="pt-[150px] pl-[600px] font-Poppins">
    <h1 className="text-[38px] font-extrabold text-purple-300">Daftar Mitra</h1>
</div>

<div className="pt-[128px] pl-[100px]">
    <h1 className="font-bold text-[20px]">Nama</h1>
    <div className="pt-[24px]">
    <input className="px-[32px] py-[24px] w-[500px] h-[45px] border-2 rounded-full border-gray-300 " type="text" ></input>
    </div>
</div>

{/*  */}
<div className="pt-[32px] pl-[100px]">
    <h1 className="font-bold text-[20px]">Deskripsi Beasiswa</h1>
    <div className="pt-[24px]">
    <input className="px-[32px] py-[24px] w-[500px] h-[45px] border-2 rounded-full border-gray-300 " type="text" ></input>
    </div>
</div>

<div className="h-screen w-screen">
    <div className="pt-[32px] pl-[100px]">
    <h1 className="font-bold text-[20px]">Perusahaan</h1>
    <div className="pt-[24px]">
    <input className="px-[32px] py-[24px] w-[500px] h-[45px] border-2 rounded-full border-gray-300 " type="text" ></input>
    </div>
    </div>
    
    <div className="pt-[32px] pl-[100px]">
    <h1 className="font-bold text-[20px]">Program</h1>
    <div className="pt-[24px]">
    <input className="px-[32px] py-[24px] w-[500px] h-[45px] border-2 rounded-full border-gray-300 " type="text" ></input>
    </div>
    </div>

    <div className="pt-[32px] pl-[100px]">
    <h1 className="font-bold text-[20px]">Benefit</h1>
    <div className="pt-[24px]">
    <input className="px-[32px] py-[24px] w-[500px] h-[45px] border-2 rounded-full border-gray-300 " type="text" ></input>
    </div>
    </div>

    <div className="pt-[32px] pl-[100px]">
    <h1 className="font-bold text-[20px]">Persyaratan</h1>
    <div className="pt-[24px]">
    <input className="px-[32px] py-[24px] w-[500px] h-[45px] border-2 rounded-full border-gray-300 " type="text" ></input>
    </div>
    </div>

    {/* kanan */}
<div className="  pl-[800px] -mt-[790px]">
    <h1 className="font-bold text-[20px]">Waktu Dibuka</h1>
    <div className="pt-[24px]">
    <input className="px-[32px] py-[24px] w-[500px] h-[45px] border-2 rounded-full border-gray-300 " type="text" ></input>
    </div>
</div>

<div className="  pl-[800px] mt-[32px]">
    <h1 className="font-bold text-[20px]">Waktu Ditutup</h1>
    <div className="pt-[24px]">
    <input className="px-[32px] py-[24px] w-[500px] h-[45px] border-2 rounded-full border-gray-300 " type="text" ></input>
    </div>
</div>

<div className=" pl-[800px] pt-[30px]">
    <h1 className="font-bold text-[20px]">Jenjang Beasiswa</h1>
    <div className="pt-[24px]">
    <input className="px-[32px] py-[24px] w-[500px] h-[45px] border-2 rounded-full border-gray-300 " type="text" ></input>
    </div>
</div>

<div className=" pl-[800px] pt-[30px]">
    <h1 className="font-bold text-[20px]">Untuk Semester Berapa</h1>
    <div className="pt-[24px]">
    <input className="px-[32px] py-[24px] w-[500px] h-[45px] border-2 rounded-full border-gray-300 " type="text" ></input>
    </div>
</div>

<div className=" pl-[800px] pt-[34px]">
    <h1 className="font-bold text-[20px]">Luar/Dalam Negeri</h1>
    <div className="pt-[24px]">
    <input className="px-[32px] py-[24px] w-[500px] h-[45px] border-2 rounded-full border-gray-300 " type="text" ></input>
    </div>
</div>

<div className=" pl-[800px] pt-[35px]">
    <h1 className="font-bold text-[20px]">Kategori Beasiswa</h1>
    <div className="pt-[24px]">
    <input className="px-[32px] py-[24px] w-[500px] h-[45px] border-2 rounded-full border-gray-300 " type="text" ></input>
    </div>
</div>
</div>

<div className="h-[500px] w-screen">
    <div className="pl-[100px]">
    <label><input Type="CheckBox"/>Saya bersedia menerima update informasi dari schofinity</label>
    </div>

    <div className="pl-[100px] pt-[28px]">
    <div className=" cursor-pointer w-[150px] text-center absolute border-2 bg-purple-300 rounded-full px-7 py-2 text-white font-bold">
        <h1>Submit</h1>
    </div>
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
export default FirstDaftarMitra