import { art,scenery } from "../constants"
import Masonry from "../Components/Masonry"
import { useMemo } from "react"
function ArtGallery() {
  const artMemoised=useMemo(()=>art,[])
  const sceneryMemoised=useMemo(()=>scenery,[])
  return (
   <div className=" flex-col h-max flex m-auto justify-center items-center gap-10  w-full">
         <h1 className="text-2xl md:text-3xl  mt-10 custom-font text-semibold text-pink-800">World by her hands</h1>
       <Masonry data={artMemoised}/>

       <h1 className="text-2xl md:text-3xl  mt-10 custom-font text-semibold text-pink-800">World by her eyes</h1>
       <Masonry data={sceneryMemoised}/>
      
       </div>
  )
}

export default ArtGallery