import Logo from "../images/Logo.svg"
import {Link} from "react-router-dom"

const FirstHome = () => { 
    return(
        <>
        {/* NavBar */}
        <div className="font-Poppins px-38 py-8">
            <div className="flex pl-20 space-x-1 text-center ">
                <img className="w-9 h-4 mt-4"src={Logo}></img>
                <Link to="/"><h1 className=" font-bold h-4 mt-3">Scofinity</h1></Link>
                <ul className=" mt-3 flex pl-60 space-x-7 cursor-pointer">
                    <Link to="/"><li className="">Home</li></Link>
                    <Link to="/AboutUs"><li>About Us</li></Link>
                    <Link to="/Scholarship"><li>Scholarship</li></Link>
                    <Link to="/ProgramBoothcamp"><li>Bootcamp & Program</li></Link>
                    <Link to="/Help"><li>Help</li></Link>
                </ul>
            <div className=" flex pl-80 space-x-2 cursor-pointer">
                <Link to="/Login"><h1 className=" border-2 border-purple-300 rounded-full px-10 py-3 text-purple-300 font-bold">Sign Up</h1></Link>
                <Link to="/Login"><h1 className="bg-purple-300 rounded-full px-10 py-3 text-white font-bold">Log in</h1></Link>
            </div>
            </div>
        </div>
        {/* Header */}
        <div className="font-Poppins">
            <section className= "bg-green-800">
            <h1>We Help To Build Your Dream</h1>
            </section>
        </div>
        </>
    )
}
export default FirstHome