
import { NavLink } from "react-router"

const Navbar = () => {
  return (
    <div className="w-full sticky h-14 bg-black text-left flex items-center justify-between ">
      <NavLink to="/">
        <div className="text-white inline-flex  text-2xl ml-5 font-mono font-semibold text-pretty">
           SJ
            <img className="w-6" src="/heart.svg" alt="" />
                        
        </div>
        </NavLink>
        <div className="flex mr-10 gap-5">
        <NavLink to="/map">
      <img className="w-10 h-10 " src="/Images/NavCompass.png" alt="" />
        </NavLink>  
        <NavLink to="/admin">
          <img className="w-10 h-10" src="/admin.png" alt="" />
        </NavLink>
        
        </div>
    
    </div>
  )
}

export default Navbar
