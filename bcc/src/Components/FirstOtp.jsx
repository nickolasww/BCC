import {Link} from "react-router-dom"
import Figure from "../images/Figure.png"
import Google from "../images/Google.svg"
import Facebook from "../images/Facebook.svg"
import Instagram from "../images/Instagram.svg"
import Tweet from "../images/Tweet.svg"
import Linkedin from "../images/Linkedin.svg"
import Logo from "../images/Logo.svg"

const FirstOtp = () => {
    return(
        <>
       <div className=" relative flex justify-end items-start w-screen h-screen bg-purple-300  ">
             {/* Background blur */}
             <div className= "circlePosition w-[500px] h-[450px] bg-gradient-to-r from-purple-100 from-17% via-purple-500 via-100% to-purple-100 to-17% rounded-[100%] absolute z-1 top[50%] left-[15%] translate-y-60 blur-[127px]"></div>
             <div className= "circlePosition w-[500px] h-[450px] bg-gradient-to-r from-purple-100 from-17% via-purple-500 via-100% to-purple-100 to-17% rounded-[100%] absolute z-1 -translate-x-3/4 blur-[150px]"></div>
            {/* icon schotify*/}
            <div className=" flex w-[17px] h-[36px] mt-100 mr-[1270px] space-x-2 absolute">
                <img src={Logo}></img>
                <p className="h-4 mt-1 font-bold text-white">Schofinity</p>
            </div>

            {/* Orang */}
            <div className=" w-[340px] pt-[255px] mr-[900px] left- absolute">
                <img src={Figure}></img>
            </div>
            {/* Judul */}
            <div className=" absolute font-bold font-Poppins left-60 text-4xl pt-12 w-[300px] text-white ">
            <h1 className="">learn From World's Best Instructors Around The World.</h1>
            </div>

             {/* Login Register Page */}
        <div className="rounded-[50px] mt-[50px] mr-[70px] bg-white border-2 absolute">
            {/* Judul */}
            <form className="h-[450px] p-[20px] justify-center m-[64px] border-red-900 border-4">
            {/* -ml-60 -mr-60 -mt-10 pr-10 p-16 */}
                <h1 className=" text-3xl -mt-10 -mb-5 font-bold">Verify Your Account</h1>
                <p className="pt-[25px]">An Authorization code has been sent to your email</p>
                {/* 1*/}
            <div className="flex">
                <div className=" text-base h-[80px] w-[60px] text-center rounded-[15px] border-2 border-gray-400 bg-transparent ">
                    <input className=" text-base h-[80px] w-[60px] text-center rounded-[15px] hidden" type="number" required/>
                </div>
                {/* 2*/}
                <div className="">
                    <input className="input-box text-base h-[80px] w-[40px] p-[32px] justify-items-center rounded-[15px] border-2 border-gray-400 bg-transparent" type="text"  required/>
                </div>
                {/* 3*/}
                <div className="">
                    <input className="input-box text-base h-[80px] w-[60px] p-[32px] justify-items-center rounded-[15px] border-2 border-gray-400 bg-transparent" type="text"  required/>
                </div>
                {/* 4 */}
                <div className="">
                    <input className="input-box text-base h-[80px] w-[60px] p-[32px] justify-items-center rounded-[15px] border-2 border-gray-400 bg-transparent" type="text"  required/>
                </div>
                {/* 5 */}
                <div className="">
                    <input className="input-box text-base h-[80px] w-[60px] p-[32px] justify-items-center rounded-[15px] border-2 border-gray-400 bg-transparent" type="text" maxLength={1} required/>
                </div>
                {/* 6 */}
                <div className="">
                    <input className="input-box text-base h-[80px] w-[60px] p-[32px] justify-items-center rounded-[15px] border-2 border-gray-400 bg-transparent" type="text"  required/>
                </div>
            </div>
                {/* Remember Me */}
                <div className="text-sm text-center">
                    <p>didn't receive the code? Resend Code</p>
                </div>
                {/* Login Button */}
                <div>
                    <button className=" w-full h-full px-2 py-1 mt-5 mb-4 rounded-full border-2 border-purple-300 bg-purple-300 text-white font-semibold " type="submit">Next</button>
                </div>
            </form>
            </div>
            </div>
            </>
    )
}

export default FirstOtp 
