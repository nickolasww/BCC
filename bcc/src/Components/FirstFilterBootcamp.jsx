import NavBar from "./ReuseAble/NavBar";
import Footer from "./ReuseAble/Footer";
const FirstFilterBootcamp = () => {
  return (
    <>
      <NavBar />

      <div className="pt-[200px] font-Poppins">
        <h1 className="text-[60px] font-extrabold text-center w-[800px] ml-[350px]">
          Find The Most Exciting Online Course
        </h1>

        <div className="pt-[64px] pl-[400px] ">
          <input
            className="rounded-full w-[660px] h-[50px] p-[16px] border-2 bg-transparent"
            type="text"
            placeholder="Search Here"
          ></input>
        </div>
      </div>

      <div className="h-screen w-screen">
        <div className=" flex space-x-4 ml-[77px] pt-[64px]">
          <div className=" px-[32px] py-[10px] mt-5 mb-4 rounded-full border-2 bg-purple-100 font-semibold ">
            <h1>All</h1>
          </div>

          <div className="px-[32px] py-[10px] mt-5 mb-4 rounded-full border-[3px] border-purple-300 font-semibold text-purple-300">
            <h1>Persiapan TOEFL</h1>
          </div>

          <div className="px-[32px] py-[10px] mt-5 mb-4 rounded-full border-[3px] border-purple-300 font-semibold text-purple-300">
            <h1>Persiapan WAWANCARA</h1>
          </div>

          <div className="px-[32px] py-[10px] mt-5 mb-4 rounded-full border-[3px] border-purple-300 font-semibold text-purple-300">
            <h1>Persiapan ESSAY</h1>
          </div>
        </div>
      </div>

      <div className="h-screen w-screen">
        <h1 className="pl-[700px]">Testimonials</h1>
        <h1 className="pl-[550px] text-4xl font-extrabold">
          What Our Alumni Say
        </h1>
        \
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};
export default FirstFilterBootcamp;
