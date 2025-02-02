import { NavLink } from "react-router"

const Navbar = () => {
  return (
    <div className="w-full sticky h-14 bg-black text-left flex items-center justify-between ">
      <NavLink to="/">
        <h2 className="text-white  text-2xl ml-5 font-mono font-semibold text-pretty">
           SJ<span className="text-4xl text-[#D3B0E0]  ml-2 font-bold">&hearts;</span>                
        </h2>
        </NavLink>
      <NavLink to="/map">
      <img className="w-10 h-10 mr-10" src="/Images/NavCompass.png" alt="" />
        </NavLink>  
    </div>
  )
}

export default Navbar
