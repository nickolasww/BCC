import {Link} from "react-router-dom"
import Logo from "../images/Logo.svg"

const FirstScholarship = () => { 
    return(
        <>
{/* Nav bar */}
<div className="sticky z-50 top-0 font-Poppins w-[1540px] px-42 py-7  bg-white">
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
    <h1 className="text-white font-extrabold w-[1100px] text-5.4xl text-center pt-[100px] pl-[350px] ml-[50px]">Find Your Dream Scholarship</h1>
    <p className="text-white ml-[400px] pl-[40px] pt-[10px] w-[739px] text-center text-2xl font-normal leading-8">When you're searching for a job, there are a few things you can do to get the most out of your search</p>
    <div className="pt-[32px] pl-[470px] " >
        <input className="rounded-full w-[660px] h-[50px] p-[16px] border-2 bg-transparent" type="text" placeholder="Cari Beasiswa"></input>
    </div>
</div>

{/*  */}
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