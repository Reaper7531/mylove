import { NavLink } from "react-router";
import { CompassArray } from "../constants";

function Compass() {
  return (
    <>
      <div className="flex w-full flex-row justify-center items-center mt-10">
        <img className="h-fit w-15" src="/Images/Kuromi.png" alt="Kuromi" />
        <h1 className="text-4xl font-semibold custom-font underline text-[#3B3A45]">
          Guide Map
        </h1>
        <img
          className="h-fit w-15"
          src="/Images/pompourin.png"
          alt="Pompompurin"
        />
      </div>

      <div className="w-64 h-72 flex justify-center mt-15 relative">
        <img className="w-64 h-64" src="/Images/Compass.png" alt="Compass" />



        {/* Cardinal Direction Images */}
        {CompassArray.map((item)=>{
         return( <NavLink to={item.nlink} key={item.alt}>
           <img
          className={item.cname}
          src={item.src}
          alt={item.alt}
        />
          </NavLink>)
        })}
       
       
      </div>
    </>
  );
}

export default Compass;
