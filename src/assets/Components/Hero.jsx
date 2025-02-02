import { NavLink } from "react-router";

function Hero() {
  return (
    <div className="w-full h-72 md:mt-5 flex justify-center">
      <div className="w-full md:rounded-3xl md:w-2/3 h-full bg-rose-200 flex flex-col justify-center items-center">
        <h3 className="text-black font-extralight text-nowrap font-mono text-xl md:text-3xl">
          For my precious and amazing gf
        </h3>
        <div className="mt-5 w-16 h-16">
        <NavLink to="/map">
          <div className="animate-bounce duration-1000">
            <img className=" " src="/Images/mail.png" alt="click me" />
            <p className="text-sm text-nowrap font-extralight font-serif text-black">           
              Click me :D             
            </p>
          </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Hero;
