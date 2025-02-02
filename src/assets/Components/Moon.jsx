

function Moon() {
  return (
    <>
    <div className="w-full mt-10 flex justify-center items-center">
        <div className="w-full md:w-1/2 flex flex-col md:flex-row">
        <div className="w-full 0 md:w-1/2 flex-col flex items-center  h-80">
        <img className="" src="/Images/Moon2.png" alt="" />
        </div>    
            <div className="w-full md:w-1/2 h-80 flex flex-col  justify-center items-center">
            <p className="font-sans text-xl"><span className="font-bold">Date :</span> 23 March 2006 </p>
            <p className="font-sans text-xl"><span className="font-bold">Star Sign :</span> Aries </p>
            <p className="font-sans text-xl"><span className="font-bold">Moon Phase :</span> Last Quarter </p>
            <p className="font-sans text-xl text-blue-600"><span className="font-bold text-black">Birth Stone :</span> Aquamarine </p>        
            <p className="font-sans text-xl "><span className="font-bold text-black">Fav Animal :</span> Rat </p>
            </div>
        </div>    
    </div>
    </>
  )
}

export default Moon  