import Logo from "../images/Logo.png"
const FirstHome = () => { 
    return(
        <>
        <div className="font-Poppins px-38 py-8">
            <div className="flex pl-20 space-x-1">
                <img className="w-9 h-4 mt-1"src={Logo}></img>
                <h1 className="font-bold text-center">Scofinity</h1>
                <ul className="flex pl-72 space-x-7">
                    <button><li className="">Home</li></button>
                    <button><li>About Us</li></button>
                    <button><li>Scholarship</li></button>
                    <button><li>Bootcamp & Program</li></button>
                    <button><li>Help</li></button>
                </ul>
            <div className=" flex pl-80 space-x-4">
                <button className="bg-white border-spacing-1"><h1>Sign Up</h1></button>
                <button className="bg-purple-300"><h1>Log in</h1></button>
            </div>
            </div>
        </div>

        <div>
            Homepage
        </div>
        </>
    )
}
export default FirstHome