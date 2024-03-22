import {Link} from "react-router-dom"
import Logo from "../images/Logo.svg"
import FacebookPurple from "../images/SocialMediaIcon/FacebookPurple.svg"
import InstagramPurple from "../images/SocialMediaIcon/InstagramPurple.svg"
import TiktokPurple from "../images/SocialMediaIcon/TiktokPurple.svg"
import TwitterPurple from "../images/SocialMediaIcon/TwitterPurple.svg"
import WhatsappPurple from "../images/SocialMediaIcon/WhatsappPurple.svg"

import FilterIcon from "../images/ScholarCard/FilterIcon.svg"
import Card1 from "../images/ScholarCard/Card1.svg"
import Card2 from "../images/ScholarCard/Card2.svg"
import Card3 from "../images/ScholarCard/Card3.svg"
import Card4 from "../images/ScholarCard/Card4.svg"
import Card5 from "../images/ScholarCard/Card5.svg"
import Card6 from "../images/ScholarCard/Card6.svg"
import Card7 from "../images/ScholarCard/Card7.svg"
import Card8 from "../images/ScholarCard/Card8.svg"
import LPDP from "../images/LPDP.svg"
import Unggulan from "../images/Unggulan.svg"
import { useEffect, useState } from "react"
import ScholarshipPortofolio from "../Pages/ScholarshipPortofolio"

const FirstScholarship = () => { 
    const baseUrl = 'https://schofinity-c284f28bf9dd.herokuapp.com/v1';
    let url = `${baseUrl}/scholarships`;
    
    const [scholarships, setScholarships] = useState([]);
    useEffect(() => {
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data.data);
            setScholarships(data.data);
        });
}, []);



    return(
        <>
<div>
{scholarships.map((scholarship) => (
    <h1><CardScholarship key={scholarship.id} 
    name={scholarship.name} 
    description={scholarship.description}
    startDate={scholarship.startDate}
    endDate={scholarship.endDate}
    image={'https://qesyijmpdyoqrlezgwqg.supabase.co/storage/v1/object/public/scholarships/'+ scholarship.image}

    educations={scholarship.educations}

        
    
    />
    
    </h1>
))}
</div>;
        
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

{/* Find your Dream Scholarship */}
<div className=" font-Poppins w-screen h-screen bg-purple-300">
    <h1 className="text-white font-extrabold w-[1100px] text-5.4xl text-center pt-[230px] pl-[350px] ml-[50px]">Find Your Dream Scholarship</h1>
    <p className="text-white ml-[400px] pl-[40px] pt-[10px] w-[739px] text-center text-2xl font-normal leading-8">When you're searching for a job, there are a few things you can do to get the most out of your search</p>
    <div className="pt-[32px] pl-[470px] " >
        <input className="rounded-full w-[660px] h-[50px] p-[16px] border-2 bg-transparent" type="text" placeholder="Cari Beasiswa"></input>
    </div>
</div>

{/* judul */}
<div>
    <h1 className="font-bold text-3xl ml-[77px] pt-[64px]">Recommended Scholarship</h1>
    <p className="ml-[77px] pt-[6px]">Explore Suggested scholarship searches</p>
</div>
{/* Recomended */}
<div className=" flex space-x-4 ml-[77px] pt-[8px]">
        <div className=" px-[32px] py-[10px] mt-5 mb-4 rounded-full border-2 bg-purple-100 font-semibold ">
            <h1>All</h1>
        </div>

        <div className="px-[32px] py-[10px] mt-5 mb-4 rounded-full border-[3px] border-purple-300 font-semibold text-purple-300">
            <h1>S1</h1>
        </div>

        <div className="px-[32px] py-[10px] mt-5 mb-4 rounded-full border-[3px] border-purple-300 font-semibold text-purple-300">
            <h1>S2</h1>
        </div>

        <div className="px-[32px] py-[10px] mt-5 mb-4 rounded-full border-[3px] border-purple-300 font-semibold text-purple-300">
            <h1>S3</h1>
        </div>

        <div className="px-[32px] py-[10px] mt-5 mb-4 rounded-full border-[3px] border-purple-300 font-semibold text-purple-300">
            <h1>Mahasiswa Aktif</h1>
        </div>
</div>

{/* Card Beasiswa */}
{/* kolom 1 */}
        <div className=" absolute flex flex-col ">
            <div className=" ml-[400px] mt-[70px] w-[285px] h-[354px] p-[32px] justify-items-center border-purple-300 rounded-3xl border-2 shadow-sm bg-purple-100 ">
                <img className=" absolute -mt-[20px] -ml-[15px] w-[249px] h-[187px]" src={Card1}></img>
                <h2 className="font-bold pt-[175px] text-[14px]">Beasiswa Sobat Bumi Pertamina 2024</h2>
                <p className="text-[12px]">February,2024-April,2024</p>
                <div className="flex ">
                    <div className="pt-[30px]  flex ">
                    <p className=" text-[11px]  py-[5px] w-[120px] text-center bg-white rounded-full ">Mahasiswa Aktif S1</p>
                    </div>
                    <div className="pt-[30px] ml-[50px]">
                        <p className="  px-[16px] py-[4px] bg-red-500 rounded-full text-white font-bold text-[14px] ">Close</p>
                    </div>
                </div>
            </div>
        </div>

        <div className=" absolute flex flex-col ">
            <div className=" ml-[700px] mt-[70px] w-[285px] h-[354px] p-[32px] justify-items-center border-purple-300 rounded-3xl border-2 shadow-sm bg-purple-100 ">
                <img className=" absolute -mt-[20px] -ml-[15px] w-[249px] h-[187px]" src={Unggulan}></img>
                <h2 className="font-bold pt-[175px] text-[14px]">Beasiswa Sobat Bumi Pertamina 2024</h2>
                <p className="text-[12px]">February,2024-April,2024</p>
                <div className="flex ">
                    <div className="pt-[30px]  flex ">
                    <p className=" text-[11px]  py-[5px] w-[120px] text-center bg-white rounded-full ">Mahasiswa Aktif S1</p>
                    </div>
                    <div className="pt-[30px] ml-[50px]">
                        <p className="  px-[16px] py-[4px] bg-success rounded-full text-white font-bold text-[14px] ">Open</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="  flex flex-col ">
        <button><Link to ="/Scholarship/BeasiswaLPDP"><div className=" ml-[1000px] mt-[70px] w-[285px] h-[354px] p-[32px] justify-items-center border-purple-300 rounded-3xl border-2 shadow-sm bg-purple-100 ">
            <img className=" cursor-pointer absolute -mt-[20px] -ml-[15px] w-[249px] h-[187px]" src={LPDP}></img>
                <h2 className="font-bold pt-[175px] text-[14px] text-start">Beasiswa Sobat Bumi Pertamina 2024</h2>
                <p className="text-[12px] text-start">February,2024-April,2024</p>
                <div className="flex ">
                    <div className="pt-[30px]  flex space-x-[10px]">
                    <p className=" text-[11px]  py-[5px] w-[30px] text-center bg-white rounded-full ">S1</p>
                    <p className=" text-[11px]  py-[5px] w-[30px] text-center bg-white rounded-full ">S2</p>
                    </div>
                    <div className="pt-[30px] ml-[90px]">
                    <p className="  px-[16px] py-[4px] bg-success rounded-full text-white font-bold text-[14px] ">Open</p>
                    </div>
                </div>
            </div></Link></button>
        </div>
{/* kolom 2  */}
        <div className="  flex flex-col -mt-[400px]">
            <div className=" ml-[400px] mt-[450px] w-[285px] h-[354px] p-[32px] justify-items-center border-purple-300 rounded-3xl border-2 shadow-sm bg-purple-100 ">
                <img className=" absolute -mt-[20px] -ml-[15px] w-[249px] h-[187px]" src={LPDP}></img>
                <h2 className="font-bold pt-[175px] text-[14px]">Beasiswa Sobat Bumi Pertamina 2024</h2>
                <p className="text-[12px]">February,2024-April,2024</p>
                <div className="flex ">
                    <div className="pt-[30px]  flex space-x-[10px]">
                    <p className=" text-[11px]  py-[5px] w-[30px] text-center bg-white rounded-full ">S1</p>
                    <p className=" text-[11px]  py-[5px] w-[30px] text-center bg-white rounded-full ">S2</p>
                    </div>
                    <div className="pt-[30px] ml-[90px]">
                        <p className="  px-[16px] py-[4px] bg-success rounded-full text-white font-bold text-[14px] ">Open</p>
                    </div>
                </div>
            </div>
        </div>

        <div className=" flex flex-col -mt-[805px]">
            <div className=" ml-[700px] mt-[450px] w-[285px] h-[354px] p-[32px] justify-items-center border-purple-300 rounded-3xl border-2 shadow-sm bg-purple-100 ">
                <img className=" absolute -mt-[20px] -ml-[15px] w-[249px] h-[187px]" src={Card2}></img>
                <h2 className="font-bold pt-[175px] text-[14px]">Beasiswa Sobat Bumi Pertamina 2024</h2>
                <p className="text-[12px]">February,2024-April,2024</p>
                <div className="flex ">
                    <div className="pt-[30px]  flex ">
                    <p className=" text-[11px]  py-[5px] w-[120px] text-center bg-white rounded-full ">Mahasiswa Aktif S1</p>
                    </div>
                    <div className="pt-[30px] ml-[50px]">
                        <p className="  px-[16px] py-[4px] bg-success rounded-full text-white font-bold text-[14px] ">Open</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-col -mt-[805px]">
            <div className=" ml-[1000px] mt-[450px] w-[285px] h-[354px] p-[32px] justify-items-center border-purple-300 rounded-3xl border-2 shadow-sm bg-purple-100 ">
                <img className=" absolute -mt-[20px] -ml-[15px] w-[249px] h-[187px]" src={Card3}></img>
                <h2 className="font-bold pt-[175px] text-[14px]">Beasiswa Sobat Bumi Pertamina 2024</h2>
                <p className="text-[12px]">February,2024-April,2024</p>
                <div className="flex ">
                    <div className="pt-[30px]  flex space-x-[10px]">
                    <p className=" text-[11px]  py-[5px] w-[30px] text-center bg-white rounded-full ">S1</p>
                    </div>
                    <div className="pt-[30px] ml-[130px]">
                        <p className="  px-[16px] py-[4px] bg-success rounded-full text-white font-bold text-[14px] ">Open</p>
                    </div>
                </div>
            </div>
        </div>
{/* kolom 3 */}
        <div className=" flex flex-col -mt-[780px]">
            <div className=" ml-[400px] mt-[830px] w-[285px] h-[354px] p-[32px] justify-items-center border-purple-300 rounded-3xl border-2 shadow-sm bg-purple-100 ">
                <img className=" absolute -mt-[20px] -ml-[15px] w-[249px] h-[187px]" src={Card4}></img>
                <h2 className="font-bold pt-[175px] text-[14px]">Beasiswa Sobat Bumi Pertamina 2024</h2>
                <p className="text-[12px]">February,2024-April,2024</p>
                <div className="flex ">
                    <div className="pt-[30px]  flex space-x-[10px]">
                    <p className=" text-[11px]  py-[5px] w-[30px] text-center bg-white rounded-full ">S1</p>
                    <p className=" text-[11px]  py-[5px] w-[30px] text-center bg-white rounded-full ">S2</p>
                    </div>
                    <div className="pt-[30px] ml-[90px]">
                        <p className="  px-[16px] py-[4px] bg-success rounded-full text-white font-bold text-[14px] ">Open</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="  flex flex-col -mt-[1185px]">
            <div className=" ml-[700px] mt-[830px] w-[285px] h-[354px] p-[32px] justify-items-center border-purple-300 rounded-3xl border-2 shadow-sm bg-purple-100 ">
                <img className=" absolute -mt-[20px] -ml-[15px] w-[249px] h-[187px]" src={Card5}></img>
                <h2 className="font-bold pt-[175px] text-[14px]">Beasiswa Sobat Bumi Pertamina 2024</h2>
                <p className="text-[12px]">February,2024-April,2024</p>
                <div className="flex ">
                    <div className="pt-[30px]  flex ">
                    <p className=" text-[11px]  py-[5px] w-[120px] text-center bg-white rounded-full ">Mahasiswa Aktif S1</p>
                    </div>
                    <div className="pt-[30px] ml-[50px]">
                        <p className="  px-[16px] py-[4px] bg-error rounded-full text-white font-bold text-[14px] ">Close</p>
                    </div>
                </div>
            </div>
        </div>

        <div className=" flex flex-col -mt-[1185px]">
            <div className=" ml-[1000px] mt-[830px] w-[285px] h-[354px] p-[32px] justify-items-center border-purple-300 rounded-3xl border-2 shadow-sm bg-purple-100 ">
                <img className=" cursor-pointer absolute -mt-[20px] -ml-[15px] w-[249px] h-[187px]" src={Card6}></img>
                <h2 className="font-bold pt-[175px] text-[14px]">Beasiswa Sobat Bumi Pertamina 2024</h2>
                <p className="text-[12px]">February,2024-April,2024</p>
                <div className="flex ">
                    <div className="pt-[30px]  flex ">
                    <p className=" text-[11px]  py-[5px] w-[120px] text-center bg-white rounded-full ">Mahasiswa Aktif S1</p>
                    </div>
                    <div className="pt-[30px] ml-[50px]">
                        <p className="  px-[16px] py-[4px] bg-success rounded-full text-white font-bold text-[14px] ">Open</p>
                    </div>
                </div>
            </div>
        </div>
{/* kolom 4 */}
        <div className="  flex flex-col -mt-[1150px] ">
            <div className=" ml-[400px] mt-[1210px] w-[285px] h-[354px] p-[32px] justify-items-center border-purple-300 rounded-3xl border-2 shadow-sm bg-purple-100 ">
                <img className=" absolute -mt-[20px] -ml-[15px] w-[249px] h-[187px]" src={Card7}></img>
                <h2 className="font-bold pt-[175px] text-[14px]">Beasiswa Sobat Bumi Pertamina 2024</h2>
                <p className="text-[12px]">February,2024-April,2024</p>
                <div className="flex ">
                    <div className="pt-[30px]  flex space-x-[10px]">
                    <p className=" text-[11px]  py-[5px] w-[30px] text-center bg-white rounded-full ">S1</p>
                    <p className=" text-[11px]  py-[5px] w-[30px] text-center bg-white rounded-full ">S2</p>
                    <p className=" text-[11px]  py-[5px] w-[60px] text-center bg-white rounded-full ">Jepang</p>
                    </div>
                    <div className="pt-[30px] ml-[30px]">
                        <p className="  px-[16px] py-[4px] bg-success rounded-full text-white font-bold text-[14px] ">Open</p>
                    </div>
                </div>
            </div>
        </div>

        <div className=" flex flex-col -mt-[1560px] ">
            <div className=" ml-[700px] mt-[1210px] w-[285px] h-[354px] p-[32px] justify-items-center border-purple-300 rounded-3xl border-2 shadow-sm bg-purple-100 ">
                <img className=" absolute -mt-[20px] -ml-[15px] w-[249px] h-[187px]" src={Card8}></img>
                <h2 className="font-bold pt-[175px] text-[14px]">Beasiswa Sobat Bumi Pertamina 2024</h2>
                <p>February,2024-April,2024</p>
                <div className="flex ">
                    <div className="pt-[30px]  flex space-x-[10px]">
                    <p className=" text-[11px]  py-[5px] w-[120px] text-center bg-white rounded-full">Mahasiswa Aktif S1</p>
                    </div>
                    <div className="pt-[30px] ml-[50px]">
                        <p className="  px-[16px] py-[4px] bg-success rounded-full text-white font-bold text-[14px] ">Open</p>
                    </div>
                </div>
            </div>
            {/* slide Number  */}
            <div className="flex space-x-[10px] pt-[64px] pl-[1150px]">
                <h1 className="px-[15px] py-[8px]  justify-items-center bg-purple-300 rounded-full text-white font-bold ">1</h1>
                <h1 className="px-[15px] py-[8px]  justify-items-center bg-purple-300 rounded-full text-white font-bold ">2</h1>
                <h1 className="px-[15px] py-[8px]  justify-items-center bg-purple-300 rounded-full text-white font-bold ">3</h1>
            </div>

            {/* testimoni */}
        <div className="h-screen w-screen pt-[128px]">
                <h1 className="pl-[700px]">Testimonials</h1>
                <h1 className="pl-[550px] text-4xl font-extrabold">What Our Alumni Say</h1>\

                <div className="absolute flex flex-col ">
                <div className=" ml-[77px] mt-[71px] w-[355px] h-[200px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-Orange-100 ">
                    <p className="text-[12px]">"Beasiswa ini bukan hanya membantu saya secara finansial selama kuliah, tetapi juga membuka pintu peluang karier yang luar biasa. Terima kasih atas dukungan dan kesempatan yang diberikan!"</p>
                    <h1 className="text-[14px] font-bold pt-[16px]">Sabrina Kamila</h1>
                    <p className="text-[12px] text-darkOrange">Beasiswa LPDP</p>
                </div>
                </div>

                <div className="absolute flex flex-col ">
                <div className="  ml-[500px] mt-[71px] w-[355px] h-[200px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-Orange-100 ">
                    <p className="text-[12px]">"Beasiswa ini bukan hanya membantu saya secara finansial selama kuliah, tetapi juga membuka pintu peluang karier yang luar biasa. Terima kasih atas dukungan dan kesempatan yang diberikan!"</p>
                    <h1 className="text-[14px] font-bold pt-[16px]">Guest</h1>
                    <p className="text-[12px] text-darkOrange">Beasiswa Tanoto</p>
                </div>
                </div>

                <div className="absolute flex flex-col ">
                <div className="  ml-[900px] mt-[71px] w-[355px] h-[200px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-Orange-100">
                    <p className="text-[12px]">"Beasiswa ini bukan hanya membantu saya secara finansial selama kuliah, tetapi juga  membuka pintu peluang karier yang luar biasa. Terima kasih atas dukungan dan kesempatan yang diberikan!"</p>
                    <h1 className="text-[14px] font-bold pt-[16px]">Guest </h1>
                    <p className="text-[12px] text-darkOrange">Beasiswa Unggulan</p>
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

        
{/* Filter */}
        <div className=" absolute flex-col ml-[90px] w-[234px] p-[32px] -mt-[2770px] items-start rounded-3xl border-2 border-gray-500 bg-orange-100 shadow-md">
            <div className="flex ">
                <img src={FilterIcon}></img>
                <h1 className="text-[18px] font-bold">Filter</h1>
                <p className="text-[12px] font-normal text-darkOrange pl-[80px] pt-[5px]">Reset</p>
            </div>

            <div className="flex-col flex w-[300px] pt-[12px]">
                <h1 className="text-[18px] font-bold">Tipe Beasiswa</h1>
                <label><input type="radio" ></input>Dalam Negeri</label>
                <label><input type="radio" ></input>Luar Negeri</label>
            </div>

            <div className="flex-col flex w-[300px] pt-[12px]">
                <h1 className="text-[18px] font-bold">Jenis Beasiswa</h1>
                <label><input type="radio" ></input>Pemerintah</label>
                <label ><input type="radio" ></input>Swasta</label>
            </div>

            <div className="flex-col flex w-[300px] pt-[12px]">
                <h1 className="text-[18px] font-bold">Category</h1>
                <label><input type="radio" ></input>Beasiswa Umum</label>
                <label><input type="radio" ></input>Prestasi Akademik</label>
                <label><input type="radio"></input>Non-Akademik</label>
            </div>

            <div className="flex-col flex w-[300px] pt-[22px]">
                <h1 className="text-[18px] font-bold">Semester</h1>
            </div>

            <div className="  px-[64px] py-[10px] mt-5 mb-4 rounded-full shadow-sm border-2 bg-darkOrange text-white font-semibold justify-items-center">
                <button><h1 className="text-[18px] text-center font-semibold leading-7">Apply</h1></button>
            </div>


        </div>




</>
)
}
// backend 
function CardScholarship(props){ 
    return(
        <>
 <div className=" flex">
            <div className=" ml-[400px]  w-[285px] h-[354px] p-[32px] justify-items-center border-purple-300 rounded-3xl border-2 shadow-sm bg-purple-100  ">
                
                <img className=" absolute -mt-[20px] -ml-[15px] w-[249px] h-[187px]" src={props.image}></img>
                <h2 className="font-bold pt-[175px] text-[14px]">{props.name}</h2>
                <p className="text-[12px]">{props.startDate} {props.endDate} </p>
                <div className="flex ">
                    <div className="pt-[30px]  flex ">
                    <p className="text-[11px] pb-[10px] py-[5px] w-[px] text-center bg-white rounded-full">

                    {/*  */}
                    {props.educations.map((education, index) => (
                        <span key={index}>
                            {education.educationName}
                            {index < props.educations.length - 1 && ", "}
                        </span>
                        ))}
                    </p>

                    </div>
                    <div className="pt-[30px] ml-[50px]">
                        <p className="  px-[16px] py-[4px] bg-red-500 rounded-full text-white font-bold text-[14px] ">Close</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default FirstScholarship