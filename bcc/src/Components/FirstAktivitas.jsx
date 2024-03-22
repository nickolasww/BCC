import W1 from "../images/PopularWorkshop/W1.svg";
import W7 from "../images/PopularWorkshop/W7.svg";
import B1 from "../images/Popular Bootcamp/B1.svg";
import NavBar from "./ReuseAble/NavBar";
import Footer from "./ReuseAble/Footer";
const FirstAktivitas = () => {
  return (
    <>
      {/* Nav bar */}
      <NavBar />

      <div className=" font-Poppins ml-[100px] mt-[200px] w-[250px] h-[390px] px-[32px] py-[64px] justify-items-center border-2 border-gray-500 rounded-3xl shadow-sm bg-purple-100">
        {/* Navigation profile */}
        <div className="absolute">
          <h1 className="font-bold text-[24px] -mt-[20px]">Navigasi Profile</h1>
          <ul className="space-y-[16px]  text-[18px] pt-[40px] font-bold">
            <li>Profile Saya</li>
            <li>Kalender Beasiswa</li>
            <li>Notifikasi</li>
            <li>Aktivitas Saya</li>
            <li>Riwayat Transaksi</li>
          </ul>
        </div>

        <div className="absolute pl-[300px] -mt-[80px] space-y-[20px]">
          <h1 className="font-bold text-[32px]">Aktivitas Saya</h1>
        </div>

        <div className="pt-[50px] pl-[300px] font-Poppins">
          {/* 1 */}
          <div className="border-[2px] border-black w-[811px] h-[200px] px-[16px] py-[24px] rounded-t-lg">
            <div className=" ">
              <img className="absolute w-[200px] h-[154px]" src={B1}></img>
            </div>
            <h1 className=" w-[700px] font-extrabold text-[24px] pl-[200px] pt-[50px]">
              Study Abroad Mini Bootcamp
            </h1>
            <p className=" w-[700px] font-normal text-[20px] pl-[200px]">
              Periode: februari-April
            </p>
            <h1 className="pl-[550px] text-[18px] font-semibold text-purple-300 pt-[15px]">
              Lihat Selengkapnya
            </h1>
          </div>
          {/* 2 */}
          <div className="border-[2px] border-t-[0px] border-black w-[811px] h-[200px] px-[16px] py-[24px] ">
            <div className=" ">
              <img className="absolute w-[200px] h-[154px]" src={W1}></img>
            </div>
            <h1 className=" w-[700px] font-extrabold text-[24px] pl-[200px] pt-[50px]">
              Study Abroad Mini Bootcamp
            </h1>
            <p className=" w-[700px] font-normal text-[20px] pl-[200px]">
              Event: 30 April 2024
            </p>
            <h1 className="pl-[550px] text-[18px] font-semibold text-purple-300 pt-[15px]">
              Lihat Selengkapnya
            </h1>
          </div>
          {/* 3 */}
          <div className="border-[2px] border-t-[0px] border-black w-[811px] h-[200px] px-[16px] py-[24px] ">
            <div className=" ">
              <img className="absolute w-[200px] h-[154px]" src={W7}></img>
            </div>
            <h1 className=" w-[700px] font-extrabold text-[24px] pl-[200px] pt-[50px]">
              Study Abroad Mini Bootcamp
            </h1>
            <p className=" w-[700px] font-normal text-[20px] pl-[200px]">
              Event: 17 Juni 2024
            </p>
            <h1 className="pl-[550px] text-[18px] font-semibold text-purple-300 pt-[15px]">
              Lihat Selengkapnya
            </h1>
          </div>
        </div>
      </div>
      <div className="h-screen w-screen"></div>
      {/* footer */}
      <Footer />
    </>
  );
};
export default FirstAktivitas;
