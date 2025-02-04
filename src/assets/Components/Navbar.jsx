
import { NavLink } from "react-router"

const Navbar = () => {
  return (
    <div className="w-full sticky h-14 bg-black text-left flex items-center justify-between ">
      <NavLink to="/admin">
        <div className="text-white inline-flex  text-2xl ml-5 font-mono font-semibold text-pretty">
           SJ
            <img className="w-6" src="/heart.svg" alt="" />
                        
        </div>
        </NavLink>
      <NavLink to="/map">
      <img className="w-10 h-10 mr-10" src="/Images/NavCompass.png" alt="" />
        </NavLink>  
        
    </div>
  )
}

export default Navbar
