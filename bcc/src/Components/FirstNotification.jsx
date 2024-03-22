import Toa from "../images/NotifIcon/Toa.svg";
import Alert from "../images/NotifIcon/Alert.svg";
import Ring from "../images/NotifIcon/Ring.svg";

import NavBar from "./ReuseAble/NavBar";
import Footer from "./ReuseAble/Footer";

const FirstNotification = () => {
  return (
    <>
      {/* NavBar */}
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

        <div className="absolute pl-[300px] -mt-[70px] space-y-[20px]">
          <h1 className="font-bold text-[32px]">Notification</h1>
          <ul className="flex font-bold text-[20px] space-x-[32px] ">
            <li>All</li>
            <li>Beasiswa</li>
            <li>Workshop & Bootcamp</li>
          </ul>
        </div>
        {/* notification */}
        <div className="pt-[100px] pl-[300px] font-Poppins">
          {/* 1 */}
          <div className="border-[2px] border-black w-[811px] h-[110px] px-[16px] py-[24px] rounded-t-lg">
            <div className="w-[56px] h-[56px] absolute rounded-[100px] border-2 p-[10px] bg-purple-100">
              <img className="absolute " src={Toa}></img>
            </div>
            <p className=" w-[700px] font-normal text-[20px] pl-[100px]">
              Great news! Beasiswa LPDP telah dibuka untuk pendaftaran. Segera
              daftar sebelum tanggal tutup pendaftaran
            </p>
          </div>
          {/* 2 */}
          <div className="border-[2px] border-t-[0px] border-black w-[811px] h-[110px] px-[16px] py-[24px] ">
            <div className="w-[56px] h-[56px] absolute rounded-[100px] border-2 p-[14px] bg-purple-100">
              <img className="absolute " src={Ring}></img>
            </div>
            <p className=" w-[700px] font-normal text-[20px] pl-[100px]">
              Great news! Beasiswa LPDP telah dibuka untuk pendaftaran. Segera
              daftar sebelum tanggal tutup pendaftaran
            </p>
          </div>
          {/* 3 */}
          <div className="h-screen w-screen">
            <div className="border-[2px] border-t-[0px] border-black w-[811px] h-[110px] px-[16px] py-[24px] ">
              <div className="w-[56px] h-[56px] absolute rounded-[100px] border-2 p-[14px] bg-purple-100">
                <img className="absolute" src={Alert}></img>
              </div>
              <p className=" w-[700px] font-normal text-[20px] pl-[100px]">
                Great news! Beasiswa LPDP telah dibuka untuk pendaftaran. Segera
                daftar sebelum tanggal tutup pendaftaran
              </p>
            </div>
            {/* 4 */}
            <div className="border-[2px] border-t-[0px] border-black w-[811px] h-[110px] px-[16px] py-[24px] ">
              <div className="w-[56px] h-[56px] absolute rounded-[100px] border-2 p-[14px] bg-purple-100">
                <img className="absolute" src={Alert}></img>
              </div>
              <p className=" w-[700px] font-normal text-[20px] pl-[100px]">
                Great news! Beasiswa LPDP telah dibuka untuk pendaftaran. Segera
                daftar sebelum tanggal tutup pendaftaran
              </p>
            </div>
            {/* 5 */}
            <div className="border-[2px] border-t-[0px] rounded-b-lg border-black w-[811px] h-[110px] px-[16px] py-[24px] ">
              <div className="w-[56px] h-[56px] absolute rounded-[100px] border-2 p-[10px] bg-purple-100">
                <img className="absolute " src={Toa}></img>
              </div>
              <p className=" w-[700px] font-normal text-[20px] pl-[100px]">
                Great news! Beasiswa LPDP telah dibuka untuk pendaftaran. Segera
                daftar sebelum tanggal tutup pendaftaran
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen w-screen"></div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default FirstNotification;
