import { LegendArray } from "../constants"
function Legend() {
  return (
   <>
     <div className="w-64 mt-10 gap-5 items-center flex flex-col">
    <h2 className="custom-font text-4xl underline">Legend</h2>
   
{
    LegendArray.map((item)=>(
        <div key={item.src} className="flex justify-center items-center w-64 gap-5">
            <img src={item.src} className={item.cass} alt={item.alt} />
            <p>{item.text}</p>
    
        </div>
    ))
}
  </div>
   </>
  )
}

export default Legend