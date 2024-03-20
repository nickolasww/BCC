import {Link} from "react-router-dom"
import Figure from "../images/Figure.png"
import Google from "../images/Google.svg"
import Facebook from "../images/Facebook.svg"
import Instagram from "../images/Instagram.svg"
import Tweet from "../images/Tweet.svg"
import Linkedin from "../images/Linkedin.svg"
import Logo from "../images/Logo.svg"

const FirstSignUp = () => {
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
        <div className=" w-96 pl-60 pr-60 pt-10 pb-30 mr-48 mt-8 mb-32 rounded-3xl bg-white border-2 absolute">
            {/* Judul */}
            <form className=" -ml-60 -mr-60 -mt-10 pr-10 p-16 justify-center">
                <h1 className=" text-3xl -mt-10 -mb-5 font-bold">Create Account</h1>
                {/* Full Name */}
                <div className="">
                    <input className="input-box text-base px-4 py-1 mb-4 mt-9 w-full rounded-full border-2 border-gray-400 bg-transparent" type="text" placeholder="Full Name" required/>
                </div>
                {/* Email*/}
                <div className="">
                    <input className="input-box text-base px-4 py-1 mb-4  w-full rounded-full border-2 border-gray-400 bg-transparent" type="text" placeholder="Email Address" required/>
                </div>
                {/* Password*/}
                <div className="">
                    <input className="input-box text-base px-4 py-1 mb-4 w-full rounded-full border-2 border-gray-400 bg-transparent" type="Password" placeholder="Password" required/>
                </div>
                {/* Konfirmasi Password */}
                <div className="">
                    <input className="input-box text-base px-4 py-1 mb-4  w-full rounded-full border-2 border-gray-400 bg-transparent" type="text" placeholder="Konfirmasi Password " required/>
                </div>
                {/* Remember Me */}
                <div className="text-sm ">
                    <label><input Type="CheckBox"/>I agree to the <Link>terms of service</Link> and <Link>privacy policy</Link></label>
                </div>
                {/* Login Button */}
                <button className=" w-full h-full px-2 py-1 mt-5 mb-4 rounded-full border-2 border-purple-300 bg-purple-300 text-white font-semibold " type="submit">Sign Up</button>
                {/* Or */}
                <div className="text-center mt-5">
                    <p>Or Sign Up With</p>
                </div>
                {/* Icon */}
                <div className="flex justify-center space-x-8 mt-9 px-8">
                    <img className="border-2 rounded-full p-2" src={Google}></img>
                    <img className="border-2 rounded-full p-2" src={Facebook}></img>
                    <img className="border-2 rounded-full p-2" src={Instagram}></img>
                    <img className="border-2 rounded-full p-2 " src={Tweet}></img>
                    <img className="border-2 rounded-full p-2" src={Linkedin}></img>
                </div>
                {/* Sign up link */}
                <div className="text-center mt-9">
                    <p>already Have an account? <a href=" " className="font-bold text-purple-300">Log In</a></p>
                </div>
            </form>
            </div>
            </div>
            </>
    )
}

export default FirstSignUp 
