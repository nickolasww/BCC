import {Link} from "react-router-dom"

const FirstModal = () => { 

    return(
        <>
        {/* Open the modal using document.getElementById('ID').showModal() method */}

<button className="btn  ml-[100px] mt-[30px] w-[620px] h-[70px] p-[16px] justify-items-center rounded-[100px] shadow-sm bg-purple-300 font-bold text-[24px] text-center text-white " onClick={()=>document.getElementById('my_modal_1').showModal()}>Done</button>
<dialog id="my_modal_1" className="modal" >
  <div className="modal-box bg-purple-100 h-[437px] w-[400px] p-[32px]">

    <div className="ml-[300px]">
    <form method="dialog">
        <button className="btn bg-purple-100 border-purple-100" >X</button>
    </form>
    </div>

    <h3 className="font-bold text-[24px] text-center -mt-[50px] text-purple-300">Enjoying Schofinity?</h3>
    <h4 className="font-bold text-[20px] text-center">Rate Your experience</h4>

<div className="mt-[25px] ml-[100px]">
    <div className="rating">
        <input type="radio" name="rating-1" className="mask mask-star " />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
    </div>
</div>

<div className="">
<input type="text" placeholder="Type here" className=" pb-[100px] input w-full rounded-[0px] bg-gray-300 max-w-xs mt-[20px] h-[150px] "/>
</div>

<div className="flex space-x-[200px]">
    <div className="pt-[30px] ">
    <form method="dialog">
        <button className="btn bg-white border-purple-100 text-purple-300" >Cancel</button>
    </form>
    </div>

    <div className="pt-[30px]">
    <form method="dialog">
        <button className="btn bg-purple-300 border-purple-100 text-white" >Post</button>
    </form>
    </div>
</div>
{/* 
    <form method="dialog">
    <Link to="/ProgramBoothcamp"><button><div className=" absolute w-[400px] mt-[140px] ml-[20px] bg-purple-200 rounded-full p-[18px] text-white font-bold">
    <p className="text-[24px] font-semibold text-center">Mentoring 1-on-1</p>
    </div></button></Link>
    </form> */}

    </div>
</dialog>
        </>
    )
}
export default FirstModal 