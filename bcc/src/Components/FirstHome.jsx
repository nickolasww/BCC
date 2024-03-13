import Logo from "../images/Logo.svg"
import FotoHeader from "../images/FotoHeader.svg"
import Tanoto from "../images/Tanoto.svg"
import LPDP from "../images/LPDP.svg"
import Unggulan from "../images/Unggulan.svg"
import {Link} from "react-router-dom"

const FirstHome = () => { 
    return(
        <>
        {/* NavBar */}
        <div className="font-Poppins px-38 py-7 ">
            <div className="flex pl-20 space-x-1 text-center ">
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
        
        {/* Header */}
        <div className="font-Poppins h-screen w-screen bg-purple-100">
        <div className= "circlePosition w-[500px] h-[450px] bg-purple-300 rounded-[100%] absolute z-1 bottom-[25%] -left-[10%] translate-y-60 blur-[180px]"></div>
        <div className= "circlePosition w-[500px] h-[450px] bg-purple-300 rounded-[100%] absolute z-1 bottom-[25%] left-[70%] translate-y-60 blur-[180px]"></div>
            <section className= "absolute">\
                {/* Judul */}
                <div className="text-5.4xl font-extrabold pt-[100px] pl-[200px]">
                    <h1>We Help To Build </h1>
                    <h1>Your Dream</h1>
                </div>
                {/* sub judul */}
                <div className=" text-start flex text-xl pl-[200px] h-[50px] w-[590px] ">
                    <p>Get free scholarships for every level of education that every student who achieve for a bright future can get</p>
                </div>
                {/* tombol start dan learn more */}
                <div className="flex font-bold space-x-3 pl-[200px] pt-[100px] " >
                    <Link><h1 className=" bg-purple-300 rounded-full px-[32px] py-[13px] text-white font-bold  ">Start Now</h1></Link>
                    <Link><h1 className=" border-2 border-purple-300 rounded-full px-[32px] py-[13px] text-purple-300 font-bold">Learn More</h1></Link>
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
            <Link><h1 className="border-2 bg-purple-300 rounded-full px-[32px] py-[13px] text-white font-bold">View All</h1></Link>
            </div>
            {/* Judul */}
            <div className="pt-[50px] pl-[100px] text-3xl font-extrabold">
                <h1>Browse Top Scholarships for</h1>
                <h1 className="text-purple-300">Undergraduate Student</h1>
            </div>
            {/* card */}
        <div className="flex flex-col mt-[77px] ">
            <div className=" ml-[90px] w-[387px] h-[454px] p-[32px] justify-items-center rounded-3xl border-2 shadow-sm bg-purple-100 ">
                <img src={Tanoto}></img>
                <h2>Tanoto Foundation</h2>
                <p>January 22,2024-Februari 24,2024</p>
                <p>Mahasiswa Aktif S1</p>
                <p>Close</p>
            </div>
            <div className=" absolute ml-[522px] w-[387px] h-[454px] p-[32px] justify-items-center rounded-3xl border-2 shadow-sm bg-purple-100">
                <img src={Unggulan}></img>
                <h2>Beasiswa Unggulan By kemendikbud Indonesia</h2>
                <p>January 22,2024-Februari 24,2024</p>
                <p>Mahasiswa Aktif S1</p>
                <p>Close</p>
            </div>
            <div className="absolute ml-[950px] w-[387px] h-[454px] p-[32px] justify-items-center rounded-3xl border-2 shadow-sm bg-purple-100">
                <img src={LPDP}></img>
                <h2>Beasiswa Reguler LPDP</h2>
                <p>January 22,2024-Februari 24,2024</p>
                <p>Mahasiswa Aktif S1</p>
                <p>Close</p>
            </div>
        </div>
        </div>

        {/*  */}
        <div className="font-Poppins h-screen w-screen ">

        </div>
        </>
    )
}
export default FirstHome