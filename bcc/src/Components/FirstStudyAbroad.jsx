import Abroad from "../images/Abroad.svg";
import Vector from "../images/Vector.svg";
import Footer from "./ReuseAble/Footer";
import NavBar from "./ReuseAble/NavBar";

import Pemateri from "../images/Pemateri.svg";
const FirstStudyAbroad = () => {
  return (
    <>
      <NavBar />
      {/* Header awal */}
      <div className="font-Poppins ">
        <div className="h-screen w-screen bg-purple-300 font-Poppins">
          <div className="absolute">
            <img className="pt-[200px] pl-[100px]" src={Abroad}></img>
          </div>
          <div className=" pl-[700px] pt-[250px]">
            <h1 className="absolute w-[500px] text-[54px] font-bold text-white">
              Study Abroad Mini Bootcamp
            </h1>
          </div>
          <div className="absolute pl-[700px] pt-[220px] flex space-x-[5px]">
            <h1 className=" border-2 border-purple-100 rounded-full px-7 py-2 text-purple-100 font-bold">
              Dapatkan Promo
            </h1>
            <h1 className="border-2 bg-white rounded-full px-7 py-2 font-bold text-purple-300">
              Daftar Sekarang
            </h1>
          </div>
        </div>

        {/* pemateri workshop serupa */}
        <div className="h-screen w-screen">
          <div className="absolute">
            <h1 className="font-extrabold text-[32px] pl-[100px] pt-[100px]">
              Pemateri
            </h1>
            <div className="flex pl-[100px] pt-[32px] ">
              <img src={Pemateri}></img>
              <div className="pt-[10px] pl-[50px]">
                <h1 className="font-bold text-[20px]">
                  Nama: Dr. Maria Garcia
                </h1>
                <h1 className=" font-bold text-[20px]">
                  Pendidikan: S2 Oxford University
                </h1>
              </div>
            </div>
          </div>

          <div className="absolute pl-[100px] pt-[350px]">
            <h1 className="font-extrabold text-[32px]">Deskripsi</h1>
            <p className="text-justify text-[24px] font-normal w-[550px] pt-[32px]">
              Mini Bootcamp ini dirancang khusus untuk siswa yang berencana
              untuk melanjutkan studi di luar negeri. Kami menyediakan
              pengalaman belajar intensif dan mendalam dalam persiapan esai,
              wawancara, dan keterampilan bahasa Inggris melalui pendekatan yang
              interaktif dan terarah. Peserta akan dibimbing oleh instruktur
              yang berpengalaman dan akan mendapatkan wawasan berharga tentang
              taktik dan strategi untuk sukses dalam aplikasi mereka.
            </p>
          </div>

          <div className="absolute pt-[100px] pl-[1000px]">
            <h1 className="font-extrabold text-[32px]">Workshop Serupa</h1>
          </div>

          <div className="absolute pt-[150px] pl-[1000px]">
            <div className="absolute pt-[70px] pl-[20px]">
              <img src={Vector}></img>
            </div>
            <div className="pt-[32px]">
              <div className="border-2 border-purple-300 rounded-[20px] w-[400px] h-[150px] p-[32px] pl-[100px] ">
                <h1 className="text-[24px] font-bold -mt-[10px]">
                  Persiapan Esai
                </h1>
                <p className="text-[24px]">Minggu 1</p>
              </div>
            </div>
          </div>

          <div className="absolute pt-[350px] pl-[1000px]">
            <div className="absolute pt-[70px] pl-[20px]">
              <img src={Vector}></img>
            </div>
            <div className="pt-[32px]">
              <div className="border-2 border-purple-300 rounded-[20px] w-[400px] h-[150px] p-[32px] pl-[100px] ">
                <h1 className="text-[24px] font-bold -mt-[10px]">
                  Persiapan Wawancara
                </h1>
                <p className="text-[24px]">Minggu 2</p>
              </div>
            </div>
          </div>

          <div className="absolute pt-[550px] pl-[1000px]">
            <div className="absolute pt-[70px] pl-[20px]">
              <img src={Vector}></img>
            </div>
            <div className="pt-[32px]">
              <div className="border-2 border-purple-300 rounded-[20px] w-[400px] h-[150px] p-[32px] pl-[100px] ">
                <h1 className="text-[24px] font-bold -mt-[10px]">
                  Persiapan TOEFL
                </h1>
                <p className="text-[24px]">Minggu 3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Detail bootcamp */}
        <div className="w-screen h-screen">
          <div className=" pt-[150px] pl-[100px]">
            <h1 className="font-extrabold text-[32px] ">Detail Boothcamp</h1>
          </div>

          <div className="-mt-[32px]">
            <div className="  ml-[100px] mt-[64px] w-[550px] h-[235px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-purple-100 ">
              <h1 className="text-[24px] font-bold ">Durasi dan Jadwal</h1>
              <p className="font-normal text-[24px] pt-[12px] w-[450px] text-justify">
                Bootcamp ini berlangsung selama 4 minggu. Setiap kelas
                berlangsung dua kali seminggu, dengan durasi 2 jam setiap
                pertemuan.
              </p>
            </div>
          </div>

          <div className="-mt-[32px] text-justify">
            <div className="  ml-[100px] mt-[64px] w-[550px] h-[400px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-purple-100 ">
              <h1 className="text-[24px] font-bold ">Biaya</h1>
              <p className="font-normal text-[24px] pt-[12px]">
                Rp 2.500.000,-
              </p>
              <p className="font-normal text-[24px] pt-[22px]">
                Untuk Seluruh paket bootcamp (termasuk kelas persiapan esai,
                wawancara, dan TOEFL).
              </p>
              <p className="font-normal text-[24px]">
                {" "}
                Metode Pembayaran: Pembayaran dapat dilakukan melalui transfer
                bank atau pembayaran tunai di kantor kami
              </p>
            </div>
          </div>

          <div className="-mt-[32px] text-justify">
            <div className="  ml-[100px] mt-[64px] w-[550px] h-[200px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-purple-100 ">
              <h1 className="text-[24px] font-bold ">Lokasi</h1>
              <p className="font-normal text-[24px] pt-[12px]">
                Bootcamp ini akan diselenggarakan secara daring (online) melalui{" "}
                <strong>Platform Zoom.</strong>
              </p>
            </div>
          </div>

          <div className="-mt-[32px] text-justify">
            <div className="  ml-[100px] mt-[64px] w-[550px] h-[200px] p-[32px] justify-items-center rounded-3xl shadow-sm bg-purple-100 ">
              <h1 className="text-[24px] font-bold ">Kuota Peserta</h1>
              <p className="font-normal text-[24px] pt-[12px]">
                Terbatas hingga 20 peserta untuk memastikan pengalaman
                pembelajaran yang intensif dan interaktif.
              </p>
            </div>
          </div>

          <div className="h-screen w-screen">
            <div className="pl-[100px] pt-[50px]">
              <div className="absolute w-[550px] text-center">
                <h1 className="border-2 bg-purple-300 rounded-full px-7 py-[15px] text-white font-bold">
                  Daftar
                </h1>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default FirstStudyAbroad;
