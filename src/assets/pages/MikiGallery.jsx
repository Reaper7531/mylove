import { useMemo } from "react"
import BentoGrid from "../Components/Masonry"
import { miki } from "../constants"


function MikiGallery() {
  const mikiMemoised=useMemo(()=>miki,[]) 
  return (
    <div className=" flex-col h-max flex m-auto justify-center items-center gap-10  w-full">
      <h1 className="text-2xl md:text-3xl  mt-10 custom-font text-semibold text-pink-800">Miki(Our son FR)</h1>
    <BentoGrid data={mikiMemoised}/>
    </div>
  )
}

export default MikiGallery