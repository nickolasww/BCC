import {Link} from "react-router-dom"
import Logo from "../images/Logo.svg"
import FacebookPurple from "../images/SocialMediaIcon/FacebookPurple.svg"
import InstagramPurple from "../images/SocialMediaIcon/InstagramPurple.svg"
import TiktokPurple from "../images/SocialMediaIcon/TiktokPurple.svg"
import TwitterPurple from "../images/SocialMediaIcon/TwitterPurple.svg"
import WhatsappPurple from "../images/SocialMediaIcon/WhatsappPurple.svg"

const FirstScholarship = () => { 
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
            <div className=" ml-[400px] mt-[70px] w-[285px] h-[354px] p-[32px] justify-items-center rounded-3xl border-2 shadow-sm bg-purple-100 ">
                <h2 className="font-bold pt-[26px] text-base">Beasiswa Sobat Bumi Pertamina 2024</h2>
                <p>February,2024-April,2024</p>
                <div className="flex ">
                    <p className=" flex pt-[31px]">Mahasiswa Aktif S1</p>
                    <div className="pt-[150px] ">
                        <p className="  px-[32px] py-[8px] bg-red-500 rounded-full text-white font-bold ">Close</p>
                    </div>
                </div>
            </div>
        </div>

        <div className=" absolute flex flex-col ">
            <div className=" ml-[700px] mt-[70px] w-[285px] h-[354px] p-[32px] justify-items-center rounded-3xl border-2 shadow-sm bg-purple-100 ">
                <h2 className="font-bold pt-[26px] text-base">Beasiswa Unggulan kemendikbud </h2>
                <p>Januray 22,2024-April,2024-February 24,2024</p>
                <div className="flex ">
                    <p className=" flex pt-[31px]">Mahasiswa Aktif S1</p>
                    <div className="pt-[150px] ">
                        <p className="  px-[32px] py-[8px] bg-green-500 rounded-full text-white font-bold ">Open</p>
                    </div>
                </div>
            </div>
        </div>

        <div className=" absolute flex flex-col ">
            <div className=" ml-[1000px] mt-[70px] w-[285px] h-[354px] p-[32px] justify-items-center rounded-3xl border-2 shadow-sm bg-purple-100 ">
                <h2 className="font-bold pt-[26px] text-base">Beasiswa Reguler LPDP</h2>
                <p>Januray 22,2024-April,2024-February 24,2024</p>
                <div className="flex ">
                    <p className=" flex pt-[31px]">S1</p>
                    <p className=" flex pt-[31px]">S2</p>
                    <div className="pt-[150px] ">
                        <p className="  px-[32px] py-[8px] bg-green-500 rounded-full text-white font-bold ">Open</p>
                    </div>
                </div>
            </div>
        </div>
{/* kolom 2  */}
        <div className=" absolute flex flex-col ">
            <div className=" ml-[400px] mt-[450px] w-[285px] h-[354px] p-[32px] justify-items-center rounded-3xl border-2 shadow-sm bg-purple-100 ">
                <h2 className="font-bold pt-[26px] text-base">Beasiswa Sobat Bumi Pertamina 2024</h2>
                <p>February,2024-April,2024</p>
                <div className="flex ">
                    <p className=" flex pt-[31px]">Mahasiswa Aktif S1</p>
                    <div className="pt-[150px] ">
                        <p className="  px-[32px] py-[8px] bg-green-500 rounded-full text-white font-bold ">Open</p>
                    </div>
                </div>
            </div>
        </div>

        <div className=" absolute flex flex-col ">
            <div className=" ml-[700px] mt-[450px] w-[285px] h-[354px] p-[32px] justify-items-center rounded-3xl border-2 shadow-sm bg-purple-100 ">
                <h2 className="font-bold pt-[26px] text-base">Beasiswa Sobat Bumi Pertamina 2024</h2>
                <p>February,2024-April,2024</p>
                <div className="flex ">
                    <p className=" flex pt-[31px]">Mahasiswa Aktif S1</p>
                    <div className="pt-[150px] ">
                        <p className="  px-[32px] py-[8px] bg-green-500 rounded-full text-white font-bold ">Open</p>
                    </div>
                </div>
            </div>
        </div>

        <div className=" absolute flex flex-col ">
            <div className=" ml-[1000px] mt-[450px] w-[285px] h-[354px] p-[32px] justify-items-center rounded-3xl border-2 shadow-sm bg-purple-100 ">
                <h2 className="font-bold pt-[26px] text-base">Beasiswa Sobat Bumi Pertamina 2024</h2>
                <p>February,2024-April,2024</p>
                <div className="flex ">
                    <p className=" flex pt-[31px]">Mahasiswa Aktif S1</p>
                    <div className="pt-[150px] ">
                        <p className="  px-[32px] py-[8px] bg-red-500 rounded-full text-white font-bold ">Close</p>
                    </div>
                </div>
            </div>
        </div>
{/* kolom 3 */}
        <div className=" absolute flex flex-col ">
            <div className=" ml-[400px] mt-[830px] w-[285px] h-[354px] p-[32px] justify-items-center rounded-3xl border-2 shadow-sm bg-purple-100 ">
                <h2 className="font-bold pt-[26px] text-base">Beasiswa Sobat Bumi Pertamina 2024</h2>
                <p>February,2024-April,2024</p>
                <div className="flex ">
                    <p className=" flex pt-[31px]">Mahasiswa Aktif S1</p>
                    <div className="pt-[150px] ">
                        <p className="  px-[32px] py-[8px] bg-red-500 rounded-full text-white font-bold ">Close</p>
                    </div>
                </div>
            </div>
        </div>

        <div className=" absolute flex flex-col ">
            <div className=" ml-[700px] mt-[830px] w-[285px] h-[354px] p-[32px] justify-items-center rounded-3xl border-2 shadow-sm bg-purple-100 ">
                <h2 className="font-bold pt-[26px] text-base">Beasiswa Sobat Bumi Pertamina 2024</h2>
                <p>February,2024-April,2024</p>
                <div className="flex ">
                    <p className=" flex pt-[31px]">Mahasiswa Aktif S1</p>
                    <div className="pt-[150px] ">
                        <p className="  px-[32px] py-[8px] bg-red-500 rounded-full text-white font-bold ">Close</p>
                    </div>
                </div>
            </div>
        </div>

        <div className=" absolute flex flex-col ">
            <div className=" ml-[1000px] mt-[830px] w-[285px] h-[354px] p-[32px] justify-items-center rounded-3xl border-2 shadow-sm bg-purple-100 ">
                <h2 className="font-bold pt-[26px] text-base">Beasiswa Sobat Bumi Pertamina 2024</h2>
                <p>February,2024-April,2024</p>
                <div className="flex ">
                    <p className=" flex pt-[31px]">Mahasiswa Aktif S1</p>
                    <div className="pt-[150px] ">
                        <p className="  px-[32px] py-[8px] bg-red-500 rounded-full text-white font-bold ">Close</p>
                    </div>
                </div>
            </div>
        </div>
{/* kolom 4 */}
        <div className=" absolute flex flex-col ">
            <div className=" ml-[400px] mt-[1210px] w-[285px] h-[354px] p-[32px] justify-items-center rounded-3xl border-2 shadow-sm bg-purple-100 ">
                <h2 className="font-bold pt-[26px] text-base">Beasiswa Sobat Bumi Pertamina 2024</h2>
                <p>February,2024-April,2024</p>
                <div className="flex ">
                    <p className=" flex pt-[31px]">Mahasiswa Aktif S1</p>
                    <div className="pt-[150px] ">
                        <p className="  px-[32px] py-[8px] bg-red-500 rounded-full text-white font-bold ">Close</p>
                    </div>
                </div>
            </div>
        </div>

        <div className=" absolute flex flex-col ">
            <div className=" ml-[700px] mt-[1210px] w-[285px] h-[354px] p-[32px] justify-items-center rounded-3xl border-2 shadow-sm bg-purple-100 ">
                <h2 className="font-bold pt-[26px] text-base">Beasiswa Sobat Bumi Pertamina 2024</h2>
                <p>February,2024-April,2024</p>
                <div className="flex ">
                    <p className=" flex pt-[31px]">Mahasiswa Aktif S1</p>
                    <div className="pt-[150px] ">
                        <p className="  px-[32px] py-[8px] bg-red-500 rounded-full text-white font-bold ">Close</p>
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
                <div className=" flex ml-[77px] mt-[71px] w-[355px] h-[200px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-Orange-100 ">
                    <h1></h1>
                </div>
                </div>

                <div className="absolute flex flex-col ">
                <div className="  ml-[500px] mt-[71px] w-[355px] h-[200px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-Orange-100 ">
                    <h1></h1>
                </div>
                </div>

                <div className="absolute flex flex-col ">
                <div className="  ml-[900px] mt-[71px] w-[355px] h-[200px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-Orange-100">
                    <h1></h1>
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
        <div className=" absolute flex-col ml-[90px] w-[234px] p-[32px] mt-[64px] items-start rounded-3xl border-2 border-gray-500 bg-orange-100 shadow-md">
            <div className="flex">
                <h1>Filter</h1>
                <p>Reset</p>
            </div>

            <div className="flex-col flex w-[300px]">
                <h1>Tipe Beasiswa</h1>
                <label><input type="checkbox"></input>Dalam Negeri</label>
                <label><input type="checkbox"></input>Dalam Negeri</label>
            </div>

            <div className="flex-col flex w-[300px]">
                <h1>Jenis Beasiswa</h1>
                <label><input type="checkbox"></input>Dalam Negeri</label>
                <label ><input type="checkbox"></input>Dalam Negeri</label>
            </div>

            <div className="flex-col flex w-[300px]">
                <h1>Category</h1>
                <label><input type="checkbox"></input>Dalam Negeri</label>
                <label><input type="checkbox"></input>Dalam Negeri</label>
                <label><input type="checkbox"></input>Dalam Negeri</label>
            </div>

            <div className="flex-col flex w-[300px]">
                <h1>Semester</h1>
                <label><input type="checkbox"></input>Dalam Negeri</label>
                <label><input type="checkbox"></input>Dalam Negeri</label>
                <label><input type="checkbox"></input>Dalam Negeri</label>
                <label><input type="checkbox"></input>Dalam Negeri</label>
                <label><input type="checkbox"></input>Dalam Negeri</label>
                <label><input type="checkbox"></input>Dalam Negeri</label>
                <label><input type="checkbox"></input>Dalam Negeri</label>
                <label><input type="checkbox"></input>Dalam Negeri</label>
                <label><input type="checkbox"></input>Dalam Negeri</label>
            </div>

            <div className="  px-[64px] py-[10px] mt-5 mb-4 rounded-full shadow-sm border-2 bg-darkOrange text-white font-semibold justify-items-center">
                <h1 className="text-[18px] text-center font-semibold leading-7">Apply</h1>
            </div>


        </div>




</>
)
}


export default FirstScholarship