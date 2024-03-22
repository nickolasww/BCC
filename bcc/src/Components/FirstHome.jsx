import Logo from "../images/Logo.svg"
import FotoHeader from "../images/FotoHeader.svg"
import Phone from "../images/Phone.svg"
import Tanoto from "../images/Tanoto.svg"
import LPDP from "../images/LPDP.svg"
import Unggulan from "../images/Unggulan.svg"
import ApplyCard from "../images/ApplyCard.svg"

import Praktik from "../images/Praktik.svg"
import Mentoring from "../images/Mentoring.svg"
import Special from "../images/Special.svg"

import FacebookPurple from "../images/SocialMediaIcon/FacebookPurple.svg"
import InstagramPurple from "../images/SocialMediaIcon/InstagramPurple.svg"
import TiktokPurple from "../images/SocialMediaIcon/TiktokPurple.svg"
import TwitterPurple from "../images/SocialMediaIcon/TwitterPurple.svg"
import WhatsappPurple from "../images/SocialMediaIcon/WhatsappPurple.svg"
import {Link} from "react-router-dom"
const FirstHome = () => { 

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
                <Link to="/SignUp"><h1 className=" border-2 border-purple-300 rounded-full px-7 py-2 text-purple-300 font-bold hover:bg-purple-100 hover:border-purple-100">Sign Up</h1></Link>
                <Link to="/Login"><h1 className="border-2 bg-purple-300 rounded-full px-7 py-2 text-white font-bold hover:bg-purple-100 hover:border-purple-100 hover:text-purple-200">Log in</h1></Link>
            </div>
            </div>
</div>

        
{/* Header */}
<div className="font-Poppins h-screen w-screen bg-purple-100">
        <div className= "circlePosition w-[500px] h-[450px] bg-purple-300 rounded-[100%] absolute z-1 bottom-[30%] -left-[10%] translate-y-60 blur-[180px]"></div>
        <div className= "circlePosition w-[500px] h-[450px] bg-purple-300 rounded-[100%] absolute z-1 bottom-[30%] left-[65%] translate-y-60 blur-[180px] "></div>
            <section className= "absolute">
                {/* Judul */}
                <div className="text-5.4xl font-extrabold pt-[200px] pl-[200px]">
                    <h1>We Help To Build </h1>
                    <h1>Your Dream</h1>
                </div>
                {/* sub judul */}
                <div className=" text-start flex text-xl pl-[200px] h-[50px] w-[590px] ">
                    <p>Get free scholarships for every level of education that every student who achieve for a bright future can get</p>
                </div>
                {/* tombol start dan learn more */}
                <div className="flex font-bold space-x-3 pl-[200px] pt-[100px] " >
                    <Link><h1 className=" bg-purple-300 rounded-full px-[32px] py-[13px] text-white font-bold  hover:bg-purple-100 hover:text-purple-200">Start Now</h1></Link>
                    <Link><h1 className=" border-2 border-purple-300 rounded-full px-[32px] py-[13px] text-purple-300 font-bold hover:bg-purple-100 hover:border-purple-100">Learn More</h1></Link>
                </div>
                {/* Gambar */}
                <div className="w-[494px] h-[477px] ml-[900px] -mt-[400px]">
                    <img src={FotoHeader}></img>
                </div>
            </section>
</div>

{/* Top Scholarship */}
<div className="font-Poppins h-screen w-screen ">
            {/* button */}
            <div className="flex absolute pt-[80px] font-bold pl-[1200px]">
            <Link><h1 className="border-2 bg-purple-300 rounded-full px-[32px] py-[13px] text-white font-bold hover:bg-purple-100 hover:border-purple-100 hover:text-purple-200">View All </h1></Link> 
            </div>
            {/* Judul */}
            <div className="pt-[50px] pl-[100px] text-3xl font-extrabold">
                <h1>Browse Top Scholarships for</h1>
                <h1 className="text-purple-300">Undergraduate Student</h1>
            </div>
            {/* card */}
    <div className="flex flex-col mt-[77px] ">
            <div className=" ml-[90px] w-[387px] h-[454px] p-[32px] justify-items-center rounded-3xl border-2 shadow-sm bg-purple-100 hover:bg-gray-400 ">
                <img src={Tanoto}></img>
                <h2 className="font-bold pt-[26px]">Tanoto Foundation</h2>
                <p>January 22,2024-Februari 24,2024</p>
                <div className="flex ">
                    <p className=" flex pt-[31px]">Mahasiswa Aktif S1</p>
                    <div className="pt-[31px] pl-[140px]">
                        <p className="  px-[32px] py-[8px] bg-red-500 rounded-full text-white font-bold ">Close</p>
                    </div>
                </div>
            </div>
            <div className=" absolute ml-[522px] w-[387px] h-[454px] p-[32px] justify-items-center rounded-3xl border-2 shadow-sm bg-purple-100 hover:bg-gray-400 ">
                <img src={Unggulan}></img>
                <h2 className="font-bold pt-[26px]">Beasiswa Unggulan By kemendikbud Indonesia</h2>
                <p>January 22,2024-Februari 24,2024</p>
                <div className="flex">
                    <p className=" flex pt-[15px]">Mahasiswa Aktif S1</p>
                    <div className="pt-[15px] pl-[140px]" >
                        <p className=" px-[32px] py-[8px] bg-green-500 rounded-full text-white font-bold ">Open</p>
                    </div>
                </div>
            </div>
            <div className="absolute ml-[950px] w-[387px] h-[454px] p-[32px] justify-items-center rounded-3xl border-2 shadow-sm bg-purple-100 hover:bg-gray-400 ">
                <img src={LPDP}></img>
                <h2 className="font-bold pt-[26px]">Beasiswa Reguler LPDP</h2>
                <p>January 22,2024-Februari 24,2024</p>
                <div className="flex">
                    <div className="pt-[40px]">
                        <p className=" w-[50px] h-[40px] pt-[7px] pl-[15px] bg-white rounded-full">S2</p>
                    </div>
                    <div className="pt-[40px] pl-[160px]">
                        <p className=" px-[32px] py-[8px] bg-green-500 rounded-full text-white font-bold ">Open</p>
                    </div>
                </div>
            </div>
    </div>
</div>

{/* Best Program*/}
<div className=" flex flex-col rounded-t-[100px] font-Poppins h-screen w-screen bg-purple-100 ">
            <h1 className=" ml-[50px] pt-[50px] pl-[600px] text-3xl font-extrabold">Our Best Program</h1>
                <div className=" ml-[150px] w-[387px] h-[454px] p-[32px] mt-[64px] justify-items-center rounded-3xl border-2 shadow-sm bg-white hover:bg-purple-400 hover:text-white">
                    <img className="w-[116px] h-[120px] mx-[90px]" src={Praktik}></img>
                    <h2 className="py-[26px] font-extrabold mx-[40px] w-[300px]">WorkShop Berbasis Praktik</h2>
                    <p>Menghadirkan serangkaian workshop interaktif yang didesain untuk memberikan pemahaman mendalam tentang konsep-konsep kunci. Peserta akan terlibat dalam proyek proyek praktik yang memberikan pengalaman langsung dan keterampilan yang dapat diterapkan di dunia nyata</p>
                </div>
    
                <div className="absolute ml-[580px] w-[387px] h-[454px] p-[32px] mt-[160px] justify-items-center rounded-3xl border-2 shadow-sm bg-white hover:bg-purple-400 hover:text-white">
                    <img className=" w-[116px] h-[120px] mx-[90px]" src={Mentoring}></img>
                    <h2 className="py-[26px] font-extrabold mx-[80px] w-[300px]">Mentoring 1-on-1</h2>
                    <p>Setiap peserta akan mendapatkan bimbingan personal dari para mentor ahli dalam bidangnya. Sesi mentoring akan membantu peserta mengatasi tantangan khusus mereka, serta memberikan arahan karir dan nasihat pribadi untuk pengembangan profesional</p>
                </div>

                <div className="absolute ml-[1000px] w-[387px] h-[454px] p-[32px] mt-[160px] justify-items-center rounded-3xl border-2 shadow-sm bg-white hover:bg-purple-400 hover:text-white">
                    <img className="w-[116px] h-[120px] mx-[90px]" src={Special}></img>
                    <h2 className="py-[26px] font-extrabold mx-[70px] w-[300px]">Specialized Bootcamp</h2>
                    <p>Bootcamp berfokus pada penguatan keterampilan teknis dan keahlian praktis melalui pendekatan intensif. Tim instruktur ahli akan memandu peserta melalui. tantangan nyata, memastikan pemahaman yang mendalam dan pengaplikasian konsep secara cepat.</p>
                </div>
</div>


{/* About us  */}
<div className="  absolute font-Poppins h-screen w-screen bg-purple-100">
    <div className= "circlePosition w-[600px] h-[600px] bg-purple-300 rounded-[100%] absolute z-1 bottom-[2%] -left-[10%] translate-y-60 blur-[180px]"></div>
    <div className= "circlePosition w-[500px] h-[450px] bg-purple-300 rounded-[100%] absolute z-1 bottom-[70%] left-[65%] translate-y-60 blur-[180px] "></div>
        <img className="absolute pl-[900px] pt-[50px]" src={Phone}></img>
        <h1 className="font-bold text-2xl pt-[30px] pl-[100px]">About Us</h1>
        <h1 className="pl-[100px] text-5.4xl font-extrabold w-[800px] pt-[64px]">Free <span className="text-purple-300">Scholarship</span> Provider By Schofinity</h1>
        <p className="pl-[100px] w-[600px] text-l">Selamat datang di Schofinity, platform beasiswa yang bertujuan memberikan dukungan komprehensif kepada para pelajar dan mahasiswa untuk meraih peluang pendidikan lebih baik. Kami percaya bahwa setiap individu berpotensi untuk mencapai puncak kesuksesannya melalui pendidikan, dan Schofinity hadir untuk membantu mewujudkannya.</p>
        <div className="pt-[64px] pl-[100px]">
            <h1 className=" absolute px-[32px] py-[8px] bg-purple-100 rounded-full  font-bold hover:bg-purple-400 hover:text-white">Get Started</h1>
        </div>

<div className="h-screen w-screen bg-purple-100">
        <div className=" absolute ml-[300px] mt-[200px] w-[978px] h-[363px] p-[32px]  justify-items-center rounded-[50px]  shadow-sm bg-purple-400">
            <img className=" absolute ml-[500px]" src={ApplyCard}></img>
            <h1 className="text-purple-100 font-extrabold text-3xl w-[450px] ">For Those of you who Plan to Get a <span className="text-orange-300">Scholarship</span></h1>
            <p className="text-purple-100 w-[350px] pt-[32px]">Temukan beasiswa impian anda dan dapatkan informasi lengkap tentang beasiswa dan persyaratan pendaftarannya </p>

            <div className="pt-[37px]">
               <button> <h1 className=" absolute px-[32px] py-[8px] bg-purple-100 rounded-full  font-bold hover:bg-purple-400 hover:text-white hover:shadow-md">Apply Now</h1></button>
            </div>
        </div>
</div>

{/* FAQ */}
<div className="h-screen w-screen bg-white">
    <h1 className="pt-[50px] pl-[600px] text-2xl font-extrabold">Frequently Asked Questions </h1>
    <p className="pt-[12px] pl-[50px] text-center text-xl font-normal leading-[30px]">Everything you need to know about the product and billing</p>
{/* 1 */}
    <div className=" ml-[300px] mt-[128px] w-[990px] p-[32px] border-2 border-purple-300 rounded-[10px]">
        <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" /> 
        <div className="collapse-title ">
            <h2 className="font-bold text-[18px]">Apakah program ini cocok untuk saya yang memiliki jadwal yang padat?</h2>
        </div>
            <div className="collapse-content text-[18px]"> 
                <p>Ya, program ini menyediakan fleksibilitas waktu untuk memenuhi kebutuhan peserta. Kami memahami jadwal, dan kami berusaha memberikan akses yang nyaman untuk pembelajaran.</p>
            </div>
        </div>
    </div>
{/* 2 */}
    <div className="ml-[300px] mt-[32px] w-[990px] p-[32px] border-2 border-purple-300 rounded-[10px]">
    <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" /> 
        <div className="collapse-title ">
            <h2 className="font-bold text-[18px]">Bagaimana cara mendapatkan sertifikat pengakuan?</h2>
        </div>
            <div className="collapse-content text-[18px]"> 
            <p>Sertifikat pengakuan akan diberikan setelah peserta berhasil menyelesaikan semua komponen program dan memenuhi persyaratan kelulusan.</p>
            </div>
    </div>
    </div>
{/* 3 */}
    <div className="ml-[300px] mt-[32px] w-[990px] p-[32px] border-2 border-purple-300 rounded-[10px]">
    <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" /> 
        <div className="collapse-title ">
            <h2 className="font-bold text-[18px]">Apa yang membuat program Schofinity berbeda dengan program pembelajaran lainnya?</h2>
        </div>
            <div className="collapse-content text-[18px]"> 
                <p>Program ini unggul dalam menyatukan workshop, bootcamp, dan mentoring untuk memberikan pengalaman pembelajaran yang komprehensif dan praktis, memastikan pertumbuhan peserta dari berbagai aspek.</p>
            </div>
    </div>
    </div>
{/* 4 */}
    <div className="ml-[300px] mt-[32px] w-[990px] p-[32px] border-2 border-purple-300 rounded-[10px]">
    <div className="collapse collapse-arrow ">
            <input type="radio" name="my-accordion-2" /> 
        <div className="collapse-title ">
            <h2 className="font-bold text-[18px]">Apa jenis mentor yang akan membimbing peserta?</h2>
        </div>
            <div className="collapse-content text-[18px]"> 
            <p>Para mentor adalah ahli dalam bidangnya dan memiliki pengalaman yang luas. Mereka berkomitmen untuk memberikan panduan personal kepada peserta, membantu mereka mencapai tujuan karir dan pengembangan profesional.</p>
            </div>
    </div>
    </div>

{/* Still have Questions */}
    <div className="  ">
        <img></img>
        <h1 className=" pl-[700px] pt-[128px] text-xl font-bold">Still have questions?</h1>
        <p className="pl-[510px] text-gray-500 text-[18px] font-normal leading-[27px] ">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        
        <div className=" pl-[715px] h-[164px] mt-[32px]">
            <button><h1 className="px-[32px] py-[8px] w-[170px] h-[45px] text-center border-2 border-purple-300 rounded-full  font-bold text-purple-300 hover:bg-purple-100 hover:border-purple-100">Get in Touch</h1></button>
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
export default FirstHome