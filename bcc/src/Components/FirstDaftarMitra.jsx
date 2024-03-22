import NavBar from "./ReuseAble/NavBar";
import Footer from "./ReuseAble/Footer";

const FirstDaftarMitra = () => {
  return (
    <>
      {/* Nav Bar */}
      <NavBar />

      <div className="pt-[150px] pl-[600px] font-Poppins">
        <h1 className="text-[38px] font-extrabold text-purple-300">
          Daftar Mitra
        </h1>
      </div>

      <div className="pt-[128px] pl-[100px]">
        <h1 className="font-bold text-[20px]">Nama</h1>
        <div className="pt-[24px]">
          <input
            className="px-[32px] py-[24px] w-[500px] h-[45px] border-2 rounded-full border-gray-300 "
            type="text"
          ></input>
        </div>
      </div>

      {/*  */}
      <div className="pt-[32px] pl-[100px]">
        <h1 className="font-bold text-[20px]">Deskripsi Beasiswa</h1>
        <div className="pt-[24px]">
          <input
            className="px-[32px] py-[24px] w-[500px] h-[45px] border-2 rounded-full border-gray-300 "
            type="text"
          ></input>
        </div>
      </div>

      <div className="h-screen w-screen">
        <div className="pt-[32px] pl-[100px]">
          <h1 className="font-bold text-[20px]">Perusahaan</h1>
          <div className="pt-[24px]">
            <input
              className="px-[32px] py-[24px] w-[500px] h-[45px] border-2 rounded-full border-gray-300 "
              type="text"
            ></input>
          </div>
        </div>

        <div className="pt-[32px] pl-[100px]">
          <h1 className="font-bold text-[20px]">Program</h1>
          <div className="pt-[24px]">
            <input
              className="px-[32px] py-[24px] w-[500px] h-[45px] border-2 rounded-full border-gray-300 "
              type="text"
            ></input>
          </div>
        </div>

        <div className="pt-[32px] pl-[100px]">
          <h1 className="font-bold text-[20px]">Benefit</h1>
          <div className="pt-[24px]">
            <input
              className="px-[32px] py-[24px] w-[500px] h-[45px] border-2 rounded-full border-gray-300 "
              type="text"
            ></input>
          </div>
        </div>

        <div className="pt-[32px] pl-[100px]">
          <h1 className="font-bold text-[20px]">Persyaratan</h1>
          <div className="pt-[24px]">
            <input
              className="px-[32px] py-[24px] w-[500px] h-[45px] border-2 rounded-full border-gray-300 "
              type="text"
            ></input>
          </div>
        </div>

        {/* kanan */}
        <div className="  pl-[800px] -mt-[790px]">
          <h1 className="font-bold text-[20px]">Waktu Dibuka</h1>
          <div className="pt-[24px]">
            <input
              className="px-[32px] py-[24px] w-[500px] h-[45px] border-2 rounded-full border-gray-300 "
              type="text"
            ></input>
          </div>
        </div>

        <div className="  pl-[800px] mt-[32px]">
          <h1 className="font-bold text-[20px]">Waktu Ditutup</h1>
          <div className="pt-[24px]">
            <input
              className="px-[32px] py-[24px] w-[500px] h-[45px] border-2 rounded-full border-gray-300 "
              type="text"
            ></input>
          </div>
        </div>

        <div className=" pl-[800px] pt-[30px]">
          <h1 className="font-bold text-[20px]">Jenjang Beasiswa</h1>
          <div className="pt-[24px]">
            <input
              className="px-[32px] py-[24px] w-[500px] h-[45px] border-2 rounded-full border-gray-300 "
              type="text"
            ></input>
          </div>
        </div>

        <div className=" pl-[800px] pt-[30px]">
          <h1 className="font-bold text-[20px]">Untuk Semester Berapa</h1>
          <div className="pt-[24px]">
            <input
              className="px-[32px] py-[24px] w-[500px] h-[45px] border-2 rounded-full border-gray-300 "
              type="text"
            ></input>
          </div>
        </div>

        <div className=" pl-[800px] pt-[34px]">
          <h1 className="font-bold text-[20px]">Luar/Dalam Negeri</h1>
          <div className="pt-[24px]">
            <input
              className="px-[32px] py-[24px] w-[500px] h-[45px] border-2 rounded-full border-gray-300 "
              type="text"
            ></input>
          </div>
        </div>

        <div className=" pl-[800px] pt-[35px]">
          <h1 className="font-bold text-[20px]">Kategori Beasiswa</h1>
          <div className="pt-[24px]">
            <input
              className="px-[32px] py-[24px] w-[500px] h-[45px] border-2 rounded-full border-gray-300 "
              type="text"
            ></input>
          </div>
        </div>
      </div>

      <div className="h-[500px] w-screen">
        <div className="pl-[100px]">
          <label>
            <input Type="CheckBox" />
            Saya bersedia menerima update informasi dari schofinity
          </label>
        </div>

        <div className="pl-[100px] pt-[28px]">
          <div className=" cursor-pointer w-[150px] text-center absolute border-2 bg-purple-300 rounded-full px-7 py-2 text-white font-bold">
            <h1>Submit</h1>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};
export default FirstDaftarMitra;
