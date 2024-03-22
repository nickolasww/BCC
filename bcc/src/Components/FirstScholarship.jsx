import { Link } from "react-router-dom";

import FilterIcon from "../images/ScholarCard/FilterIcon.svg";
import Card1 from "../images/ScholarCard/Card1.svg";
import Card2 from "../images/ScholarCard/Card2.svg";
import Card3 from "../images/ScholarCard/Card3.svg";
import Card4 from "../images/ScholarCard/Card4.svg";
import Card5 from "../images/ScholarCard/Card5.svg";
import Card6 from "../images/ScholarCard/Card6.svg";
import Card7 from "../images/ScholarCard/Card7.svg";
import Card8 from "../images/ScholarCard/Card8.svg";
import LPDP from "../images/LPDP.svg";
import Unggulan from "../images/Unggulan.svg";
import { useEffect, useState } from "react";
import ScholarshipPortofolio from "../Pages/ScholarshipPortofolio";
import NavBar from "./ReuseAble/NavBar";
import Footer from "./ReuseAble/Footer";
import axios from "axios";

const FirstScholarship = () => {
  const baseUrl = "https://schofinity-c284f28bf9dd.herokuapp.com/v1";
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
  const [scho, setscho] = useState([]);

  return (
    <>
      <div>
        </div>
      ;{/* Nav bar */}
      <NavBar />
      {/* Find your Dream Scholarship */}
      <div className=" font-Poppins w-screen h-screen bg-purple-300">
        <h1 className="text-white font-extrabold w-[1100px] text-5.4xl text-center pt-[230px] pl-[350px] ml-[50px]">
          Find Your Dream Scholarship
        </h1>
        <p className="text-white ml-[400px] pl-[40px] pt-[10px] w-[739px] text-center text-2xl font-normal leading-8">
          When you're searching for a job, there are a few things you can do to
          get the most out of your search
        </p>
        <div className="pt-[32px] pl-[470px] ">
          <input
            className="rounded-full w-[660px] h-[50px] p-[16px] border-2 bg-transparent"
            type="text"
            placeholder="Cari Beasiswa"
          ></input>
        </div>
      </div>
      {/* judul */}
      <div>
        <h1 className="font-bold text-3xl ml-[77px] pt-[64px]">
          Recommended Scholarship
        </h1>
        <p className="ml-[77px] pt-[6px]">
          Explore Suggested scholarship searches
        </p>
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
          <img
            className=" absolute -mt-[20px] -ml-[15px] w-[249px] h-[187px]"
            src={Card1}
          ></img>
          <h2 className="font-bold pt-[175px] text-[14px]">
            Beasiswa Sobat Bumi Pertamina 2024
          </h2>
          <p className="text-[12px]">February,2024-April,2024</p>
          <div className="flex ">
            <div className="pt-[30px]  flex ">
              <p className=" text-[11px]  py-[5px] w-[120px] text-center bg-white rounded-full ">
                Mahasiswa Aktif S1
              </p>
            </div>
            <div className="pt-[30px] ml-[50px]">
              <p className="  px-[16px] py-[4px] bg-red-500 rounded-full text-white font-bold text-[14px] ">
                Close
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute flex flex-col ">
        <div className=" ml-[700px] mt-[70px] w-[285px] h-[354px] p-[32px] justify-items-center border-purple-300 rounded-3xl border-2 shadow-sm bg-purple-100 ">
          <img
            className=" absolute -mt-[20px] -ml-[15px] w-[249px] h-[187px]"
            src={Unggulan}
          ></img>
          <h2 className="font-bold pt-[175px] text-[14px]">
            Beasiswa Sobat Bumi Pertamina 2024
          </h2>
          <p className="text-[12px]">February,2024-April,2024</p>
          <div className="flex ">
            <div className="pt-[30px]  flex ">
              <p className=" text-[11px]  py-[5px] w-[120px] text-center bg-white rounded-full ">
                Mahasiswa Aktif S1
              </p>
            </div>
            <div className="pt-[30px] ml-[50px]">
              <p className="  px-[16px] py-[4px] bg-success rounded-full text-white font-bold text-[14px] ">
                Open
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="  flex flex-col ">
        <button>
          <Link to="/Scholarship/BeasiswaLPDP">
            <div className=" ml-[1000px] mt-[70px] w-[285px] h-[354px] p-[32px] justify-items-center border-purple-300 rounded-3xl border-2 shadow-sm bg-purple-100 ">
              <img
                className=" cursor-pointer absolute -mt-[20px] -ml-[15px] w-[249px] h-[187px]"
                src={LPDP}
              ></img>
              <h2 className="font-bold pt-[175px] text-[14px] text-start">
                Beasiswa Sobat Bumi Pertamina 2024
              </h2>
              <p className="text-[12px] text-start">February,2024-April,2024</p>
              <div className="flex ">
                <div className="pt-[30px]  flex space-x-[10px]">
                  <p className=" text-[11px]  py-[5px] w-[30px] text-center bg-white rounded-full ">
                    S1
                  </p>
                  <p className=" text-[11px]  py-[5px] w-[30px] text-center bg-white rounded-full ">
                    S2
                  </p>
                </div>
                <div className="pt-[30px] ml-[90px]">
                  <p className="  px-[16px] py-[4px] bg-success rounded-full text-white font-bold text-[14px] ">
                    Open
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </button>
      </div>
      {/* kolom 2  */}
      <div className="  flex flex-col -mt-[400px]">
        <div className=" ml-[400px] mt-[450px] w-[285px] h-[354px] p-[32px] justify-items-center border-purple-300 rounded-3xl border-2 shadow-sm bg-purple-100 ">
          <img
            className=" absolute -mt-[20px] -ml-[15px] w-[249px] h-[187px]"
            src={LPDP}
          ></img>
          <h2 className="font-bold pt-[175px] text-[14px]">
            Beasiswa Sobat Bumi Pertamina 2024
          </h2>
          <p className="text-[12px]">February,2024-April,2024</p>
          <div className="flex ">
            <div className="pt-[30px]  flex space-x-[10px]">
              <p className=" text-[11px]  py-[5px] w-[30px] text-center bg-white rounded-full ">
                S1
              </p>
              <p className=" text-[11px]  py-[5px] w-[30px] text-center bg-white rounded-full ">
                S2
              </p>
            </div>
            <div className="pt-[30px] ml-[90px]">
              <p className="  px-[16px] py-[4px] bg-success rounded-full text-white font-bold text-[14px] ">
                Open
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col -mt-[805px]">
        <div className=" ml-[700px] mt-[450px] w-[285px] h-[354px] p-[32px] justify-items-center border-purple-300 rounded-3xl border-2 shadow-sm bg-purple-100 ">
          <img
            className=" absolute -mt-[20px] -ml-[15px] w-[249px] h-[187px]"
            src={Card2}
          ></img>
          <h2 className="font-bold pt-[175px] text-[14px]">
            Beasiswa Sobat Bumi Pertamina 2024
          </h2>
          <p className="text-[12px]">February,2024-April,2024</p>
          <div className="flex ">
            <div className="pt-[30px]  flex ">
              <p className=" text-[11px]  py-[5px] w-[120px] text-center bg-white rounded-full ">
                Mahasiswa Aktif S1
              </p>
            </div>
            <div className="pt-[30px] ml-[50px]">
              <p className="  px-[16px] py-[4px] bg-success rounded-full text-white font-bold text-[14px] ">
                Open
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col -mt-[805px]">
        <div className=" ml-[1000px] mt-[450px] w-[285px] h-[354px] p-[32px] justify-items-center border-purple-300 rounded-3xl border-2 shadow-sm bg-purple-100 ">
          <img
            className=" absolute -mt-[20px] -ml-[15px] w-[249px] h-[187px]"
            src={Card3}
          ></img>
          <h2 className="font-bold pt-[175px] text-[14px]">
            Beasiswa Sobat Bumi Pertamina 2024
          </h2>
          <p className="text-[12px]">February,2024-April,2024</p>
          <div className="flex ">
            <div className="pt-[30px]  flex space-x-[10px]">
              <p className=" text-[11px]  py-[5px] w-[30px] text-center bg-white rounded-full ">
                S1
              </p>
            </div>
            <div className="pt-[30px] ml-[130px]">
              <p className="  px-[16px] py-[4px] bg-success rounded-full text-white font-bold text-[14px] ">
                Open
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* kolom 3 */}
      <div className=" flex flex-col -mt-[780px]">
        <div className=" ml-[400px] mt-[830px] w-[285px] h-[354px] p-[32px] justify-items-center border-purple-300 rounded-3xl border-2 shadow-sm bg-purple-100 ">
          <img
            className=" absolute -mt-[20px] -ml-[15px] w-[249px] h-[187px]"
            src={Card4}
          ></img>
          <h2 className="font-bold pt-[175px] text-[14px]">
            Beasiswa Sobat Bumi Pertamina 2024
          </h2>
          <p className="text-[12px]">February,2024-April,2024</p>
          <div className="flex ">
            <div className="pt-[30px]  flex space-x-[10px]">
              <p className=" text-[11px]  py-[5px] w-[30px] text-center bg-white rounded-full ">
                S1
              </p>
              <p className=" text-[11px]  py-[5px] w-[30px] text-center bg-white rounded-full ">
                S2
              </p>
            </div>
            <div className="pt-[30px] ml-[90px]">
              <p className="  px-[16px] py-[4px] bg-success rounded-full text-white font-bold text-[14px] ">
                Open
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="  flex flex-col -mt-[1185px]">
        <div className=" ml-[700px] mt-[830px] w-[285px] h-[354px] p-[32px] justify-items-center border-purple-300 rounded-3xl border-2 shadow-sm bg-purple-100 ">
          <img
            className=" absolute -mt-[20px] -ml-[15px] w-[249px] h-[187px]"
            src={Card5}
          ></img>
          <h2 className="font-bold pt-[175px] text-[14px]">
            Beasiswa Sobat Bumi Pertamina 2024
          </h2>
          <p className="text-[12px]">February,2024-April,2024</p>
          <div className="flex ">
            <div className="pt-[30px]  flex ">
              <p className=" text-[11px]  py-[5px] w-[120px] text-center bg-white rounded-full ">
                Mahasiswa Aktif S1
              </p>
            </div>
            <div className="pt-[30px] ml-[50px]">
              <p className="  px-[16px] py-[4px] bg-error rounded-full text-white font-bold text-[14px] ">
                Close
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col -mt-[1185px]">
        <div className=" ml-[1000px] mt-[830px] w-[285px] h-[354px] p-[32px] justify-items-center border-purple-300 rounded-3xl border-2 shadow-sm bg-purple-100 ">
          <img
            className=" cursor-pointer absolute -mt-[20px] -ml-[15px] w-[249px] h-[187px]"
            src={Card6}
          ></img>
          <h2 className="font-bold pt-[175px] text-[14px]">
            Beasiswa Sobat Bumi Pertamina 2024
          </h2>
          <p className="text-[12px]">February,2024-April,2024</p>
          <div className="flex ">
            <div className="pt-[30px]  flex ">
              <p className=" text-[11px]  py-[5px] w-[120px] text-center bg-white rounded-full ">
                Mahasiswa Aktif S1
              </p>
            </div>
            <div className="pt-[30px] ml-[50px]">
              <p className="  px-[16px] py-[4px] bg-success rounded-full text-white font-bold text-[14px] ">
                Open
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* kolom 4 */}
      <div className="  flex flex-col -mt-[1150px] ">
        <div className=" ml-[400px] mt-[1210px] w-[285px] h-[354px] p-[32px] justify-items-center border-purple-300 rounded-3xl border-2 shadow-sm bg-purple-100 ">
          <img
            className=" absolute -mt-[20px] -ml-[15px] w-[249px] h-[187px]"
            src={Card7}
          ></img>
          <h2 className="font-bold pt-[175px] text-[14px]">
            Beasiswa Sobat Bumi Pertamina 2024
          </h2>
          <p className="text-[12px]">February,2024-April,2024</p>
          <div className="flex ">
            <div className="pt-[30px]  flex space-x-[10px]">
              <p className=" text-[11px]  py-[5px] w-[30px] text-center bg-white rounded-full ">
                S1
              </p>
              <p className=" text-[11px]  py-[5px] w-[30px] text-center bg-white rounded-full ">
                S2
              </p>
              <p className=" text-[11px]  py-[5px] w-[60px] text-center bg-white rounded-full ">
                Jepang
              </p>
            </div>
            <div className="pt-[30px] ml-[30px]">
              <p className="  px-[16px] py-[4px] bg-success rounded-full text-white font-bold text-[14px] ">
                Open
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col -mt-[1560px] ">
        <div className=" ml-[700px] mt-[1210px] w-[285px] h-[354px] p-[32px] justify-items-center border-purple-300 rounded-3xl border-2 shadow-sm bg-purple-100 ">
          <img
            className=" absolute -mt-[20px] -ml-[15px] w-[249px] h-[187px]"
            src={Card8}
          ></img>
          <h2 className="font-bold pt-[175px] text-[14px]">
            Beasiswa Sobat Bumi Pertamina 2024
          </h2>
          <p>February,2024-April,2024</p>
          <div className="flex ">
            <div className="pt-[30px]  flex space-x-[10px]">
              <p className=" text-[11px]  py-[5px] w-[120px] text-center bg-white rounded-full">
                Mahasiswa Aktif S1
              </p>
            </div>
            <div className="pt-[30px] ml-[50px]">
              <p className="  px-[16px] py-[4px] bg-success rounded-full text-white font-bold text-[14px] ">
                Open
              </p>
            </div>
          </div>
        </div>
        {/* slide Number  */}
        <div className="flex space-x-[10px] pt-[64px] pl-[1150px]">
          <h1 className="px-[15px] py-[8px]  justify-items-center bg-purple-300 rounded-full text-white font-bold ">
            1
          </h1>
          <h1 className="px-[15px] py-[8px]  justify-items-center bg-purple-300 rounded-full text-white font-bold ">
            2
          </h1>
          <h1 className="px-[15px] py-[8px]  justify-items-center bg-purple-300 rounded-full text-white font-bold ">
            3
          </h1>
        </div>

        {/* testimoni */}
        <div className="h-screen w-screen pt-[128px]">
          <h1 className="pl-[700px]">Testimonials</h1>
          <h1 className="pl-[550px] text-4xl font-extrabold">
            What Our Alumni Say
          </h1>
          \
          <div className="absolute flex flex-col ">
            <div className=" ml-[77px] mt-[71px] w-[355px] h-[200px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-Orange-100 ">
              <p className="text-[12px]">
                "Beasiswa ini bukan hanya membantu saya secara finansial selama
                kuliah, tetapi juga membuka pintu peluang karier yang luar
                biasa. Terima kasih atas dukungan dan kesempatan yang
                diberikan!"
              </p>
              <h1 className="text-[14px] font-bold pt-[16px]">
                Sabrina Kamila
              </h1>
              <p className="text-[12px] text-darkOrange">Beasiswa LPDP</p>
            </div>
          </div>
          <div className="absolute flex flex-col ">
            <div className="  ml-[500px] mt-[71px] w-[355px] h-[200px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-Orange-100 ">
              <p className="text-[12px]">
                "Beasiswa ini bukan hanya membantu saya secara finansial selama
                kuliah, tetapi juga membuka pintu peluang karier yang luar
                biasa. Terima kasih atas dukungan dan kesempatan yang
                diberikan!"
              </p>
              <h1 className="text-[14px] font-bold pt-[16px]">Guest</h1>
              <p className="text-[12px] text-darkOrange">Beasiswa Tanoto</p>
            </div>
          </div>
          <div className="absolute flex flex-col ">
            <div className="  ml-[900px] mt-[71px] w-[355px] h-[200px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-Orange-100">
              <p className="text-[12px]">
                "Beasiswa ini bukan hanya membantu saya secara finansial selama
                kuliah, tetapi juga membuka pintu peluang karier yang luar
                biasa. Terima kasih atas dukungan dan kesempatan yang
                diberikan!"
              </p>
              <h1 className="text-[14px] font-bold pt-[16px]">Guest </h1>
              <p className="text-[12px] text-darkOrange">Beasiswa Unggulan</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
      {/* Filter */}
      <div className=" absolute flex-col ml-[90px] w-[234px] p-[32px] -mt-[2770px] items-start rounded-3xl border-2 border-gray-500 bg-orange-100 shadow-md">
        <div className="flex ">
          <img src={FilterIcon}></img>
          <h1 className="text-[18px] font-bold">Filter</h1>
          <p className="text-[12px] font-normal text-darkOrange pl-[80px] pt-[5px]">
            Reset
          </p>
        </div>

        <div className="flex-col flex w-[300px] pt-[12px]">
          <h1 className="text-[18px] font-bold">Tipe Beasiswa</h1>
          <label>
            <input type="radio"></input>Dalam Negeri
          </label>
          <label>
            <input type="radio"></input>Luar Negeri
          </label>
        </div>

        <div className="flex-col flex w-[300px] pt-[12px]">
          <h1 className="text-[18px] font-bold">Jenis Beasiswa</h1>
          <label>
            <input type="radio"></input>Pemerintah
          </label>
          <label>
            <input type="radio"></input>Swasta
          </label>
        </div>

        <div className="flex-col flex w-[300px] pt-[12px]">
          <h1 className="text-[18px] font-bold">Category</h1>
          <label>
            <input type="radio"></input>Beasiswa Umum
          </label>
          <label>
            <input type="radio"></input>Prestasi Akademik
          </label>
          <label>
            <input type="radio"></input>Non-Akademik
          </label>
        </div>

        <div className="flex-col flex w-[300px] pt-[22px]">
          <h1 className="text-[18px] font-bold">Semester</h1>
        </div>

        <div className="  px-[64px] py-[10px] mt-5 mb-4 rounded-full shadow-sm border-2 bg-darkOrange text-white font-semibold justify-items-center">
          <button>
            <h1 className="text-[18px] text-center font-semibold leading-7">
              Apply
            </h1>
          </button>
        </div>
      </div>
    </>
  );
};

export default FirstScholarship;
