import Logo from "../images/Logo.png"
const FirstHome = () => { 
    return(
        <>
        <div className="bg-green-800 px-38 py-8">
            <div className="flex pl-5">
                <img src={Logo}></img>
                <h1>Scofinity</h1>
            <div className="flex">
                <ul className="flex">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Scholarship</li>
                    <li>Bootcamp & Program</li>
                    <li>Help</li>
                    <li>Sign Up</li>
                    <li>Log in</li>
                </ul>
            </div>
            </div>
        </div>
        </>
    )
}
export default FirstHome