import { Link } from "react-router-dom";
import Logo from "../images/Logo.svg";
import BoothHeader from "../images/HeaderPhoto/BoothHeader.svg";

import Cewe from "../images/BenefitsIcon/Cewe.svg";
import Computer from "../images/BenefitsIcon/Computer.svg";
import Jempol from "../images/BenefitsIcon/Jempol.svg";
import Waktu from "../images/BenefitsIcon/Waktu.svg";

import W1 from "../images/PopularWorkshop/W1.svg";
import W2 from "../images/PopularWorkshop/W2.svg";
import W3 from "../images/PopularWorkshop/W3.svg";
import W4 from "../images/PopularWorkshop/W4.svg";
import W5 from "../images/PopularWorkshop/W5.svg";
import W6 from "../images/PopularWorkshop/W6.svg";
import W7 from "../images/PopularWorkshop/W7.svg";

import B1 from "../images/Popular Bootcamp/B1.svg";
import B2 from "../images/Popular Bootcamp/B2.svg";
import B3 from "../images/Popular Bootcamp/B3.svg";
import B4 from "../images/Popular Bootcamp/B4.svg";

import M1 from "../images/Popular Mentoring/M1.svg";
import M2 from "../images/Popular Mentoring/M2.svg";
import M3 from "../images/Popular Mentoring/M3.svg";
import M4 from "../images/Popular Mentoring/M4.svg";

import Test1 from "../images/Boothtestimoni/Test1.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./ReuseAble/NavBar";
import Footer from "./ReuseAble/Footer";

const FirstBoothcamp = () => {
  const [classes, setclasses] = useState([]);

  useEffect(() => {
    axios
      .get("https://schofinity-c284f28bf9dd.herokuapp.com/v1/classes?typeId=2")
      .then((res) => setclasses(res.data.data))
      .catch((err) => console.log(err));
  }, []);


  const [Booth , setBoot] = useState([]); 

  useEffect(() => {
    axios.get("https://schofinity-c284f28bf9dd.herokuapp.com/v1/classes?typeId=1")
    .then((res) => setBoot (res.data.data))
    .catch((err) => console.log(err));
  });

  return (
    <>
      {/* Nav bar */}
      <NavBar />

      {/* Header */}
      <div className="h-screen w-screen bg-purple-300 font-Poppins">
        <img className="absolute pl-[900px] pt-[150px]" src={BoothHeader}></img>
        <h1 className="pl-[100px] pt-[200px] w-[600px] text-[60px] font-extrabold text-white">
          Find Your Perfect Mentor
        </h1>
        <p className=" pl-[100px] text-white text-[18px] w-[520px] pt-[7px]">
          We help you find perfect mentor for 1-on-1 lessons. It is completely
          free and private
        </p>

        <div className="pt-[64px] pl-[100px] ">
          <input
            className="rounded-full w-[500px] h-[50px] p-[16px] border-2 bg-transparent"
            type="text"
            placeholder="Cari Beasiswa"
          ></input>
        </div>
      </div>

      <h1 className=" pl-[690px] pt-[64px] tetx-[18px] font-normal">
          Why Choose Us{" "}
        </h1>
        <h1 className="w-[1050px] pl-[490px] text-[38px] font-extrabold text-center">
          Benefits of Online tutoring service with us
        </h1>

        <div className="absolute flex flex-col ">
          <div className="  ml-[100px] mt-[64px] w-[285px] h-[229px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-purple-100 ">
            <div className="bg-purple-300 rounded-xl w-[50px] h-[50px] ">
              <img className="pt-[10px] pl-[10px]" src={Cewe}></img>
            </div>
            <h1 className="font-bold text-[14px] pt-[16px]">
              Tutor Berkualitas Tinggi
            </h1>
            <p className="text-[12px] pt-[16px]">
              Kami menawarkan tim tutor yang terdiri dari para ahli di
              bidangnya. Setiap tutor telah melewati proses seleksi ketat dan
              memiliki kualifikasi yang relevan.{" "}
            </p>
          </div>
        </div>

        <div className="absolute flex flex-col ">
          <div className="  ml-[430px] mt-[64px] w-[285px] h-[229px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-purple-100 ">
            <div className="bg-purple-300 rounded-xl w-[50px] h-[50px] ">
              <img className="pt-[10px] pl-[10px]" src={Waktu}></img>
            </div>
            <h1 className="font-bold text-[14px] pt-[16px]">
              Fleksibilitas Jadwal
            </h1>
            <p className="text-[12px] pt-[16px]">
              Kami memahami bahwa setiap individu memiliki kebutuhan jadwal yang
              berbeda. Oleh karena itu, kami menyediakan layanan tutor online
              dengan jadwal yang fleksibel
            </p>
          </div>
        </div>

        <div className="absolute flex flex-col ">
          <div className="  ml-[760px] mt-[64px] w-[285px] h-[229px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-purple-100 ">
            <div className="bg-purple-300 rounded-xl w-[50px] h-[50px] ">
              <img className="pt-[10px] pl-[10px]" src={Jempol}></img>
            </div>
            <h1 className="font-bold text-[14px] pt-[16px]">
              Pendekatan Personalisasi
            </h1>
            <p className="text-[12px] pt-[16px]">
              Kami mengakui bahwa setiap siswa memiliki gaya belajar yang
              berbeda.
            </p>
          </div>
        </div>

        <div className="absolute flex flex-col ">
          <div className="  ml-[1090px] mt-[64px] w-[285px] h-[229px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-purple-100 ">
            <div className="bg-purple-300 rounded-xl w-[50px] h-[50px] ">
              <img className="pt-[10px] pl-[10px]" src={Computer}></img>
            </div>
            <h1 className="font-bold text-[14px] pt-[16px]">
              Teknologi Interaktif
            </h1>
            <p className="text-[12px] pt-[16px]">
              Dengan menggunakan platform online yang canggih, kami menyediakan
              pengalaman belajar interaktif.{" "}
            </p>
          </div>
        </div>

        <div className="pt-[400px] absolute">
          <h1 className="text-[32px] font-extrabold pl-[100px]">
            Workshop Terbaru
          </h1>
          <p className="text-[18px] font-normal pl-[100px]">
            Enhance your knowledge and skills
          </p>
        </div>

        <div className=" pl-[1150px] pt-[400px] ">
          <button>
            <Link to="">
              <h1 className="border-[3px] border-purple-300 text-purple-300 font-bold rounded-full h-[50px] px-[32px] py-[12px]">
                All Workshop
              </h1>
            </Link>
          </button>
        </div>

      <div>
        {classes.map((c, i) => {
          return (
            <div className=" ">
            <div className=" flex flex-col ml-[100px] mt-[100px] w-[270px] h-[380px] p-[32px]  rounded-3xl shadow-sm border-gray-300 border-2">
            <img
              className="-mt-[32px] w-[268px] h-[200px] -ml-[32px] absolute rounded-t-[20px]"
              src={"https://qesyijmpdyoqrlezgwqg.supabase.co/storage/v1/object/public/classes/" + c.image}
            ></img>
            <div className="">
              <h1 className="pt-[170px] w-[200px] font-bold text-[14px]">
                {c.name}
              </h1>
              <p className="text-[12px]">{c.startDate} {c.endDate}</p>
              <p className="text-[12px] ">Rp {c.price}</p>
              <div className=" pt-[15px] -pl-[100px]">
                <button>
                  <Link to="/ProgramBoothcamp/StudyAbroad">
                    <h1 className=" bg-purple-300 rounded-full px-[80px] py-[5px] p-[16px] text-white font-bold hover:bg-purple-100 hover:text-purple-300">
                      Daftar
                    </h1>
                  </Link>
                </button>
              </div>
            </div>
          </div>
          </div>

          );
        })}
      </div>


          {/*  Popular BoothCamp*/}
          <div className="absolute mt-[100px]">
          <h1 className="text-[32px] font-extrabold pl-[100px]">
            Boothcamp Terbaru
          </h1>
          <p className="text-[18px] font-normal pl-[100px] ">
            Enhance your knowledge and skills
          </p>
        </div>

        <div className="absolute pl-[1150px] mt-[100px] ">
          <h1 className="border-[3px] border-purple-300 text-purple-300 font-bold rounded-full h-[50px] px-[32px] py-[12px]">
            All Boothcamp
          </h1>
        </div>





      <div>
        {Booth.map((b, i) => {
          return( 
            <div className=" ">
            <div className=" flex flex-col ml-[100px] mt-[200px] w-[270px] h-[380px] p-[32px]  rounded-3xl shadow-sm border-gray-300 border-2">
            <img
              className="-mt-[32px] w-[268px] h-[200px] -ml-[32px] absolute rounded-t-[20px]"
              src={"https://qesyijmpdyoqrlezgwqg.supabase.co/storage/v1/object/public/classes/" + b.image}
            ></img>
            <div className="">
              <h1 className="pt-[170px] w-[200px] font-bold text-[14px]">
                {b.name}
              </h1>
              <p className="text-[12px]">{b.startDate} {b.endDate}</p>
              <p className="text-[12px] ">Rp {b.price}</p>
              <div className=" pt-[15px] -pl-[100px]">
                <button>
                  <Link to="/ProgramBoothcamp/StudyAbroad">
                    <h1 className=" bg-purple-300 rounded-full px-[80px] py-[5px] p-[16px] text-white font-bold hover:bg-purple-100 hover:text-purple-300">
                      Daftar
                    </h1>
                  </Link>
                </button>
              </div>
            </div>
          </div>
          </div>
          )



        })}
      </div>

      {/* popular WorkShop */}
      <div className="w-screen h-screen font-Poppins">

        {/* Mentoring 1 0n 1 */}
        <div className=" absolute pt-[70px]">
          <h1 className="text-[32px] font-extrabold pl-[100px]">
            mentoring 1-on-1
          </h1>
          <p className="text-[18px] font-normal pl-[100px] ">
            Enhance your knowledge and skills
          </p>
        </div>
        <div className=" pl-[1200px] pt-[70px] absolute">
          <h1 className="border-[3px] border-purple-300 text-purple-300 font-bold rounded-full h-[50px] px-[32px] py-[12px]">
            All mentor
          </h1>
        </div>
        {/* Card */}
        <div className="  pt-[1700px] pl-[100px] ">
          <div className="  -mt-[1450px] w-[270px] h-[380px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
            <img
              className="-mt-[41px] w-[270px] h-[238px] -ml-[32px] absolute"
              src={M1}
            ></img>
            <div className="">
              <h1 className="pt-[200px] w-[200px] font-bold text-[14px]">
                Strategies for Compelling Writing{" "}
              </h1>
              <p className="text-[12px]">21 Maret 2024</p>
              <p className="text-[12px] ">Rp 25.000</p>
              <div className=" pt-[15px] -pl-[100px]">
                <h1 className=" bg-purple-300 rounded-full px-[80px] py-[5px] p-[16px] text-white font-bold">
                  Daftar
                </h1>
              </div>
            </div>
          </div>

          <div className=" ml-[330px] -mt-[380px] w-[270px] h-[380px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
            <img
              className="-mt-[41px] w-[270px] h-[238px] -ml-[32px] absolute"
              src={M2}
            ></img>
            <div className="">
              <h1 className="pt-[200px] w-[200px] font-bold text-[14px]">
                Ace Your Scholarship Interview{" "}
              </h1>
              <p className="text-[12px]">21 Maret 2024</p>
              <p className="text-[12px] ">Rp 25.000</p>
              <div className=" pt-[15px] -pl-[100px]">
                <h1 className=" bg-purple-300 rounded-full px-[80px] py-[5px] p-[16px] text-white font-bold">
                  Daftar
                </h1>
              </div>
            </div>
          </div>

          <div className="  ml-[650px] -mt-[380px] w-[270px] h-[380px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
            <img
              className="-mt-[41px] w-[270px] h-[238px] -ml-[32px] absolute"
              src={M3}
            ></img>
            <div className="">
              <h1 className="pt-[200px] w-[250px] font-bold text-[14px]">
                Winning Startegies for Beating Scholarship Deadlines
              </h1>
              <p className="text-[12px]">21 Maret 2024</p>
              <p className="text-[12px] ">Rp 25.000</p>
              <div className=" pt-[15px] -pl-[100px]">
                <h1 className=" bg-purple-300 rounded-full px-[80px] py-[5px] p-[16px] text-white font-bold">
                  Daftar
                </h1>
              </div>
            </div>
          </div>

          <div className="  ml-[970px] -mt-[380px] w-[270px] h-[380px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
            <img
              className="-mt-[41px] w-[270px] h-[238px] -ml-[32px] absolute"
              src={M4}
            ></img>
            <div className="">
              <h1 className="pt-[200px] w-[200px] font-bold text-[14px]">
                Effective Communication in Scholarship Interviews
              </h1>
              <p className="text-[12px]">21 Maret 2024</p>
              <p className="text-[12px] ">Rp 25.000</p>
              <div className=" pt-[15px] -pl-[100px]">
                <button>
                  <Link to="/ProgramBoothcamp/ProgramMentoring">
                    <h1 className=" bg-purple-300 rounded-full px-[80px] py-[5px] p-[16px] text-white font-bold">
                      Daftar
                    </h1>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

     
     

      <div className="h-screen w-screen font-Poppins ">
        <div className="pt-[10px]">
          <h1 className="pl-[690px] font-normal text-[18px]">Testimonials</h1>
          <h1 className="pl-[550px] w-[950px] font-extrabold text-[32px] text-center">
            What Our student say about out program
          </h1>
        </div>

        <div className="absolute ml-[100px] mt-[100px] w-[390px] h-[340px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
          <img className="absolute -mt-[70px]" src={Test1}></img>
          <p className="text-[14px] pt-[30px] text-justify">
            Saya sangat beruntung dapat mengikuti bootcamp ini! Instruktur
            sangat berkompeten dan memberikan materi dengan sangat jelas.
            Mentoringnya juga luar biasa, saya mendapatkan panduan dan dukungan
            yang tak ternilai dari mentor saya. Hasilnya, saya sekarang memiliki
            keterampilan baru dan percaya diri untuk menghadapi proyek-proyek
            yang lebih kompleks. Terima kasih bootcamp dan mentor!
          </p>
          <h1 className="pt-[35px] font-bold text-[14px]">Karian Lynn</h1>
          <p className="text-[14px]">Beasiswa Pendidikan Indonesia </p>
        </div>

        <div className="absolute ml-[550px] mt-[100px] w-[390px] h-[340px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
          <img className="absolute -mt-[70px]" src={Test1}></img>
          <p className="text-[14px] pt-[30px] text-justify">
            Saya sangat beruntung dapat mengikuti bootcamp ini! Instruktur
            sangat berkompeten dan memberikan materi dengan sangat jelas.
            Mentoringnya juga luar biasa, saya mendapatkan panduan dan dukungan
            yang tak ternilai dari mentor saya. Hasilnya, saya sekarang memiliki
            keterampilan baru dan percaya diri untuk menghadapi proyek-proyek
            yang lebih kompleks. Terima kasih bootcamp dan mentor!
          </p>
          <h1 className="pt-[35px] font-bold text-[14px]">Karian Lynn</h1>
          <p className="text-[14px]">Beasiswa Pendidikan Indonesia </p>
        </div>

        <div className="absolute ml-[1000px] mt-[100px] w-[390px] h-[340px] p-[32px] justify-items-center rounded-3xl shadow-sm border-gray-300 border-2 ">
          <img className="absolute -mt-[70px]" src={Test1}></img>
          <p className="text-[14px] pt-[30px] text-justify">
            Saya sangat beruntung dapat mengikuti bootcamp ini! Instruktur
            sangat berkompeten dan memberikan materi dengan sangat jelas.
            Mentoringnya juga luar biasa, saya mendapatkan panduan dan dukungan
            yang tak ternilai dari mentor saya. Hasilnya, saya sekarang memiliki
            keterampilan baru dan percaya diri untuk menghadapi proyek-proyek
            yang lebih kompleks. Terima kasih bootcamp dan mentor!
          </p>
          <h1 className="pt-[35px] font-bold text-[14px]">Karian Lynn</h1>
          <p className="text-[14px]">Beasiswa Pendidikan Indonesia </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default FirstBoothcamp;
